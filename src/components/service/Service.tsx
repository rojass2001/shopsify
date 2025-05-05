"use client"
import React from 'react';  // Importing React for JSX syntax and functional component
import { servicearray } from './Servicearray';  // Importing the array of services (presumably containing service data)
import Box from '../Box';  // Importing Box component for layout and styling
import Text from '../Text';  // Importing Text component for text display

function Service() {
  return (
   
    <Box className='w-full'>  {/* Box wrapper for the entire service section */}
      {/* Heading for the service section */}
      <Box className='w-full py-3 text-4xl font-bold text-center text-blue-600'>
        Our Services
      </Box>
      
      {/* Grid layout for displaying each service */}
      <Box className='grid py-3 px-2 gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        {/* Iterating over servicearray to render individual service cards */}
        {servicearray.map((a) => (
          <Box 
            className='py-3 bg-white text-center place-items-center shadow-lg shadow-gray-300 
            text-black font-bold space-y-2' 
            key={a.des}  // Using description as a unique key for each service
          >
            {/* Icon for the service */}
            <Text>{a.icon}</Text>
            {/* Name of the service */}
            <Text>{a.sevice}</Text>
            {/* Description of the service */}
            <Text>{a.des}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Service;
