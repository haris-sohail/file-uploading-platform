import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    files: []
}

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        pushFile: (state, action) => {
            console.log("Action payload: ", action.payload);
            state.files.push(action.payload)
            console.log("Updated State:", [...state.files]);
        }
    }
})

export const { pushFile } = fileSlice.actions
export default fileSlice.reducer