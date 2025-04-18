"use client"
import { categoryarray } from './categoryarray'
import Image from 'next/image'
import useFetch from '@/customhooks/useFetch'

function HomeCategory() {
  const{ productwithcategory }=useFetch()
    return (
    
      <div className='w-full '>
        <p className=' text-blue-500 ml-5 text-center font-bold text-3xl'>Shop By Category</p>
        <div className='w-full justify-center px-2 md:px-6 py-5 grid gap-8 md:gap-10 grid-cols-2 md:grid-cols-4'>
          {categoryarray.map((a) => (
            <div onClick={() =>productwithcategory(a.value)} className='py-4  bg-gray-400 text-center   text-blue-600' key={a.name}>
              <button className='w-15 h-15  relative p-1 rounded-full'>
                <Image className='rounded-full' quality={100} alt="dhdhdh" fill src={a.image} /></button>
              <p className=' font-bold '>{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
   }

export default HomeCategory