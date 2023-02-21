var chatbotHtml = `
<style>
#chat-box {
     height: 300px;
     overflow: auto;
     border: 1px solid #ccc;
     padding: 10px;
 }

 #user-input {
     width: 100%;
     padding: 10px;
}
</style>

    <div id="chat-box"></div>
	<input type="text" id="user-input" placeholder="Type your message here">
`

var bodyHTML = document.body.innerHTML
bodyHTML = bodyHTML + chatbotHtml
document.body.innerHTML = bodyHTML


var chatBox = document.getElementById('chat-box');
var userInput = document.getElementById('user-input');

function sendMessage() {
    var message = userInput.value;
    if (message.trim() == '') {
        return;
    }

    var response;

    switch (message.toLowerCase()) {
        case 'hi':
        case 'hello':
            response = 'Hi there!';
            break;
        case 'how are you?':
            response = 'I am fine, thank you for asking.';
            break;
        case 'what is your name?':
            response = 'My name is Chat Bot.';
            break;
        default:
            response = 'I am sorry, I did not understand.';
            break;
    }

    var chatMessage = '<p><strong>You:</strong> ' + message + '</p><p><strong>Bot:</strong> ' + response + '</p>';

    chatBox.innerHTML += chatMessage;

    userInput.value = '';
}

userInput.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
});
