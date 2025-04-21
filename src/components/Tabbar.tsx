"use client"
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
import useAuth from '@/customhooks/useauth';
import useKeyboardStatus from '@/customhooks/useKeyboard';
function Tabbar() {
  const[click,setclick]=useState(0)
  const{isKeyboardOpen}=useKeyboardStatus()
  const { logout } = useAuth()
  const changecolor=(index:number)=>{setclick(index)}
  return (
  <>
      {!isKeyboardOpen && (
        <div className={`w-full px-2 h-[60px] pt-2 overflow-x-auto rounded-t-3xl flex justify-around items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden `} style={{ backgroundColor: "blue" }}>
          <Link href="/">
            <button onClick={()=>changecolor(0)} className={`flex items-center ${click===0?"text-blue-400":"text-white "} text-sm place-content-center flex-col`}><FaHome className='text-2xl ' />Home</button>
          </Link>
          <Link href="/products">
            <button onClick={()=>changecolor(1)} className={`flex items-center ${click===1?"text-blue-400":"text-white "} text-sm place-content-center flex-col`}>< FaShop className='text-2xl' />shop</button>
          </Link>
          <Link href="/contact">
            <button onClick={()=>changecolor(2)} className={`flex items-center ${click===2?"text-blue-400":"text-white "} text-sm place-content-center flex-col`}><IoIosContact className='text-3xl' />contact</button>
          </Link>
          <Link href="/about">
            <button onClick={()=>changecolor(3)} className={`flex items-center ${click===3?"text-blue-400":"text-white "} text-sm place-content-center flex-col`}>< MdOutlineRoundaboutRight className='text-3xl' />about</button>
          </Link>
          <Link href="/login" onClick={logout}>
            <button onClick={()=>changecolor(4)} className={`flex items-center ${click===4?"text-blue-400":"text-white "} text-sm place-content-center flex-col`}><IoSettingsOutline className='text-2xl' />logout</button>
          </Link>
        </div>
      )} 
    </>  
  )
}

export default Tabbar
