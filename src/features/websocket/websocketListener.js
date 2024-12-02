import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connectWebSocket, disconnectWebSocket } from '../websocketmanager';

const WebSocketListener = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.websocket.messages);
    const status = useSelector((state) => state.websocket.status);

    useEffect(() => {
        connectWebSocket(dispatch);

        return () => {
            disconnectWebSocket();
        };
    }, [dispatch]);

    return (
        <div>
            <h1>WebSocket Listener</h1>
            <p>Status: {status}</p>
            <h2>Messages:</h2>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        <strong>Event:</strong> {message.event} <br />
                        <strong>Data:</strong> {JSON.stringify(message.data)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketListener;
