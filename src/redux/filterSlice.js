import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filer',
    initialState: filterInitialState,
    reducers: {
        addFilter(_, action) {
            return action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;