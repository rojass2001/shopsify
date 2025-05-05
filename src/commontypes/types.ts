"use client"

import React from "react";

// Type definition for products in the cart, containing necessary details for each product
export type cartproductstype = {
  id: number,              // Unique identifier for the product
  image: string,           // URL of the product image
  title: string,           // Title of the product
  price: number,           // Price of the product
  quantity: number,        // Quantity of the product in the cart
  rating: number,          // Rating of the product (assuming a numeric value)
  subtotal: number,        // Subtotal price (price * quantity)
}

// Type definition for items in the product catalog, describing their general properties
export type items = {
  id: number,              // Unique identifier for the product
  title: string,           // Title of the product
  price: number,           // Price of the product
  description: string,     // Product description
  category: string,        // Category to which the product belongs
  image: string,           // URL of the product image
  rating: {                // Rating object containing rating info
    rate: number,          // Average rating value
    count: number,         // Number of reviews for the product
  },
}

// Extending the `items` type with additional properties for product details, including quantity and subtotal
export type ProductDetails = items & {
  quantity: number,        // Quantity of the product selected
  subtotal: number,        // Subtotal for the product (quantity * price)
}

// Type definition for user input in forms, capturing email and password
export type userinput = {
  email: string,           // Email of the user
  password: string,        // Password for the user
}

// Type definition for form props, allowing for flexible styling and submission handling
export type form = {
  classname: string,       // Custom CSS class for the form container
  children: React.ReactNode, // Child elements (e.g., input fields, buttons)
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void> // Form submit handler (async function)
}
