"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/moving-border';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Huachen's AI Assistant. Ask me about Huachen Materials Science, our premium products, or our coating technology.",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    // AI Response Logic
    setTimeout(() => {
      const lowerInput = userText.toLowerCase();
      let responseText = "";

      // Knowledge Base
      if (lowerInput.includes("huachen") || lowerInput.includes("company") || lowerInput.includes("about") || lowerInput.includes("who")) {
        responseText = "Huachen Materials Science is a leading global textile manufacturer specializing in functional fabrics and coating technology. Founded with a vision for quality, we serve markets in Europe, North America, and Asia.";
      } else if (lowerInput.includes("product") || lowerInput.includes("fabric") || lowerInput.includes("textile") || lowerInput.includes("material")) {
        responseText = "We offer a wide range of premium textiles, including high-performance blackout curtains, industrial fabrics, and eco-friendly solutions. Our products are Oeko-Tex certified and designed for durability.";
      } else if (lowerInput.includes("coating") || lowerInput.includes("tech") || lowerInput.includes("uniformity")) {
        responseText = "Our proprietary curtain coating technology ensures 100% uniformity and superior performance. We leverage advanced manufacturing processes to meet the highest industry standards.";
      } else if (lowerInput.includes("contact") || lowerInput.includes("sales") || lowerInput.includes("buy") || lowerInput.includes("price") || lowerInput.includes("order")) {
        responseText = "You can reach our sales team directly through the Contact page or by registering on our Distributor Portal for bulk pricing.";
      } else if (lowerInput.includes("aesthetic") || lowerInput.includes("design") || lowerInput.includes("chinese") || lowerInput.includes("style")) {
        responseText = "Our designs reflect a 'New Chinese' aesthetic, blending traditional elegance with modern functionality to create unique and sophisticated textile solutions.";
      } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
        responseText = "Hello! How can I assist you with Huachen's products today?";
      } else {
        // Fallback generic responses
        const genericResponses = [
          "I can help you learn more about our manufacturing capabilities and global reach.",
          "Could you please specify if you're interested in our coating technology or fabric collections?",
          "We are dedicated to quality. Ask me about our Oeko-Tex certification.",
          "I'm here to answer your questions about Huachen Materials Science.",
          "Would you like to know more about our global distribution network?"
        ];
        responseText = genericResponses[Math.floor(Math.random() * genericResponses.length)];
      }
      
      const newAiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200"
          >
            {/* Header */}
            <div className="bg-[#003366] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Huachen Assistant</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#003366] text-white rounded-br-none'
                        : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-none p-3 shadow-sm border border-slate-100 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-100">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-[#cd7f32] focus:ring-1 focus:ring-[#cd7f32] transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-[#cd7f32] text-white rounded-full flex items-center justify-center hover:bg-[#b06a2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="text-center mt-2">
                 <p className="text-[10px] text-slate-400">AI can make mistakes. Please verify important information.</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        borderRadius="9999px"
        containerClassName="w-16 h-16"
        className="bg-[#003366] text-white border-transparent shadow-lg hover:shadow-xl transition-shadow"
        borderClassName="bg-[radial-gradient(#cd7f32_40%,transparent_60%)]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
    </div>
  );
};
