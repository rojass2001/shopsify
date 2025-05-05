"use client" // Enables this component to run on the client side (needed for using hooks like useDispatch)

import { FaCartShopping } from 'react-icons/fa6'; // Shopping cart icon
import { FaStar } from 'react-icons/fa'; // Star icon for product rating
import { useDispatch } from 'react-redux'; // Redux dispatch hook

import { setproductdetail } from '@/redux/Productslice'; // Redux action to store product detail
import { addtocart } from '@/redux/cartslice'; // Redux action to add product to cart

import Image from 'next/image'; // Next.js optimized Image component
import { items } from '@/commontypes/types'; // Product type
import Box from './Box'; // Layout box component
import Text from './Text'; // Typography component
import Button from './Button'; // Reusable button component
import { memo } from 'react'; // React memoization to prevent unnecessary re-renders
import Link from 'next/link'; // Next.js navigation component

// Card component - displays individual product information
function Card({ product }: { product: items }) {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  return (
    // Card wrapper for positioning the add-to-cart button
    <Box className='relative'>

      {/* Wraps the product info in a link to the detail page */}
      <Link href={`/productdetails/${product.id}`}>
        <Box
          onClick={() => dispatch(setproductdetail(product))} // Dispatch selected product to Redux
          className='h-[300px] text-center space-y-2 text-black font-extrabold bg-white shadow-md rounded-lg shadow-gray-300'
        >
          {/* Product image */}
          <Box className='h-[50%] w-full relative object-contain'>
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-contain"
              quality={75}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </Box>

          {/* Product title (trimmed to 40 characters) */}
          <Text className='text-black'>
            {product.title.slice(0, 40)}
          </Text>

          {/* Product rating with star icon */}
          <Box className='w-full flex items-center justify-center mt-2'>
            <FaStar /> {product.rating.rate}
          </Box>

          {/* Product price (rounded down) */}
          <Text>${Math.floor(product.price)}</Text>
        </Box>
      </Link>

      {/* Add to cart button (outside of Link to prevent navigation) */}
      <Button
        onClick={() => { dispatch(addtocart(product)) }} // Dispatch add-to-cart action
        className='p-2 rounded-full group bg-white shadow-md absolute bottom-2 right-2 shadow-gray-400'
      >
        <FaCartShopping className='text-xl' />
      </Button>
    </Box>
  );
}

export default memo(Card); // Memoized export to avoid re-renders unless props change
