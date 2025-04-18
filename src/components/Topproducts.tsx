"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setproductdetail } from '@/redux/Productslice'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { addtocart } from '@/redux/cartslice'
import { Rootstate } from '../redux/store';
import Link from 'next/link'
import Image from 'next/image'
import useFetch from '@/customhooks/useFetch'

function Topproducts() {
  const{Topproducts}=useFetch('https://fakestoreapi.com/products') 
  const dispatch = useDispatch()
  const { topproducts } = useSelector((state: Rootstate) => state.product)
  useEffect(()=>{
   Topproducts()
  },[Topproducts])
    
  return (  
  <div className='w-full'>
        <p className='text-3xl text-center mb-5 font-bold text-blue-600'>Our Top products</p>
    <div className='w-full bg-gray-100 py-2  px-2 gap-5 md:gap-15  grid grid-cols-2 md:grid-cols-3
     lg:grid-cols-3 font-bold lg:px-[150px] ' >
      {topproducts?.map((a) => (
        <div onClick={()=>dispatch(setproductdetail(a))} className='min-h-[200px] py-2 relative space-y-2 place-items-center text-center justify-center place-content-center bg-white  text-black shadow-md shadow-gray-300' key={a.id}>
          <div className='w-full relative h-[100px]'> <Image  src={a.image} fill quality={100} alt={a.title} /></div>
          <p>{a.title?.slice(0,24)}</p>
          <p>${Math.floor(a.price)}</p>
          <p className='flex items-center'><FaStar/>{a.rating.rate}</p>
          <button onClick={()=>dispatch(addtocart(a))} className='p-2 rounded-full absolute bottom-9 md:bottom-3 right-1 md:right-3    text-xl bg-white shadow-md
          shadow-gray-300'><FaCartShopping  /></button>
          <Link href={`/productdetails`}>  <button className='bg-black text-white  p-2 rounded-full '>More Details</button></Link>
        </div>
      ))}
   </div>     
  </div>   
  )
}

export default Topproducts
