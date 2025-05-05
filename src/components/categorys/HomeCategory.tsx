"use client" // This component is a client component in Next.js, allowing it to use hooks and state

import { categoryarray } from './categoryarray'  // Importing predefined categories with associated data (name, image, value)
import Image from 'next/image'                   // Importing Image component from Next.js for optimized image rendering
import useFetch from '@/customhooks/useFetch'    // Custom hook to handle fetching data based on the category selected
import Box from '../Box'                          // Reusable Box component for layout
import Text from '../Text'                        // Text component to render text content

function HomeCategory() {
  // Using the custom hook to fetch products based on category selection
  const { productwithcategory } = useFetch("https://fakestoreapi.com/products/category/")

  return (
    <Box className='w-full '>
      {/* Heading for the section */}
      <Text className='text-blue-500 ml-5 text-center font-bold text-3xl'>
        Shop By Category
      </Text>

      {/* Grid layout for category items */}
      <Box className='w-full justify-center px-2 md:px-6 py-5 grid gap-8 md:gap-10 grid-cols-2 md:grid-cols-4'>
        {/* Iterating through the `categoryarray` to display each category */}
        {categoryarray.map((a) => (
          <Box
            onClick={() => productwithcategory(a.value)}  // Triggering category-based product fetch when clicked
            className='py-4 bg-gray-400 text-center justify-center text-blue-600'
            key={a.name}
          >
            {/* Image container with rounded corners for category icon */}
            <Box className='w-15 h-15 relative mx-auto p-1 rounded-full'>
              {/* Image for the category, with Next.js Image optimization and rounded corners */}
              <Image className='rounded-full w-full h-full'
                quality={75}
                alt="category image"
                fill
                src={a.image}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" 
              />
            </Box>
            {/* Category name */}
            <Text className='font-bold '>{a.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default HomeCategory
