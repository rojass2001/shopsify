
import axios from 'axios'

export const productfetch=async()=>{
 const response=await axios.get('https://fakestoreapi.com/products');
 return response.data
}
export const productwithcategory=async(jewelery:string)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${jewelery}`);
    console.log(response.data)
    return response.data

   }
