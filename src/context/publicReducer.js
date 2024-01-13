import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showCreateTable: false,
    showCreateField: false,
}

const PublicSlice = createSlice({
    name: 'public',
    initialState,
    reducers: {
        toggleCreateTable: (state, action) => {
            state.showCreateTable = !state.showCreateTable
        },
        toggleCreateField: (state, action) => {
            state.showCreateField = !state.showCreateField
        }
    }
})

export const {
    toggleCreateTable,
    toggleCreateField
} = PublicSlice.actions;

export const selectShowCreateTable = (state) => state.public.showCreateTable;
export const selectShowCreateField = (state) => state.public.showCreateField;

export default PublicSlice.reducer;