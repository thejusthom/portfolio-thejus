import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';
import ReactGA from 'react-ga4';
import '../styles/ChatWidget.css';

// Update this after deploying your backend
const API_URL = process.env.REACT_APP_CHAT_API_URL || 'https://api-portfolio-chatbot.vercel.app/api/chat.js';

// Track chat events
const trackChatEvent = (action, message) => {
  ReactGA.event(action, {
    category: 'Chat',
    message_text: message,
  });
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hey! 👋 I'm Thejus's AI assistant. Ask me anything about his experience, skills, or projects!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    // Track message sent
    trackChatEvent('Message Sent', userMessage);
    
    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-10).map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      trackChatEvent('Error', 'API connection failed');
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Feel free to reach out to Thejus directly at thomson.th@northeastern.edu!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What's your tech stack?",
    "Tell me about IBM",
    "What projects have you built?",
    "Are you available for hire?"
  ];

  const handleSuggestedQuestion = async (question) => {
    if (isLoading) return;
    
    // Track suggested question click
    trackChatEvent('Suggestion Clicked', question);
    
    // Add user message immediately
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          history: messages.slice(-10).map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.reply 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      trackChatEvent('Error', 'API connection failed');
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Sorry, I'm having trouble connecting right now. Feel free to reach out to Thejus directly at thomson.th@northeastern.edu!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleChat = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    trackChatEvent(newState ? 'Chat Opened' : 'Chat Closed', '');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={handleToggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="chat-toggle-badge">Ask AI</span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="chat-avatar">
                  <FaRobot size={20} />
                </div>
                <div>
                  <h4>Chat with Thejus's AI</h4>
                  <span className="chat-status">
                    <span className="status-dot"></span>
                    Online
                  </span>
                </div>
              </div>
              <button 
                className="chat-close" 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`chat-message ${message.role}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.role === 'assistant' && (
                    <div className="message-avatar">
                      <FaRobot size={14} />
                    </div>
                  )}
                  <div className="message-content">
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <motion.div
                  className="chat-message assistant"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="message-avatar">
                    <FaRobot size={14} />
                  </div>
                  <div className="message-content typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length <= 2 && (
              <div className="chat-suggestions">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="suggestion-chip"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form className="chat-input-form" onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Thejus..."
                disabled={isLoading}
                className="chat-input"
              />
              <button 
                type="submit" 
                className="chat-send"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
              >
                <FaPaperPlane size={16} />
              </button>
            </form>

            {/* Footer */}
            <div className="chat-footer">
              Powered by Gemini • Built by Thejus
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;