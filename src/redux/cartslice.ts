"use client"
import { createSlice } from "@reduxjs/toolkit";
import { cartproductstype } from "../commontypes/types";
type initialstates = {
   cartproducts:cartproductstype[],
    totalprice:number,
}
 const initial_state:initialstates={
    cartproducts:[],
    totalprice:0,
 }
const cartslice=createSlice({
    name:'cart',
    initialState:initial_state,
    reducers:{
    addtocart:(state,action)=>{
    const data=action.payload;
    const itemfind= state.cartproducts.find((item)=>item.id===data.id)
     if(itemfind){
        alert(itemfind.title +"already exist")
     }
     else{
    state.cartproducts.push({
        id:data.id,
        image:data.image,
        title:data.title,
        price:data.price,
        quantity:data.quantity?data.quantity:1,
        rating:data.rating.rate,
        subtotal:data.subtotal?data.subtotal:Math.floor(data.price),
    })
     state.totalprice+=data.subtotal?data.subtotal:Math.floor(data.price);
     alert(data.title+"successfully added to cart")
     }
    },
    cartincrease:(state,action)=>{
      const items=state.cartproducts.find((item)=>item.id===action.payload)
     if(items){
      items.quantity+=1;
      items.subtotal+=Math.floor(items.price);
      state.totalprice+=Math.floor(items.price);
    }

    },
   
      cartdecrease:(state,action)=>{
        const items=state.cartproducts.find((item)=>item.id===action.payload)
       if(items&&items.quantity>1){
        items.quantity-=1;
        items.subtotal-=Math.floor(items.price);
        state.totalprice-=Math.floor(items.price);
      }
  
      },
      removecart:(state,action)=>{
        const cartitem=action.payload;
          const itemindex=state.cartproducts.findIndex((item)=>item.id===cartitem.id);
          if(itemindex>=0){
        state.totalprice-=cartitem.subtotal;
        state.cartproducts.splice(itemindex,1)
      }
      }
    },

})
export const {addtocart,cartincrease,cartdecrease,removecart}=cartslice.actions;
export default cartslice.reducer;