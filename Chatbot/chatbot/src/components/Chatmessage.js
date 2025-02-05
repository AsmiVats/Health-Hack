const ChatMessage = ({ sender, text }) => {
    return (
      <div className={`p-2 rounded-lg ${sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white text-right"}`}>
        {text}
      </div>
    );
  };
  
  export default ChatMessage;
  