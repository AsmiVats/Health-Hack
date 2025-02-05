import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ChatMessage from "./Chatmessage";
import ChatInput from "./Chatinput";

const Chatbot = ({ options }) => {
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hello! How can I assist you?" }]);
  const [open, setOpen] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);

  const sendMessage = async (input) => {
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      const response = await axios.post(options.apiUrl || "http://localhost:3000/chatbot", { message: input }); //backend url dalna hai
      setMessages([...newMessages, { sender: "bot", text: response.data.reply }]);

      setInteractionCount(interactionCount + 1);
      if (interactionCount + 1 >= 3) {
        setMessages([...newMessages, { sender: "bot", text: "Would you like to connect with a doctor?" }]);
      }
    } catch (error) {
      setMessages([...newMessages, { sender: "bot", text: "I'm facing an issue, try again later." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <motion.div 
          className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col"
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-3 bg-blue-500 text-white font-bold flex justify-between">
            <span>Chatbot</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => <ChatMessage key={index} sender={msg.sender} text={msg.text} />)}
          </div>
          <ChatInput onSendMessage={sendMessage} />
        </motion.div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
