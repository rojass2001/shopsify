"use client"//client component

import Box from '../Box'
import Link from 'next/link'
import { FaCartShopping } from 'react-icons/fa6'
import { useSelector } from 'react-redux';
import { Rootstate } from '@/redux/store';
import useAuthentication from '@/customhooks/useauth';

function Carticon() {
  const { cartproducts } = useSelector((state: Rootstate) => state.cart);  // Accessing cart products from Redux store state
 const{cartauthentication}=useAuthentication()
  return (
      <Box className='h-9 w-9 relative flex place-content-center items-center rounded-full bg-white'>
      <Link href="/cart"><FaCartShopping onClick={cartauthentication} className='text-blue-600 text-xl' /></Link>
            {/* Displaying the number of products in the cart as a badge */}
            {cartproducts.length > 0 &&
              <Box className='w-4 h-4 absolute text-sm flex items-center place-content-center rounded-full bg-blue-600 top-[1px] right-1 animate-bounce'>
                {cartproducts.length}  {/* Cart product count */}
              </Box>
            }
      </Box>
    
  )
}

export default Carticon



