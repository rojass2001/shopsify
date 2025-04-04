"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setproductdetail, settopproducts } from '@/redux/Productslice'
import { FaCartShopping, FaStar } from 'react-icons/fa6'
import { addtocart } from '@/redux/cartslice'
import { Rootstate } from '../redux/store';
import Link from 'next/link'
import Image from 'next/image'
import { productfetch } from '@/api/Api'
function Topproducts() {
    const dispatch=useDispatch()
  const { topproducts } = useSelector((state: Rootstate) => state.product)

 useEffect(()=>{
   const productfetchs=async()=>{
     const response = await productfetch();
     dispatch(settopproducts(response))
   }
   productfetchs()
 },[dispatch])
    
  return (
    <>
      
  <div className='w-full'>
        <p className='text-3xl text-center mb-5 font-bold text-blue-600'>Our Top products</p>
    <div className='w-full bg-gray-100 py-2  px-2 gap-5 md:gap-15  grid grid-cols-2 md:grid-cols-3
     lg:grid-cols-3 font-bold lg:px-[150px] ' >
    {topproducts?.map((a)=>(
    <div onClick={()=>dispatch(setproductdetail(a))} className='min-h-[200px] relative py-2 space-y-2 place-items-center text-center justify-center place-content-center bg-white  text-black shadow-md shadow-gray-300' key={a.id}>
     <div className='w-full relative h-[100px]'> <Image  src={a.image} fill quality={100} alt={a.title} /></div>
    <p>{a.title?.slice(0,24)}</p>
    <p>${Math.floor(a.price)}</p>
    <p className='flex items-center'><FaStar/>{a.rating.rate}</p>
    <div onClick={()=>dispatch(addtocart(a))} className='p-2 rounded-full absolute bottom-2 right-1 text-xl bg-white shadow-md
     shadow-gray-300'><FaCartShopping  /></div>
   <Link href={`/productdetails`}>  <button className='bg-black text-white absolute bottom-2  left-2  p-2 rounded-full '>
    More Details</button></Link>
    </div>

    ))}
   </div>     
  </div>
       
      </>
  )
}

export default Topproducts
