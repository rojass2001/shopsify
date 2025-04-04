
import axios from 'axios'

export const productfetch=async()=>{
 const response=await axios.get('https://fakestoreapi.com/products');
 return response.data
}
export const productwithcategory=async(category:string)=>{
    const response=await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    console.log(response.data)
    return response.data

   }
