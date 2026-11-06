import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 7 },
    reducers: {
        up: (state) => {
            state.count += 1;
        },
        down: (state) => {
            state.count -= 1;
        },
        resetCounter: (state) => {
            state.count = 7;
        },
        reset: (state) => {
            state.count = 7;
        },
    },
});

export const { up, down, resetCounter, reset } = counterSlice.actions;
export default counterSlice.reducer;