"use client"
import Categorys from '@/components/categorys/Categorys'
import Card from '@/components/Card';
import Link from 'next/link';
import { Rootstate } from '@/redux/store';
import { useSelector } from 'react-redux';
import { items } from '@/commontypes/types';
import useFetch from '@/customhooks/useFetch';
import { useEffect } from 'react';

function Products() {
  const{fetchproducts}=useFetch('https://fakestoreapi.com/products')
  const{allproducts}=useSelector((state:Rootstate)=>state.product)
  useEffect(() => {
    fetchproducts()
  },[fetchproducts])
  return (
   <div className='w-full mt-[130px] md:mt-[70px] '>
      <Categorys/>
     <div className='bg-blue-700 w-full text-center text-white py-2 font-bold text-2xl'>Our Products</div>
     <div className='w-full mt-5 min-h-[900px] overflow-y-auto px-6 md:px-10 gap-y-8 gap-x-2 
         md:gap-x-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-5'>
        {allproducts?.map((product:items) => (
            <Link href={`/productdetails`} key={product.id}>
            <Card product={product} /> </Link>
        ))}
      </div>
    </div>
  )
}

export default Products
