/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react'
import Categorys from '../Components/Categorys';
import { productfetch } from '../Components/Api';
import Card from '../Components/Card';
import { setproducts } from '../redux/Productslice';
import { useDispatch, useSelector } from 'react-redux';
function Products() {
  
  const {allproduct}=useSelector(state=>state.product)
  const dispatch=useDispatch()
    const allproductfetchs=async()=>{
    const data=await productfetch();
    dispatch((setproducts(data)))
    }

    useEffect(()=>{
    allproductfetchs()
    },[])
   
  return (
    <>
    <div className='w-full mt-[130px] md:mt-[70px] '>
      <Categorys/>
      <div className='bg-blue-700 text-center text-white py-2 font-bold text-2xl'>Our Products</div>
       
      <div className='w-full mt-5 min-h-[900px] overflow-y-auto px-6 md:px-10 gap-y-8 gap-x-2 
         md:gap-x-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {allproduct?.map((product)=>(
           
        <Card product={product} key={product.id} /> 
        
        ))}
     </div>
    </div>
    </>
  )
}

export default Products
