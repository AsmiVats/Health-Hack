class HealthcareBot {
    constructor(config) {
        this.hospitalId = config.hospitalId;
        this.endpoint = config.endpoint || "http://localhost:3000/api/chatbot/chat";
    }

    load(containerId = "healthcare-bot") {
        const container = document.getElementById(containerId);
        if (!container) throw new Error(`Container ID "${containerId}" not found.`);

        container.innerHTML = `
            <textarea id="chat-input"></textarea>
            <button id="chat-submit">Send</button>
            <div id="chat-response"></div>
        `;

        document.getElementById("chat-submit").onclick = () => this.sendMessage();
    }

    async sendMessage() {
        const message = document.getElementById("chat-input").value;
        const responseElement = document.getElementById("chat-response");

        try {
            const res = await fetch(this.endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ hospitalId: this.hospitalId, message }),
            });
            const data = await res.json();
            responseElement.innerHTML = data.escalate
                ? `Connect to Doctor: ${data.doctor.name}`
                : `Bot says: ${data.response}`;
        } catch (err) {
            responseElement.innerHTML = "Error connecting to the server.";
        }
    }
}

export default HealthcareBot;
