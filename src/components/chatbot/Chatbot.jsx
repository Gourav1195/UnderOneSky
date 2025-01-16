import React, { useState } from "react";
import { sendMessageToAI } from "../../utils/chatAPI.js";
import './Chatbot.css'

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    if (!message) return;
    
    const userMessage = { role: "user", content: message };
    setChat([...chat, userMessage]);

    const aiReply = await sendMessageToAI(message);
    setChat([...chat, userMessage, { role: "ai", content: aiReply }]);

    setMessage("");
  };

  return (
    <div className="chat-wrapper">
      <h2>AI Chatbot</h2>
      <div>
        {chat.map((msg, index) => (
          <p key={index} className={msg.role}>
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </p>
        ))}
      </div>
      <div className="chat-container">
        <input 
        className="chat-input"
          type="text" 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask something..."
        />
        <button className="button-63" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
