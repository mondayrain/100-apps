const ECHO_SERVER = 'wss://echo.websocket.org';
const CHAT_WINDOW = document.querySelector('#chat-window');
const STATUS = document.querySelector('#status');

const CONNECT_BUTTON = document.querySelector('#connect-button');
const SEND_BUTTON = document.querySelector('#send-button');

const CHAT_INPUT = document.querySelector('#chat-input');

let webSocket = null;

CONNECT_BUTTON.onclick = connectWebSocket;
SEND_BUTTON.onclick = wsMessageSend;

function connectWebSocket() {
    STATUS.innerHTML = 'Connecting...';
    CONNECT_BUTTON.disabled = true;

    webSocket = new WebSocket(ECHO_SERVER);

    // Add event listeners to the socket connection
    webSocket.onopen = (event) => { wsOpened(event) }
    webSocket.onclose = (event) => { wsClosed(event) }
    webSocket.onmessage = (event) => { wsMessageReceived(event) }
    webSocket.onerror = (event) => { wsError(event) }
}

function disconnectWebSocket() {
    CONNECT_BUTTON.innerHTML = 'Disconnecting...';
    CONNECT_BUTTON.disabled = true;

    webSocket.close();
}

function writeMessageToChatWindow(sender, message) {
    let messageElement = document.createElement("p");
    if(sender) {
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `${sender}: ${message}`;
    } else {
        messageElement.classList.add('chat-connection-message');
        messageElement.innerHTML = message;
    }

    CHAT_WINDOW.append(messageElement);
}

// WebSocket Listener Functions
function wsOpened(_event) {
    STATUS.innerHTML = 'Connected!'

    CONNECT_BUTTON.innerHTML = 'Disconnect!';
    CONNECT_BUTTON.onclick = disconnectWebSocket;
    CONNECT_BUTTON.disabled = false;

    SEND_BUTTON.disabled = false;

    writeMessageToChatWindow(null, 'Connected to server!')
}

function wsMessageSend(_event) {
    let message = CHAT_INPUT.value;

    if(message) {
        SEND_BUTTON.disabled = true;

        CHAT_INPUT.value = "Sending...";
        webSocket.send(message);

        writeMessageToChatWindow('You', message);

        CHAT_INPUT.value = "";
        SEND_BUTTON.disabled = false;
    }
}

function wsMessageReceived(event) {
    console.log(event);
    writeMessageToChatWindow('Server', event.data)
}

function wsError(event) {
    alert(`Oh no! There was an error: ${event}`)
}

function wsClosed(event) {
    STATUS.innerHTML = 'Not connected';
    CONNECT_BUTTON.innerHTML = 'Connect!';
    CONNECT_BUTTON.disabled = false;
    CONNECT_BUTTON.onclick = connectWebSocket;

    SEND_BUTTON.disabled = true;

    writeMessageToChatWindow(null, 'Disconnected from server!')
}
