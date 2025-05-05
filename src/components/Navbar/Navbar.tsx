"use client"// client component

import Searchbar from './Searchbar';  // Importing the Searchbar component for searching products
import Loginicon from './Loginicon';  // Importing the Loginicon component to show the login option
import Link from 'next/link';  // Importing Next.js Link for navigation between pages
//import { useSelector } from 'react-redux';  // Importing useSelector to access the Redux store state
//import { Rootstate } from '@/redux/store';  // Importing the Rootstate type for type-safe access to Redux store
import Logouticon from "./Logouticon";  // Importing the Logouticon component to display the logout functionality
import Box from "../Box";  // Importing the Box component for layout and styling
import Text from "../Text";  // Importing the Text component for displaying text
import Carticon from "./Carticon";

function Navbar() {

  return (
    // Main navbar container with fixed positioning at the top
    <nav className='w-full fixed top-0 right-0 left-0 z-30' style={{ backgroundColor: "blue" }}>
      <Box className=' h-[60px] px-1 flex items-center text-white justify-between lg:px-5 '>
        {/* Navbar brand/logo */}
        <Text className='text-2xl font-bold'>Shopsify</Text>

        {/* Navbar links for different pages (Home, About, Products, Contact) */}
        <ul className='gap-5 text-[17px] list-none hidden md:flex font-bold'>
          <Link href="/"> <li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/products"> <li>Products</li></Link>
          <Link href="/contact"><li>Contact</li> </Link>
        </ul>

        {/* Searchbar shown only on medium and larger screens */}
        <Box className='hidden md:flex w-[220px] '><Searchbar /></Box>

        {/* Right-side actions for login/logout and cart */}
        <Box className='flex items-center'>
          <Loginicon />  {/* Login icon component */}
          
          {/* Cart icon with a notification bubble */}
          <Carticon/>

          {/* Logout icon component */}
          <Logouticon />
        </Box>
      </Box>

      {/* Searchbar visible on small screens */}
      <Box className='md:hidden w-full shadow-md p-2 shadow-gray-500 flex items-center place-content-center'>
        <Searchbar />
      </Box> 
    </nav> 
  );
}

export default Navbar;
