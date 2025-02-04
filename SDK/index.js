class HealthSDK {
    constructor(serverUrl) {
      this.serverUrl = serverUrl;
      this.socket = null;
    }
  
    init() {
      this.loadSocket();
      this.createChatWidget();
    }
  
    loadSocket() {
      const script = document.createElement('script');
      script.src = 'https://cdn.socket.io/4.0.0/socket.io.min.js';
      script.onload = () => {
        this.socket = io(this.serverUrl);
        console.log('Socket.io loaded');
      };
      document.head.appendChild(script);
    }
  
    createChatWidget() {
      const chatButton = document.createElement('button');
      chatButton.innerText = 'Connect to Doctor';
      chatButton.style = 'position:fixed;bottom:20px;right:20px;padding:10px;';
      chatButton.onclick = () => this.startChat();
      document.body.appendChild(chatButton);
    }
  
    startChat() {
      if (!this.socket) return alert('Connecting...');
      const chatBox = document.createElement('div');
      chatBox.innerHTML = '<h3>Chat with Doctor</h3><input id="msg"/><button onclick="sendMsg()">Send</button>';
      chatBox.style = 'position:fixed;bottom:70px;right:20px;background:white;padding:10px;';
      document.body.appendChild(chatBox);
  
      window.sendMsg = () => {
        const msg = document.getElementById('msg').value;
        this.socket.emit('sendMessage', { room: 'doctor', message: msg });
      };
  
      this.socket.on('receiveMessage', (msg) => {
        alert(`Doctor: ${msg}`);
      });
    }
  }

  window.HealthSDK = HealthSDK;
  