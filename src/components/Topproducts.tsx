"use client"  // Indicates that this component is intended to run on the client side in a Next.js application.

import React, { useEffect } from 'react';  // React is imported to define the component and handle side effects (useEffect).
import { useDispatch, useSelector } from 'react-redux';  // Importing Redux hooks for dispatching actions and selecting state.
import { setproductdetail } from '@/redux/Productslice';  // Action to set product details in Redux.
import { FaCartShopping, FaStar } from 'react-icons/fa6';  // Icons for cart and rating.
import { addtocart } from '@/redux/cartslice';  // Action to add items to the cart in Redux.
import { Rootstate } from '../redux/store';  // Type for accessing the Redux store state.
import Link from 'next/link';  // Link component from Next.js for client-side navigation.
import Image from 'next/image';  // Image component for optimized image rendering in Next.js.
import useFetch from '@/customhooks/useFetch';  // Custom hook to fetch data (in this case, top products).
import Box from './Box';  // Custom Box component for layout and styling.
import Text from './Text';  // Custom Text component for displaying text.
import Button from './Button';  // Custom Button component for clickable elements.
import Loader from './Loader';

function Topproducts() {
  // Fetch top products using a custom hook.
  const { Topproducts } = useFetch('https://fakestoreapi.com/products'); 
  const dispatch = useDispatch();  // Initialize dispatch function to trigger Redux actions.
  const { topproducts } = useSelector((state: Rootstate) => state.product);  // Get 'topproducts' from Redux state.
  
  // Fetch the top products when the component mounts.
  useEffect(() => {
    Topproducts();  // Calls the custom hook function to fetch the data.
  }, [Topproducts]);// DEPENDENCY ARRAY: The effect will run when the component mounts and when the Topproducts function changes.
  return (
    <Box className='w-full'>
      {topproducts.length === 0 ?
        <Loader />
        :
        <Box>
          <Text className='text-3xl text-center mb-5 font-bold text-blue-600'>
            Our Top products
          </Text>
          <Box className='w-full  bg-gray-100 py-2 px-2 gap-5 md:gap-15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 font-bold lg:px-[150px]'>
            {/* Loop through the top products and render them */}
            {topproducts?.map((a) => (
              <Box
                onClick={() => dispatch(setproductdetail(a))}  // Set the product details when clicked.
                className='min-h-[200px] group py-2 relative space-y-2 place-items-center text-center justify-center place-content-center bg-white text-black shadow-md shadow-gray-300'
                key={a.id}
              >
                {/* Product Image */}
                <div className='w-full relative h-[100px]'>
                  <Image
                    src={a.image}
                    fill
                    quality={75}
                    priority
                    alt={a.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                {/* Product Title */}
                <Text>{a.title?.slice(0, 24)}</Text>
                {/* Product Price */}
                <Text>${Math.floor(a.price)}</Text>
                {/* Product Rating */}
                <Box className='flex items-center place-content-center'>
                  <FaStar /> {a.rating.rate}
                </Box>

                {/* Add to Cart Button */}
                <Button
                  onClick={() => { dispatch(addtocart(a)); }}
                  className='p-2 group lg:hidden group-hover:block rounded-full absolute bottom-9 md:bottom-3 right-1 md:right-3 text-xl bg-white shadow-md shadow-gray-300'
                >
                  <FaCartShopping />
                </Button>
                {/* Link to product Details Page */}
                <Link href={`/productdetails`}>
                  <button className='bg-black text-white p-2 rounded-full'>
                    More Details
                  </button>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      }
    </Box>   
  );
}

export default Topproducts;
