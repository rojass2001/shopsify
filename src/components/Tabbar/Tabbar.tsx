"use client"
import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import Link from 'next/link';
import useAuth from '@/customhooks/useauth';
import useKeyboardStatus from '@/customhooks/useKeyboard';
import tabarray from './Tabbararray';

function Tabbar() {
  const[click,setclick]=useState(0)
  const{isKeyboardOpen}=useKeyboardStatus()
  const { logout } = useAuth()
  const changecolor=(index:number)=>{setclick(index)}
  return (
  <>
      {!isKeyboardOpen && (
        <div className={`w-full px-2 h-[60px] text-white pt-2 overflow-x-auto rounded-t-3xl flex justify-around items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden `} style={{ backgroundColor: "blue" }}>
          {tabarray.map((tab,index)=>(
            <Link href={tab.link} key={tab.link}>
              <button onClick={() => changecolor(index)} className={`flex items-center ${click === index? "font-bold" : ""} text-sm place-content-center flex-col`}>{tab.icon}{ tab.name}</button>
            </Link>
          ))}
          <Link href="/login" onClick={logout}>
            <button onClick={()=>changecolor(4)} className={`flex items-center ${click===4?"font-bold":""} text-sm place-content-center flex-col`}><IoSettingsOutline className='text-2xl' />logout</button>
          </Link>
        </div>
      )} 
    </>  
  )
}

export default Tabbar
