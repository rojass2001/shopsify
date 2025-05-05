"use client" // This ensures the store setup is executed on the client side in a Next.js environment.

import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore to create a Redux store.
import productslice from './Productslice'; // Importing the product slice reducer.
import cartslice from './cartslice'; // Importing the cart slice reducer.
import Tabslice from './Tabbarslice'; // Importing the tab slice reducer.

// Function to create a Redux store
export default function makeStore() {
  // Configuring the store with multiple slices of state
  return configureStore({
    reducer: {
      product: productslice, // The `product` key will hold state managed by the productslice
      cart: cartslice, // The `cart` key will hold state managed by the cartslice
      tab: Tabslice, // The `tab` key will hold state managed by the Tabslice
    }
  });
}

// Creating a single store instance for use across the app
export const store = makeStore();

// Type alias for the entire Redux state tree (used for TypeScript support)
export type Rootstate = ReturnType<typeof store.getState>;

// Type alias for the Redux dispatch function (used for dispatching actions with proper types)
export type AppDispatch = typeof store.dispatch;
