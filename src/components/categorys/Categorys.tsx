"use client"

import { categoryarray } from './categoryarray'  // Importing predefined categories with associated data (name, image, value)
import Image from 'next/image'                   // Importing Image component from Next.js for optimized image rendering
import useFetch from '@/customhooks/useFetch'    // Custom hook to handle fetching data based on the category selected
import Box from '../Box'                         // Reusable Box component for layout
import Text from '../Text'                       // Text component to render text content
import Button from '../Button'                   // Button component for actions
import { memo } from 'react'

function Categorys() {
  // Using the custom hook to fetch products based on category selection
  const { productwithcategory } = useFetch("https://fakestoreapi.com/products/category/")// fetching the url for category

  return (
    <Box className='w-full md:justify-center px-2 overflow-x-auto flex gap-[70px]' >

      {/* Mapping through the `categoryarray` to display each category */}

      {categoryarray.map((a) => (
        <Box className='text-center text-blue-600 font-bold' key={a.name} >

          {/* Button for category selection; triggers `productwithcategory` with the category value when clicked */}
          
          <Button onClick={() => productwithcategory(a.value)} className='bg-white shadow-md shadow-gray-300 w-[90px] h-[90px] rounded-full p-2'>
            
            {/* Box to hold the image for the category */}

            <Box className='w-full relative h-full'>
              {/* Image for the category, with Next.js Image optimization and rounded corners */}
              <Image className='rounded-full h-full w-full object-contain'
                src={a.image?a.image:""}
                alt="no image"
                fill
                priority
                quality={75} // Slightly lower quality to save bandwidth
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"  
              />
            </Box>

          </Button>

          {/* Text component to display the name of the category */}

          <Text>{a.name}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default memo(Categorys)
