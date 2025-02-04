import React, { useState } from "react";
import { sendMessageToAI } from "../../utils/chatAPI.js";
import { useTheme } from "../theme.jsx";


const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  let {theme} = useTheme();

  const handleSend = async () => {
    if (!message) return;
    
    const userMessage = { role: "user", content: message };
    setChat([...chat, userMessage]);

    const aiReply = await sendMessageToAI(message);
    setChat([...chat, userMessage, { role: "ai", content: aiReply }]);

    setMessage("");
  };

  return (
    <div className="flex flex-col h-screen lg:mx-80" data-theme={theme}>
    {/* Header with dynamic theme */}
    <div className="p-4 bg-gradient-to-r from-[var(--bg-color)] via-opacity-90 to-[var(--bg-color)] shadow-md">
      <h2 className="text-2xl font-bold text-[var(--heading-color)] text-center">
        AI Chatbot
      </h2>
    </div>
  
    {/* Chat Messages Container */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg2">
      {chat.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`p-3 rounded-2xl max-w-md ${
              msg.role === "user" 
                ? "bg-blue-500 text-white rounded-br-none" 
                : "bg-[var(--bg-color)] text-[var(--text-color)] rounded-bl-none"
            } shadow-lg backdrop-blur-sm`}
            style={{
              background: msg.role === "user" 
                ? "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)"
                : "var(--bg-color)"
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              <strong className="text-sm">
                {msg.role === "user" ? "You" : "AI"}
              </strong>
            </div>
            <p className="text-sm leading-relaxed">{msg.content}</p>
          </div>
        </div>
      ))}
    </div>
  
    {/* Message Input Area */}
    <div className="p-4 bg2">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-xl bg-transparent border border-opacity-20 text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)"
          }}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          onClick={handleSend}
          className="p-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  );
};

export default Chat;
