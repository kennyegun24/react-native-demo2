import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        allNotes: []
    },
    reducers: {
        getAllNote: (state, action) => {
            state.allNotes = action.payload
        }
    }
})
export const { getAllNote } = noteSlice.actions
export default noteSlice.reducer