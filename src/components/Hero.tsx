"use client"//client component

import Image from "next/image";  // Importing the Image component from Next.js for optimized image rendering.
import Box from "./Box";  // Importing a custom Box component for layout purposes.
import Text from "./Text";  // Importing a custom Text component for displaying text content.
import Button from "./Button";  // Importing a custom Button component for user interactions.

function Hero() {
  
  return (
    <Box className="w-full ">  {/* Outer Box container wrapping the entire Hero section */}
      <Box className='w-full place-items-center bg-blue-600 flex justify-around px-2 min-h-[350px]'> 
        {/* Inner Box that uses flexbox to center content and provide background color and spacing */}
        
        <Box className='max-w-[400px] h-full place-content-center text-xl font-bold text-white'>
          {/* This Box contains the main content on the left side of the Hero section, including text and a button */}
          <Text className='text-3xl md:text-5xl '>
            {/* Main text message, using responsive typography */}
            Elevate Your With Trendy from 
          </Text>
          <Button className='text-xl lg:text-4xl md:text-2xl text-white shadow-md shadow-gray-300 bg-blue-600
          p-2 rounded-full mt-4'>
            {/* Button component with styles, including a shadow, padding, and rounded corners */}
            Shopsify
          </Button>
        </Box>

        <Box className='place-content-center h-[400px] '>
          {/* Box for the image section, vertically centered with a set height */}
          <Image
            className='w-[300px] h-[300px] top-12 right-10'      
            src="https://www.rixxo.com/wp-content/uploads/2023/06/ecommerce-agency-hero.png"
            alt="Ecommerce agency hero"  // The image used in the Hero section.
            quality={75}  // Image quality setting for optimization
            priority  // Indicates that this image should be prioritized for loading.
            width={300}  // Width of the image in pixels.
            height={300}  // Height of the image in pixels.
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Hero;  // Exporting the Hero component for use in other parts of the application.
