import React, { useState } from 'react';
import { Send, MessageCircle, Bot, User, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Help = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with any questions about Donna's Home away from Home. Feel free to ask about reservations, amenities, breakfast, rates, or anything else!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5100/api/help', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (response.ok) {
        const botMessage: Message = {
          id: Date.now() + 1,
          text: data.response,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again later or call us at (555) 123-4567 for immediate assistance.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "How do I make a reservation?",
    "What amenities do you offer?",
    "What's included in breakfast?",
    "What are your rates?",
    "Where are you located?",
    "What's your cancellation policy?"
  ];

  const handleSuggestedQuestion = (suggestedQuestion: string) => {
    setQuestion(suggestedQuestion);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Help & Support</h1>
          <p className="text-xl text-orange-100">
            Ask me anything about your stay at Donna's Home away from Home
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md`}>
                  {!message.isUser && (
                    <div className="flex-shrink-0">
                      <Bot className="h-8 w-8 text-orange-500 bg-orange-100 rounded-full p-1" />
                    </div>
                  )}

                  <div
                    className={`rounded-lg px-4 py-3 ${message.isUser
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.isUser ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>

                  {message.isUser && (
                    <div className="flex-shrink-0">
                      <User className="h-8 w-8 text-gray-500 bg-gray-200 rounded-full p-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3">
                  <Bot className="h-8 w-8 text-orange-500 bg-orange-100 rounded-full p-1" />
                  <div className="bg-gray-100 rounded-lg px-4 py-3">
                    <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="border-t p-6">
            <form onSubmit={handleSubmit} className="flex space-x-4">
              <div className="flex-1">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything about reservations, amenities, breakfast, rates, or policies..."
                  className="w-full px-4 py-3 border-2 border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none bg-white text-gray-900 placeholder-gray-500 shadow-sm"
                  rows={2}
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={!question.trim() || isLoading}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center shadow-sm"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Common Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {suggestedQuestions.map((suggestedQuestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedQuestion(suggestedQuestion)}
                className="text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors duration-200"
                disabled={isLoading}
              >
                <span className="text-gray-700 text-sm">{suggestedQuestion}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 bg-orange-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-4">
            If you need immediate help or prefer to speak with someone directly:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
            <a
              href="mailto:donna@homewayaway.com"
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold border border-orange-500 hover:bg-orange-50 transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;