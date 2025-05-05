"use client"  // Ensures this slice runs on the client side in a Next.js application.

import { createSlice } from "@reduxjs/toolkit";  // Importing the `createSlice` function to create a slice of the store.
import { items, ProductDetails } from "../commontypes/types";  // Importing types for products and product details.

const INITIAL_STATE = {
  productdetails: {} as ProductDetails,  // Initial state for a single product's details.
  allproducts: [] as items[],  // Initial state for all products in the store.
  topproducts: [] as items[],  // Initial state for top-rated products.
  filterproducts: [] as items[],  // Initial state for filtered products (e.g., based on search or category).
};

const productslice = createSlice({
  name: 'product',  // Name of the slice.
  initialState: INITIAL_STATE,  // Initial state of the slice.

  reducers: {
    // Action to set the list of all products.
    setproducts: (state, action) => {
      state.allproducts = action.payload;  // Set the list of all products in the state.
    },

    // Action to set the details of a single product.
    setproductdetail: (state, action) => {
      const b = action.payload;  // Get the product data from the action payload.
      state.productdetails = { 
        ...b, 
        quantity: 1,  // Default quantity is 1 when setting product details.
        subtotal: Math.floor(b.price),  // Default subtotal based on the price.
      };
      console.log(state.productdetails);  // Debugging line to log the product details.
    },

    // Action to increase the quantity of the current product in details.
    increaseproductquantity: (state) => {
      state.productdetails.quantity += 1;  // Increase the quantity by 1.
      state.productdetails.subtotal += Math.floor(state.productdetails.price);  // Update the subtotal.
    },

    // Action to decrease the quantity of the current product in details.
    decreaseproductquantity: (state) => {
      if (state.productdetails.quantity > 1) {  // Ensure the quantity doesn't go below 1.
        state.productdetails.quantity -= 1;  // Decrease the quantity by 1.
        state.productdetails.subtotal -= Math.floor(state.productdetails.price);  // Update the subtotal.
      }
    },

    // Action to set the top-rated products (e.g., products with a rating > 4.4).
    settopproducts: (state, action) => {
      state.topproducts = action.payload.filter((item: items) => item && item.rating.rate > 4.4);  // Filter products based on rating.
    },

    // Action to filter products by category (e.g., based on selected category).
    categoryfilter: (state, action) => {
      state.filterproducts = action.payload;  // Set filtered products based on category.
    },

    // Action to filter products by a search term (e.g., search products by title).
    searchfilter: (state, action) => {
      state.filterproducts = state.allproducts.filter((item) => 
        item.title.toLowerCase().includes(action.payload.toLowerCase())  // Filter products based on search term in title.
      );
    }
  }
});

// Exporting the actions for dispatching in components.
export const {
  setproducts, 
  setproductdetail, 
  increaseproductquantity, 
  decreaseproductquantity, 
  settopproducts, 
  categoryfilter, 
  searchfilter
} = productslice.actions;

// Exporting the reducer to be used in the store.
export default productslice.reducer;
