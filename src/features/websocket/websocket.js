import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    messages: [],
    status: 'disconnected',
};

const websocketSlice = createSlice({
    name: 'websocket',
    initialState,
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
    },
});

export const { setStatus, addMessage } = websocketSlice.actions;

export default websocketSlice.reducer;
