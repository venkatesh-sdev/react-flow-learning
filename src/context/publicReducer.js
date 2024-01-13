import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    showCreateTable: false,
    showCreateField: false,
    showUpdateField: false,
    showEditField: false,
    showAddReference: false,
    tableId: '',
    fieldId: '',
    table: {},
    field: {}
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
            state.field = action.payload?.field || {};
            state.table = action.payload?.table || {};
            state.tableId = action.payload?.tableId || '';
            state.fieldId = action.payload?.fieldId || '';
            console.log(action.payload)
        },
        toggleEditField: (state, action) => {
            state.showEditField = !state.showEditField
        },
        toggleAddReference: (state, action) => {
            state.showAddReference = !state.showAddReference
        }
    }
})

export const {
    toggleCreateTable,
    toggleCreateField,
    toggleUpdateField,
    toggleAddReference,
    toggleEditField
} = PublicSlice.actions;

export const selectShowCreateTable = (state) => state.public.showCreateTable;
export const selectShowCreateField = (state) => state.public.showCreateField;
export const selectShowUpdateField = (state) => state.public.showUpdateField;
export const selectShowEditField = (state) => state.public.showEditField;
export const selectShowAddReference = (state) => state.public.showAddReference;
export const selectTableId = (state) => state.public.tableId;
export const selectFieldId = (state) => state.public.fieldId;
export const selectField = (state) => state.public.field;
export const selectTable = (state) => state.public.table;

export default PublicSlice.reducer;