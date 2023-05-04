import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {filer:''};

const filterSlice = createSlice({
    name: 'filer',
    initialState: filterInitialState,
    reducers: {
        addFilter: {
            reducer(state, action) {
                state.filer = action.payload;
            },
        },  
            
        },
    
});

export const filterReducer = filterSlice.reducer;

export const { addFilter } = filterSlice.actions;