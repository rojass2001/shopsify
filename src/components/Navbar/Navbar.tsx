"use client"
import {  useState } from 'react'
import { FaBars, FaCartShopping } from "react-icons/fa6";
import Searchbar from './Searchbar';
import Loginicon from './Loginicon';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Rootstate } from '@/redux/store';
import Mobiledrawer from './Mobiledrawer';
//import { useSelector } from 'react-redux';
function Navbar() {
  const{cartproducts}=useSelector((state:Rootstate)=>state.cart)
  const [open,setopen]=useState(false)
  const navbarpopup=()=>{
   setopen(!open)
  }
 return (
   <motion.nav
     initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8,delay:0.5}}
     className='w-full fixed top-0 right-0 left-0 z-30' style={{ backgroundColor: "blue" }}>
    <div className=' h-[60px] px-1 flex   items-center  text-white justify-between lg:px-5 '>
     <p className='text-2xl font-bold'>Shopsify</p>
    <ul className='gap-5 text-[16px] list-none hidden md:flex font-bold'>
     <Link href="/"> <li>Home</li></Link>
       <Link href="/about"><li>About</li></Link>
      <Link href="/products"> <li>Products</li></Link>
       <Link href="/contact"><li>Contact</li> </Link>
      <Link href="/login"> <li>Signout</li></Link>
    </ul>
    <div className='hidden md:flex w-[220px] '><Searchbar/></div>
    <div className='flex items-center    '>
     <Loginicon/>
     
  <div className='h-9 w-9 relative flex place-content-center items-center rounded-full bg-white'>
   <Link href="/cart" ><FaCartShopping className='text-blue-600 text-xl'/></Link> 
    { cartproducts.length>0&&
    <div className='w-4 h-4  absolute text-sm flex items-center place-content-center rounded-full
    bg-blue-600 top-[1px] right-1 animate-bounce'>{cartproducts.length}
    </div>
    }
   </div>
   <FaBars onClick={navbarpopup} className='md:hidden text-3xl'/>
   </div>
  
  </div>
  <div className=' md:hidden w-full shadow-md p-2 shadow-gray-500  flex items-center
     place-content-center'><Searchbar/></div> 
   
  <Mobiledrawer navbarpopup={navbarpopup} open={open} />
 </motion.nav> 
 )
}

export default Navbar
