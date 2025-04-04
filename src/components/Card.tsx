
import { FaCartShopping } from 'react-icons/fa6'
import { setproductdetail } from '@/redux/Productslice' 
import { addtocart } from '@/redux/cartslice'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { items } from '@/commontypes/types'

function Card({product}:{product:items}) {
    const dispatch=useDispatch()
  return (
    <>

  <div onClick={()=>dispatch(setproductdetail(product))} className='h-[300px] relative 
      text-center space-y-2 text-black font-extrabold bg-white shadow-md rounded-lg  shadow-gray-300'>
      <div className='h-[50%] w-full relative'><Image  fill src={product.image} alt="no image"    /></div>
       <p className='text-black '>{product.title.slice(0,40)}</p>
       <div className='w-full flex items-center justify-center'><FaStar/>{product.rating.rate}</div>
         <p>${Math.floor(product.price)}</p>
      <div onClick={()=>dispatch(addtocart(product))} className='p-2 rounded-full bg-white shadow-md
         absolute bottom-2 right-2 shadow-gray-400'> <FaCartShopping className='text-xl  '/>
      </div>
  </div>
 
    </>
  )
}

export default Card