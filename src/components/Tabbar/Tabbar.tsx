"use client"//client component in Next.js, allowing it to use hooks and state

import Link from 'next/link';  // Importing Link from Next.js for client-side navigation
import useKeyboardStatus from '@/customhooks/useKeyboard';  // Importing custom hook for keyboard status detection
import tabarray from './Tabbararray';  // Importing array of tab objects (tab name, icon, and link)
import Box from '../Box';  // Importing Box component for layout and styling
import Button from '../Button';  // Importing Button component for clickable buttons
import { HiOutlineUser } from 'react-icons/hi';  // Importing user icon from react-icons
import useAuthentication from '@/customhooks/useauth';  // Importing custom hook for authentication (e.g., logout)
import { useDispatch, useSelector } from 'react-redux';
import { Rootstate } from '@/redux/store';
import { Settabstatus } from '@/redux/Tabbarslice';

function Tabbar() {
  const { logout } = useAuthentication();  // Destructuring logout function from the authentication hook
  const { isKeyboardOpen } = useKeyboardStatus();  // Hook to detect if the keyboard is open (for mobile screens)
  const{ activeTab }=useSelector((state:Rootstate)=>state.tab) // Getting the active tab index from Redux state
  const dispatch=useDispatch() // Using Redux dispatch to manage state
  
  return (
    <>
      {/* The tab bar is only visible when the keyboard is closed (conditional rendering) */}
      {!isKeyboardOpen && (
        <Box className={`w-full px-2 h-[60px] text-white pt-2  overflow-x-auto rounded-t-3xl flex justify-around items-center place-content-center fixed z-50 bottom-0 right-0 left-0  md:hidden`} 
           style={{backgroundColor:"blue"}}  >
          {/* Looping through tabarray to create each tab in the tab bar */}
          {tabarray.map((tab, index) => (
            <Link href={tab.link} key={tab.link}>
              <Button 
                onClick={() => { dispatch(Settabstatus(index)) } } 
                className={`flex items-center ${activeTab === index ? "font-bold" : ""} text-sm place-content-center flex-col`}>
                {tab.icon} {tab.name}  {/* Displaying tab icon and name */}
              </Button>
            </Link>
          ))} 
          {/* Logout button */}
          <Link href="/login"  onClick={() => { dispatch(Settabstatus(4)) } }  >
            <Button 
              onClick={logout} 
              className={`flex items-center text-sm place-content-center flex-col `}>
              <HiOutlineUser className="text-2xl" />  {/* User icon */}
              Signout  {/* Logout button text */}
            </Button>
          </Link> 
        </Box>
      )}
    </>
  );
}

export default Tabbar;
