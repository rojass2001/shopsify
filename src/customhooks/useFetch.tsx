"use client"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { categoryfilter, setproducts, settopproducts } from '@/redux/Productslice'
import {  useRouter } from 'next/navigation'
import { useCallback } from 'react'
function useFetch(url?:string) {
  const dispatch = useDispatch()
  const router = useRouter()
 const fetchproducts = async (): Promise<void>=>{
     if (!url) {
         throw new Error("URL is required");
     }
     const response = await axios.get(url);
      dispatch(setproducts(response.data));
     
  }
  const Topproducts = async () => {
     if (!url) {
         throw new Error("URL is required");
    }
    const response = await axios.get(url);
    dispatch(settopproducts(response.data));
  }

    const productwithcategory = useCallback(async (category: string): Promise<void> => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      dispatch(categoryfilter(response.data))
      router.push('/filter')
    } catch (error) {
      console.error('Failed to fetch category products:', error)
    }
  }, [router, dispatch])
    
  return {fetchproducts,productwithcategory,Topproducts}
}

export default useFetch