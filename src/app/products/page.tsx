"use client"; // Marks this as a client-side component in Next.js

import { useEffect } from 'react'; // React hook for side effects
import { useSelector } from 'react-redux';// Redux hook to access the store state

import Categories from "@/components/categorys/Categorys"; // Component for product category filtering
import Card from '@/components/Card'; // Product card component
import Box from '@/components/Box'; // Reusable layout box
import Loader from '@/components/Loader'; // Loader component for loading state

import useFetch from '@/customhooks/useFetch'; // Custom hook for fetching data and dispatching it to Redux
import { Rootstate } from '@/redux/store'; // Root state type for accessing Redux store
import { items } from '@/commontypes/types'; // Type definition for product items

function Products() {
  // Destructure the fetch function from the custom hook with the API endpoint
  const { fetchproducts } = useFetch('https://fakestoreapi.com/products');

  // Access the list of all products from the Redux store
  const { allproducts } = useSelector((state: Rootstate) => state.product);

  // Fetch products only if not already loaded
  useEffect(() => {
    if (!allproducts || allproducts.length === 0) {
      fetchproducts();
    }
  }, [fetchproducts, allproducts]);

  return (
    // Main container with top margin (to avoid overlap with navbar)
    <Box className="w-full mt-[130px] md:mt-[70px]">
      
      {/* Render category filter component */}
      <Categories />

      {/* If products are still loading, show a loader */}
      {!allproducts || allproducts.length === 0 ? (
        <Loader />
      ) : (
        <>
          {/* Section heading */}
          <Box className="bg-blue-700 w-full text-center text-white py-2 font-bold text-2xl">
            Our Products
          </Box>

          {/* Responsive grid layout to display all product cards */}
          <div className="w-full mt-5 min-h-[900px] overflow-y-auto px-6 md:px-10 gap-y-8 gap-x-2 md:gap-x-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-5">
            {allproducts.map((product: items) => (
              <Card product={product} key={product.id} />
            ))}
          </div>
        </>
      )}
    </Box>
  );
}

export default Products;
