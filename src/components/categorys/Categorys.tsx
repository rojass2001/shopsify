"use client"
import { categoryarray } from './categoryarray'
import { useDispatch } from 'react-redux'
import { categoryfilter } from '@/redux/Productslice'
import { productwithcategory } from '@/api/Api'
import Image from 'next/image'
import { redirect } from 'next/navigation'
function Categorys() {
    const dispatch=useDispatch()
    const productcategorys=async(value:string)=>{
        const data=await productwithcategory(value)
       dispatch(categoryfilter(data))
       redirect('/filter')
    }
  return (
    <div className='w-full   md:justify-center px-2 overflow-x-auto flex gap-[70px]' >
 
      {categoryarray.map((a)=>(
        <div className=' text-center  text-blue-600 font-bold' key={a.name} >
        <button onClick={()=>productcategorys(a.value)}className='bg-white shadow-md shadow-gray-300 w-[90px] h-[90px] rounded-full p-2   ' >
       <div className='w-full relative  h-full'><Image className=' rounded-full' src={a.image} alt="no image" fill/>
            </div> 
            </button>
        <p >{a.name}</p>
        </div>
      ))
       
      }
    </div>
  )
}

export default Categorys
