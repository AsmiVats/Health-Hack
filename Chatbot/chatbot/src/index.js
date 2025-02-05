import ReactDOM from "react-dom";
import Chatbot from "./components/Chatbot";

const ChatbotSDK = {
  init: (selector, options = {}) => {
    const el = document.querySelector(selector);
    if (el) {
      ReactDOM.createRoot(el).render(<Chatbot options={options} />);
    }
  }
};

export default ChatbotSDK;
