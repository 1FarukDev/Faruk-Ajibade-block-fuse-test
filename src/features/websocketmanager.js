import { setStatus, addMessage } from '../features/websocket/websocket';

let socket;

export const connectWebSocket = (dispatch) => {
    socket = new WebSocket('websocket-server-url');

    socket.onopen = () => {
        console.log('WebSocket connected');
        dispatch(setStatus('connected'));
    };

    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        dispatch(addMessage(data));
    };

    socket.onclose = () => {
        console.log('WebSocket disconnected');
        dispatch(setStatus('disconnected'));
    };

    socket.onerror = (error) => {
        console.error('WebSocket error:', error);
    };
};

export const disconnectWebSocket = () => {
    if (socket) {
        socket.close();
    }
};
