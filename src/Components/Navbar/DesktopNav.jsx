import { useState } from 'react'
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';
import Loginicon from './Loginicon';
import Mobilenavbar from './Mobilenavbar';
import { useSelector } from 'react-redux';
function DesktopNav() {
  const{cartproducts}=useSelector(state=>state.cart)
  const [open,setopen]=useState(false)
  const navbarpopup=()=>{
   setopen(!open)
  }
  return (
<div className='nav w-full fixed top-0 right-0 left-0 z-30'>
    <div className=' h-[60px] px-1 flex   items-center  text-white justify-between lg:px-5 '>
     <p className='text-3xl font-bold'>Shopsify</p>
    <div className='gap-5 text-[16px] hidden md:flex font-bold'>
     <Link to="/"> <p>Home</p></Link> 
     <Link to="/about">  <p>About</p></Link> 
     <Link to="/products"><p>Products</p></Link>
     <Link to="/contact"><p>Contact</p> </Link>
     <Link to="/login"><p>Signout</p></Link> 
    </div>
    <div className='hidden md:flex w-[200px] '><Searchbar/></div>
    <div className='flex items-center    '>
     <Loginicon/>
     <Link to="/cart">
  <div className='h-9 w-9 relative flex place-content-center items-center rounded-full bg-white'>
    <FaCartShopping className='text-blue-600 text-xl'/>
    { cartproducts.length>0&&
    <div className='w-4 h-4  absolute text-sm flex items-center place-content-center rounded-full
    bg-blue-600 top-[1px] right-1 animate-bounce'>{cartproducts.length}
    </div>
    }
   </div></Link>
   <FaBars onClick={navbarpopup} className='md:hidden text-3xl'/>
   </div>
  
  </div>
  <div className=' md:hidden w-full shadow-md p-2 shadow-gray-500  flex items-center
     place-content-center'><Searchbar/></div> 
    {open&&
      <Mobilenavbar navbarpopup={navbarpopup}/>
   }
</div>
  
  )
}

export default DesktopNav
