'use client' // Required for components using hooks like useSelector (client-side only)

import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Rootstate } from '../../redux/store' // Typing the root state from your store
import Box from '@/components/Box' // Custom wrapper (likely a styled <div>)
import Button from '@/components/Button' // Reusable button component

function Cartsubtotal() {
  // Accessing total price and product list from Redux cart slice
  const { totalprice, cartproducts } = useSelector((state: Rootstate) => state.cart)

  return (
    <Box className="w-full relative space-y-2 min-h-[200px] text-blue-700 font-bold border-[4px]">
      
      {/* Header row showing total items */}
      <Box className="flex justify-between bg-blue-700 text-white w-full py-2">
        Total Items:
        <span>{cartproducts.length}</span>
      </Box>

      {/* Subtotal row */}
      <Box className="flex w-full text-blue-700 p-2 font-extrabold justify-between">
        Subtotal:
        <span>${totalprice}</span>
      </Box>

      {/* Total price row (could be merged with subtotal if no difference) */}
      <Box className="flex w-full p-2 text-blue-700 font-extrabold justify-between">
        Total Price:
        <span>${totalprice}</span>
      </Box>

      {/* Action buttons: Buy now and continue shopping */}
      <Box className="w-full px-1 flex justify-center absolute bottom-1 py-2 gap-2 text-white">
        <Button className="w-[120px] h-8 bg-blue-700">Buy Now</Button>
        <Link href="/">
          <button className="w-[120px] h-8 bg-blue-700">Continue Shop</button>
        </Link>
      </Box>
    </Box>
  )
}

export default Cartsubtotal
