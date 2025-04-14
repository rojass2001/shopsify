"use client"
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Rootstate } from '../../redux/store';

function Cartsubtotal() {
  const {totalprice,cartproducts}=useSelector((state:Rootstate)=>state.cart)
  return (
  <div className='w-full relative space-y-2 min-h-[200px]  text-blue-700 font-bold border-[4px]'>
    <div className='flex justify-between bg-blue-700 text-white w-full py-2' >Total Items:<span>{cartproducts.length}</span>
     </div>
     <p className='flex w-full text-blue-700 p-2 font-extrabold justify-between'>Subtotal:<span>${totalprice}</span></p>
     <p className='flex w-full p-2 text-blue-700 font-extrabold justify-between  '>TotalPrice:<span>${totalprice}</span></p>
    <div className='w-full px-1 flex justify-center  absolute bottom-1 py-2 gap-2 text-white '>
      <button className='w-[120px] h-8 bg-blue-700'>Buynow</button>
      <Link href="/"><button  className='w-[120px] h-8  bg-blue-700'>Continue Shop</button></Link>
    </div>
  </div>
  )
}

export default Cartsubtotal
