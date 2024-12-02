import { configureStore } from '@reduxjs/toolkit';
import websocketReducer from '../features/websocket/websocket';

export const store = configureStore({
    reducer: {
        websocket: websocketReducer,
    },
});
