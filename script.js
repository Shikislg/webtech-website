const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function getBotResponse(userMessage) {
    return "FHDW SOLLTEST DU SEIN LASSEN";
}

function appendMessage(message, isUser = true) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', isUser ? 'user-message' : 'bot-message');

    if (!isUser) {
        const botImg = document.createElement('img');
        botImg.src = 'https://localo.com/de/assets/img/definitions/what-is-bot.webp';
        botImg.alt = 'Bot';
        messageDiv.appendChild(botImg);
    }

    const textNode = document.createTextNode(message);
    messageDiv.appendChild(textNode);
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        appendMessage(userMessage, true);
        const botResponse = getBotResponse(userMessage);
        setTimeout(() => appendMessage(botResponse, false), 500);
        userInput.value = '';
    }
});

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});
