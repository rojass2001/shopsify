import Hero from '../Components/Hero'
import { lazy, Suspense } from 'react'
const  Category =lazy(()=>import('../Components/Category'))
const Topproducts=lazy(()=>import('../Components/Topproducts'))
import Service from '../Components/Service'
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
