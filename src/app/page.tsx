"use client";//client component in Next.js, allowing it to use hooks and state

import Service from "@/components/service/Service"
import Hero from "../components/Hero"
import HomeCategory from "../components/categorys/HomeCategory"
import Topproducts from "../components/Topproducts"
import Box from "@/components/Box"
import useFetch from "@/customhooks/useFetch"
import { useEffect } from "react"

export default function Home() {
  const { fetchproducts } = useFetch("https://fakestoreapi.com/products")

  // Fetch products when the component mounts
  useEffect(() => {
    fetchproducts()
  }, [fetchproducts])// The Hero component represents the main section of a page, typically used for promotion.

  return (
    // Main container for the home page
    <main className="w-full mt-[105px] md:mt-[60px]">
      
      {/* Hero section (e.g., introductory banner, branding) */}
      <Hero />

      {/* HomeCategory component for showcasing categories */}
      <HomeCategory />

      {/* Topproducts component to display popular or highlighted products */}
      <Topproducts />

      {/* Service component for showing additional services or features */}
      <Service />
    </main>
  )
}
