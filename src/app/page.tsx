"use client"
import Service from "@/components/service/Service";
import Hero from "../components/Hero";
import HomeCategory from "../components/categorys/HomeCategory";
import Topproducts from "../components/Topproducts";
import { useEffect } from "react";
import useFetch from "@/customhooks/useFetch";

export default function Home() {
  const{fetchproducts}=useFetch("https://fakestoreapi.com/products")
  useEffect(() => {
    fetchproducts()
 },[fetchproducts])
  return (
    <div className='w-full mt-[105px] md:mt-[60px]'>
      <Hero />
      <HomeCategory />
      <Topproducts />
      <Service/>
    </div>
  )
}
