"use client"
import React, { useEffect } from 'react'
import Categorys from '@/components/categorys/Categorys'
import { productfetch } from '@/api/Api';
import Card from '@/components/Card';
import { setproducts } from '@/redux/Productslice';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Rootstate } from '@/redux/store';
function Products() {
  
  const {allproduct}=useSelector((state:Rootstate)=>state.product)
  const dispatch=useDispatch()
    useEffect(() => {
        const allproductfetchs = async () => {
            const data = await productfetch();
            dispatch(setproducts(data));
        };
        allproductfetchs();
    }, [dispatch]);
   
  return (
    <>
    <div className='w-full mt-[130px] md:mt-[70px] '>
      <Categorys/>
      <div className='bg-blue-700 w-full text-center text-white py-2 font-bold text-2xl'>Our Products</div>
      <div className='w-full mt-5 min-h-[900px] overflow-y-auto px-6 md:px-10 gap-y-8 gap-x-2 
         md:gap-x-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-5'>
        {allproduct?.map((product) => (
            <Link href={`/productdetails`} key={product.id}>
            <Card product={product} /> </Link>
        ))}
    </div>
    </div>
    </>
  )
}

export default Products
