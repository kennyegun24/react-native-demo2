import { createSlice } from '@reduxjs/toolkit'

const showNoteSlice = createSlice({
    name: 'showNote',
    initialState: {
        showHide: false,
        navigation: null
    },
    reducers: {
        showNote: (state, action) => {
            state.showHide = action.payload;
        },
        // navigate: (state, action) => {
        //     const { pop, popToTop, push, replace, reset, dismiss, goBack, ...payload } = action.payload
        //     state.navigation = payload
        // }
    }
})
export const { showNote } = showNoteSlice.actions
export default showNoteSlice.reducer