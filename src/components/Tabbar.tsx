"use client"
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
import useAuth from '@/customhooks/useauth';
function Tabbar() {
    const{logout}=useAuth()
  return (
    <div className='w-full px-2 text-white h-[60px] pt-2 rounded-t-3xl flex justify-around items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden ' style={{backgroundColor:"blue"}}>
      <Link href="/">
        <button className='flex items-center text-sm place-content-center flex-col'><FaHome className='text-2xl ' />Home</button>
     </Link>
      <Link href="/products">
        <button className='flex items-center text-sm place-content-center flex-col'>< FaShop className='text-2xl' />shop</button>
      </Link>
      <Link href="/contact">
        <button className='flex items-center text-sm place-content-center flex-col'><IoIosContact className='text-3xl' />contact</button>
      </Link>
      <Link href="/about">
        <button className='flex items-center text-sm place-content-center flex-col'>< MdOutlineRoundaboutRight className='text-3xl' />about</button>
      </Link>
      <Link href="/login">
        <button onClick={logout} className='flex items-center text-sm place-content-center flex-col'><IoSettingsOutline className='text-2xl' />logout</button>
      </Link>
    </div>
  )
}

export default Tabbar
