"use client"
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const INITIAL_STATE = {
   activeTab: 0, // Default active tab index
};
const Tabslice = createSlice({
    name: 'tab',
    initialState: INITIAL_STATE,
    reducers: {
        // Action to set the active tab index
        Settabstatus: (state, action: PayloadAction<number>): void => {
        state.activeTab = action.payload; // Set the active tab index
        },
    },
});
export const { Settabstatus } = Tabslice.actions// Exporting actions for dispatch in components
export default Tabslice.reducer; 
