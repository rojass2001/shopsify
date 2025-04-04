"use client"
import { createSlice,  } from "@reduxjs/toolkit"
import { items, ProductDetails } from "../commontypes/types";
//type item = { [key: string]:any};
const INITIAL_STATE= {
  productdetails: {} as ProductDetails,
  allproduct: [] as items[],
  topproducts: [] as items[],
  filterproducts: [] as items[],
};
const productslice=createSlice({

    name:'product',
    initialState:INITIAL_STATE,
      
    reducers:{
   
   setproducts:(state,action)=>{
   state.allproduct=action.payload
   }, 
   setproductdetail:(state,action)=>{
    const b= action.payload;
    state.productdetails={ ...b, quantity: 1, subtotal: Math.floor(b.price) };
    console.log(state.productdetails);
   },
increaseproductquantity:(state)=>{
      state.productdetails.quantity+=1;
      state.productdetails.subtotal+=Math.floor(state.productdetails.price);
   },
   decreaseproductquantity:(state)=>{
    if(state.productdetails.quantity>1){
    state.productdetails.quantity-=1;
    state.productdetails.subtotal-=Math.floor(state.productdetails.price);
    }
 },
   settopproducts:(state,action)=>{
   state.topproducts = action.payload.filter((item:items) => item && item.rating.rate > 4.4)
   },
   categoryfilter:(state,action)=>{
  state.filterproducts=action.payload;
   },
   searchfilter:(state,action)=>{
      state.filterproducts=state.allproduct.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
       }
}
})
export const {setproducts,setproductdetail,increaseproductquantity,
decreaseproductquantity,settopproducts,categoryfilter,searchfilter}=productslice.actions;
export default productslice.reducer;