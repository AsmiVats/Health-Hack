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
        phoneNumber: "+917482009445",
      });

      setMessages((prev) => [...prev, { sender: "bot", text: response.data.response }]);
    } catch (error) {
      console.error("Error sending message", error);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      {!chatOpen ? (
        <button className="chatbot-toggle" onClick={() => setChatOpen(true)}>
          Chat with us!
        </button>
      ) : (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Chat with us!</h3>
            <button onClick={() => setChatOpen(false)}>✖</button>
          </div>

          <div className="chat-body">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>Hello! Nice to see you here. Press Start chat to continue.</p>
                <button className="start-chat" onClick={() => setMessages([{ sender: "bot", text: "Hello! How can I help you today?" }])}>
                  Start chat
                </button>
              </div>
            ) : (
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Write a message..."
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
