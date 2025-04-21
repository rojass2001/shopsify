"use client"
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const tabarray = [  
    {
        icon: <FaHome className='text-2xl'/>,
        name: 'Home',
        link:"/"
    },
    {
        icon: <FaShop className='text-2xl' />,
        name: 'Shop',
        link:"/products"
    },
    {
        icon: <IoIosContact className='text-2xl' />,
        name: 'Contact',
        link:'/contact'
    },
    {
        icon: <MdOutlineRoundaboutRight className='text-2xl' />,
        name: 'About',
        link:'/about'
    },
   
  

];

export default tabarray;