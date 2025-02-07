import { useState } from "react";

const ChatInput = ({ onSendMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="p-3 flex space-x-2">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        className="flex-1 p-2 border rounded"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
};

export default ChatInput;
