"use client"
import { configureStore } from "@reduxjs/toolkit";
import productslice from './Productslice';
import cartslice from './cartslice';

export default function makeStore(){
return configureStore({
    reducer: {
        product:productslice,
        cart: cartslice,
    }
})
}

export const store=makeStore()
export type Rootstate=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
