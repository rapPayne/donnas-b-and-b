import { ChatOpenAI } from "@langchain/openai";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnablePassthrough } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import fs from 'fs';

/**
 * Establishes the Langchain chain with the contents of a PDF as primary option and OpenAI as a backup source
 * @param {string} pdfPath Where the PDF file is located
 * @returns {Promise<LCEL chain} The Langchain ... uhh ... chain
 */
export async function setupLCELChain(pdfPath) {
  const openAI_API_KEY = process.env.OPENAI_API_KEY;

  // Load the PDF
  const loader = new PDFLoader(pdfPath);
  const docs = await loader.load(); // docs are chunks of the PDF (pages, I think?) in JS Objects with content as text.

  // Embed docs into vector store using OpenAI to do the heavy lifting
  const embeddings = new OpenAIEmbeddings({ openAIApiKey: openAI_API_KEY });
  const vectorstore = await MemoryVectorStore.fromDocuments(docs, embeddings);
  const retriever = vectorstore.asRetriever();  // Will be used later to return the most relevant parts when asked a question

  // Prompt template - each request will be sent to OpenAI in this format.
  const promptTemplate = PromptTemplate.fromTemplate(
    `Answer the question based only on the following context:

{context}

Question: {question}`
  );

  // LLM
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.3,  // Lower temp -> closer to the source material. Don't get too wild, Chat!
  });

  // Build the LCEL chain
  const chain = RunnableSequence.from([
    {
      context: RunnableSequence.from([prev => prev.question, retriever]),
      question: new RunnablePassthrough(),  // Passes control to the next step
    },
    promptTemplate,   // Reads the info from the previous step and puts it into a prompt usable by OpenAI
    model,  // Sends the formatted prompt to OpenAI
    new StringOutputParser(),  // Gets the output from OpenAI and pulls out the answer in plain text.
  ]);

  return chain;
}
