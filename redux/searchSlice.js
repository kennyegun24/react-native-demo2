import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchText: '',
        darkLight: false
    },
    reducers: {
        collectSendText: (state, action) => {
            state.searchText = action.payload
        },
        darkLightMode: (state, action) => {
            state.darkLight = action.payload
        }
    }
})

export const { collectSendText, darkLightMode } = searchSlice.actions;
export default searchSlice.reducer;