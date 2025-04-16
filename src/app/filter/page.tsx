"use client"
import Categorys from '@/components/categorys/Categorys'
import { useSelector } from 'react-redux'
import Card from '@/components/Card'
import Link from 'next/link'
import { Rootstate } from '../../redux/store';
import Loader from '@/components/Loader'

function Filter() {
  const { filterproducts } = useSelector((state: Rootstate) => state.product)
  
  return (
    
    <div className='w-full mt-[130px] md:mt-[70px]  '>
    <Categorys/>
    {filterproducts?.length<1?
    <div className='w-full mt-4 h-screen font-bold text-3xl text-center text-blue-600'>No Search Found</div>
        :
    <div className='w-full  mt-5 px-6 md:px-10 gap-y-8 gap-x-2 
      grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-5'>
          
          {filterproducts?.length < 0 &&
            <Loader/>
          }
          {filterproducts?.map((product) => (
            <Link href="/productdetails" key={product.id}>
               <Card product={product} />
            </Link>
            ))}
    </div>
}
    </div>
  )
}

export default Filter