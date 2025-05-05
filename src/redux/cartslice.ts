"use client"  // Ensures this slice runs on the client side in a Next.js application.

import { createSlice } from "@reduxjs/toolkit";  // Importing the `createSlice` function to create a slice.
import { cartproductstype } from "../commontypes/types";  // Importing the types for cart products.
import { toast } from "react-toastify";  // Importing toast for showing notifications.

type initialstates = {  // Defining the shape of the initial state.
   cartproducts: cartproductstype[],  // Array of products in the cart.
   totalprice: number,  // The total price of all products in the cart.
}

const initial_state: initialstates = {  // Initial state with empty cart and total price set to 0.
    cartproducts: [],
    totalprice: 0,
}

const cartslice = createSlice({
    name: 'cart',  // Name of the slice.
    initialState: initial_state,  // Initial state.
    reducers: {  // Reducers to handle different actions related to the cart.
    
        // Action to add a product to the cart.
        addtocart: (state, action) => {
            const data = action.payload;  // The product data to be added.
            // Check if the item is already in the cart.
            const itemfind = state.cartproducts.find((item) => item.id === data.id);
            
            if (itemfind) {
                toast.error(itemfind.title + " already exists in cart");  // Show error toast if the item already exists.
            } else {
                // Add the new product to the cart.
                state.cartproducts.push({
                    id: data.id,
                    image: data.image,
                    title: data.title,
                    price: data.price,
                    quantity: data.quantity ? data.quantity : 1,  // Set quantity to 1 if not provided.
                    rating: data.rating.rate,  // Rating of the product.
                    subtotal: data.subtotal ? data.subtotal : Math.floor(data.price),  // Calculate subtotal for the product.
                });
                // Update the total price of the cart.
                state.totalprice += data.subtotal ? data.subtotal : Math.floor(data.price);
                // Show success toast.
                toast.success(data.title + " successfully added to cart");
            }
        },
        
        // Action to increase the quantity of a product in the cart.
        cartincrease: (state, action) => {
            const items = state.cartproducts.find((item) => item.id === action.payload);  // Find the product in the cart.
            if (items) {
                items.quantity += 1;  // Increase the quantity.
                items.subtotal += Math.floor(items.price);  // Update the subtotal.
                state.totalprice += Math.floor(items.price);  // Update the total price.
            }
        },

        // Action to decrease the quantity of a product in the cart.
        cartdecrease: (state, action) => {
            const items = state.cartproducts.find((item) => item.id === action.payload);  // Find the product in the cart.
            if (items && items.quantity > 1) {  // Only decrease if the quantity is greater than 1.
                items.quantity -= 1;  // Decrease the quantity.
                items.subtotal -= Math.floor(items.price);  // Update the subtotal.
                state.totalprice -= Math.floor(items.price);  // Update the total price.
            }
        },

        // Action to remove a product from the cart.
        removecart: (state, action) => {
            const cartitem = action.payload;  // The product to be removed.
            const itemindex = state.cartproducts.findIndex((item) => item.id === cartitem.id);  // Find the index of the item in the cart.
            if (itemindex >= 0) {
                state.totalprice -= cartitem.subtotal;  // Subtract the item's subtotal from the total price.
                state.cartproducts.splice(itemindex, 1);  // Remove the product from the cart.
            }
        }
    },
})

// Exporting the actions for dispatching in components.
export const { addtocart, cartincrease, cartdecrease, removecart } = cartslice.actions;

// Exporting the reducer to be used in the store.
export default cartslice.reducer;
