import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showCreateTable: false,
    showCreateField: false,
    showUpdateField: false,
    tableId: ''
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
            state.tableId = action.payload || '';
        },
        toggleUpdateField: (state, action) => {
            state.showUpdateField = !state.showUpdateField
            state.tableId = action.payload || '';
        },
        updaterTableId: (state, action) => {
            state.updaterTableId = action.payload;
        }
    }
})

export const {
    toggleCreateTable,
    toggleCreateField,
    toggleUpdateField,
    updaterTableId
} = PublicSlice.actions;

export const selectShowCreateTable = (state) => state.public.showCreateTable;
export const selectShowCreateField = (state) => state.public.showCreateField;
export const selectShowUpdateField = (state) => state.public.showUpdateField;
export const selectTableId = (state) => state.public.tableId;

export default PublicSlice.reducer;