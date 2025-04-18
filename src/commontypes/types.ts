"use client"

import React from "react";

export type cartproductstype = {
        id: number,
        image:string,
        title:string,
        price:number,
        quantity:number,
        rating:number,
        subtotal:number,
}
export type items = {
        id: number,
        title:string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number,
        },    
}
export type ProductDetails=items & {
  quantity: number;
  subtotal: number;
}

export type userinput = {
  email: string,
  password:string
        
}
export type form = {
  classname:string,
  children: React.ReactNode,
 onsubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}