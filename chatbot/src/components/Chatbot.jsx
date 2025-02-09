import { useState } from "react";
import axios from "axios";
import "./Chatbot.css"; 

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const userId = "user123";
  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post("http://localhost:3000/chatbot", {
        message: input,
        userId,
        phoneNumber: "+1234567890",
      });

      setMessages((prev) => [...prev, { sender: "bot", text: response.data.reply }]);
    } catch (error) {
      console.error("Error sending message", error);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <button className="chatbot-toggle" onClick={() => setChatOpen(!chatOpen)}>
        💬 Chat
      </button>

      {chatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Health Chatbot</h3>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>
          
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
