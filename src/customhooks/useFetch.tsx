"use client"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { categoryfilter, setproducts, settopproducts } from '@/redux/Productslice'
import { useRouter } from 'next/navigation'
function useFetch(url?:string) {
 const dispatch = useDispatch()
 const router=useRouter()   
 const fetchproducts = async (): Promise<void>=>{
     if (!url) {
         throw new Error("URL is required");
     }
     const response = await axios.get(url);
      dispatch(setproducts(response.data));
     
  }
  const Topproducts =async () => {
     if (!url) {
         throw new Error("URL is required");
    }
    const response = await axios.get(url);
    dispatch(settopproducts(response.data));
  }

    const productwithcategory=async(category:string):Promise<void>=>{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    dispatch(categoryfilter(response.data))
    router.push("/filter")  
    }
    
  return {fetchproducts,productwithcategory,Topproducts}
}

export default useFetch
