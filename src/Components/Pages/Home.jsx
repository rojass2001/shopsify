import Hero from '../Hero'
import { lazy, Suspense } from 'react'
const  Category =lazy(()=>import('../Category'))
const Topproducts=lazy(()=>import('../Topproducts'))
import Service from '../Service'
import Loader from './Loader'


function Home() {
  return (
    <div className='w-full mt-[105px] md:mt-[60px]'>
     <Suspense fallback={<Loader/>}>
        <Hero /> 
        <Category/>
        <Topproducts/>
        <Service/>
   </Suspense>
    </div>
  )
}

export default Home
