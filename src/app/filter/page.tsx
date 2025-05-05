"use client"; // Marks this as a client component in Next.js

import Categorys from '@/components/categorys/Categorys'; // Category filter component
import { useSelector } from 'react-redux'; // Hook to access Redux store state
import Card from '@/components/Card'; // Product card component
import { Rootstate } from '../../redux/store'; // Root state type from Redux store
import Box from '@/components/Box'; // Reusable layout wrapper component

function Filter() {
  // Extract the filtered product list from the Redux store
  const { filterproducts } = useSelector((state: Rootstate) => state.product);

  return (
    // Main container with spacing to avoid overlapping with fixed navbar
    <Box className="w-full mt-[130px] md:mt-[70px]">
      
      {/* Render the category bar for filtering products by category */}
      <Categorys />

      {/* Show fallback text if no products match the current filter */}
      {filterproducts?.length < 1 ? (
        <Box className="w-full mt-4 h-screen font-bold text-3xl text-center text-blue-600">
          No Search Found
        </Box>
      ) : (
        // Render the filtered product list in a responsive grid
        <Box className="w-full mt-5 px-6 md:px-10 pb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-2">
          
          {/* Map through filtered products and display each in a Card component */}
          {filterproducts.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default Filter;
