const chatLog = document.querySelector('#chat-log');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');

messageInput.addEventListener('keydown', event => {
  if (event.code === 'Enter' || event.code === 'NumpadEnter') {
    event.preventDefault();
    sendButton.click();
  }
});

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message) {
    const response = respondToGreeting(message);
    addMessageToChatLog(message, 'user');
    addMessageToChatLog(response, 'bot');
    messageInput.value = '';
  }
});

function respondToGreeting(message) {
  if (message.toLowerCase() === 'hi' || message.toLowerCase() === 'hello') {
    return 'Hi there!';
  }
    else if (message.toLowerCase() === 'sup?' || message.toLowerCase() === 'sup') {
      return 'Nothing much What about you!';
  }
      else if (message.toLowerCase() === 'what is the best exploit?' || message.toLowerCase() === 'what is the best exploit') {
        return 'Of Course Arceus x!';
  }
        else if (message.toLowerCase() === 'and what is most gay exploit?' || message.toLowerCase() === 'whats most gay exploit') {
          return 'Ezzz Its Delta!';
        }
        else if (message.toLowerCase() === 'im training you' || message.toLowerCase() === 'doing something') {
          return 'Oh well, wish you luck if you need any help DM!';
        }
        else if (message.toLowerCase() === 'i got question' || message.toLowerCase() === 'question') {
          return 'Go On Ask Me Bro!';
        }
        else if (message.toLowerCase() === 'got question' || message.toLowerCase() === 'hello i got question') {
          return 'Go On Ask Me Bro!';
        }
        else if (message.toLowerCase() === 'whos the best admin in arceus x' || message.toLowerCase() === 'name best admins in ax') {
          return 'TT_Mida, Besthax, Tiahh, Super-Noober, Huseyn, Zelty, Demonkite, and Tw.Piece!';
  } else {
    return "I'm sorry, I don't understand.";
  }
}

function addMessageToChatLog(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  const senderName = sender === 'user' ? 'ASTA' : 'GigaBro';
  messageElement.innerHTML = `<strong>${senderName}:</strong> ${message}`;
  chatLog.appendChild(messageElement);
  chatLog.scrollTop = chatLog.scrollHeight;
}
