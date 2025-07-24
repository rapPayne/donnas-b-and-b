import { ChatOpenAI } from "@langchain/openai";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RunnableSequence } from "@langchain/core/runnables";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnablePassthrough } from "@langchain/core/runnables";
import { PromptTemplate } from "@langchain/core/prompts";
import fs from 'fs';

export async function setupLCELChain(pdfPath) {
  const openAI_API_KEY = process.env.OPENAI_API_KEY;

  // Load the PDF
  const loader = new PDFLoader(pdfPath);
  const docs = await loader.load();

  // Embed docs into vector store
  const embeddings = new OpenAIEmbeddings({ openAIApiKey: openAI_API_KEY });
  const vectorstore = await MemoryVectorStore.fromDocuments(docs, embeddings);
  const retriever = vectorstore.asRetriever();

  // Prompt template
  const prompt = PromptTemplate.fromTemplate(
    `Answer the question based only on the following context:

{context}

Question: {question}`
  );

  // LLM
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    temperature: 0.2,
  });

  // LCEL chain
  const chain = RunnableSequence.from([
    {
      context: RunnableSequence.from([prev => prev.question, retriever]),
      question: new RunnablePassthrough(),
    },
    prompt,
    model,
    new StringOutputParser(),
  ]);

  return chain;
}
