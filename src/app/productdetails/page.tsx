"use client"
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increaseproductquantity,decreaseproductquantity} from '@/redux/Productslice'
import { addtocart } from '@/redux/cartslice'
import { Rootstate } from '@/redux/store'
import Image from 'next/image'
import { AppDispatch } from '../../redux/store';
import Loader from '@/components/Loader'

function Productdetail() {
  const dispatch: AppDispatch = useDispatch()
  const { productdetails } = useSelector((state: Rootstate) => state.product);
  return (
   
    <div className='w-full min-h-screen pt-[130px] place-items-center place-content-center p-2 '>
      {!productdetails ? <Loader /> :
        < div className='w-full   md:w-[70%] h-auto md:h-[500px] shadow-md shadow-slate-400 md flex  flex-col md:flex-row gap-2 p-5 '>
      {productdetails?.image ? (
        <div className='w-full h-[200px] md:w-[50%] md:h-full relative'>
          <Image src={productdetails.image} fill alt="Product image" />
        </div>
      ) : (
        <div className='w-full h-[200px] md:w-[50%] md:h-full bg-gray-200 flex items-center justify-center'>
          <p>No Image Available</p>
        </div>
      )}
      <div className='space-y-2 font-bold text-center place-items-center md:text-start md:place-items-start'>
        <p className='text-2xl'>{(productdetails?.title)}</p>
        <p className='text-2xl'>Price:${Math.floor(productdetails?.price)}</p>
        <p>{productdetails?.description?.slice(0, 130)}</p>
        <div className='w-full text-black justify-center flex items-center md:justify-start'><FaStar /> {productdetails?.rating?.rate}</div>
        <button onClick={() => dispatch(decreaseproductquantity())} className='bg-black w-10 h-7 text-white mr-2'>-</button>{productdetails.quantity}
        <button onClick={() => dispatch(increaseproductquantity())} className='bg-black w-10 h-7 ml-2 text-white'>+</button>
        <p className='text-xl'>subtotal:${productdetails?.subtotal}</p>
        <button className='bg-black w-[100px] h-10 text-white'>Buy now</button>
        <button onClick={() => dispatch(addtocart(productdetails))}
        className='bg-black w-[100px] h-10 text-white ml-5'>Addtocart</button>
      </div>
    </div>
}
 </div>
 
  )
}

export default Productdetail
