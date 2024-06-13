import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    files: []
}

const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        pushFile: (state, action) => {
            state.files.push(action.payload)
        }
    }
})

export const { pushFile } = fileSlice.actions
export default fileSlice.reducer