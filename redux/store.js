import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice';
import showNotesSlice from './showNotesSlice';
import NoteSlice from './NotesSlice';
// import searchSlice from './search';

const store = configureStore({
    reducer: {
        search: searchSlice,
        noteHideShow: showNotesSlice,
        notes: NoteSlice
    },
})

export default store;