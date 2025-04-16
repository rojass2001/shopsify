"use client"
import { FaStar, FaTrash } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import Carttotal from './Carttotal'
import { cartdecrease, cartincrease, removecart } from '../../redux/cartslice'
import Image from 'next/image'
import { Rootstate } from '@/redux/store'
import { useEffect } from 'react'
const quantitybutton = "bg-blue-700 text-white w-9 h-6";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

function Cart() {
  const dispatch = useDispatch();
  const router=useRouter()
  const { cartproducts } = useSelector((state: Rootstate) => state.cart);
  const login = JSON.parse(Cookies.get('login') || '{}');
  console.log(login)
  
  useEffect(() => {
       if (login===false||null) {
         toast.warning("please login")
        router.push('/login')
       }
  }, [])
  
  return (
    <div className='w-full pt-[120px] md:pt-[60px] ' >
      <div className='text-3xl py-4 bg-blue-700 font-bold text-white mb-5 text-center'>Your Carts</div> 
      {cartproducts.length<1?
      <div className='w-full h-screen text-center text-blue-700 text-3xl font-bold' >Your Cart is Empty</div>
    
    :<div className='w-full min-h-screen px-2 flex flex-col-reverse md:flex-row gap-3 justify-around'>
        <div className='w-full md:w-[60%]'>
      {cartproducts?.map((a)=>(
      <div className='w-full mb-5 py-2 h-[280px] md:h-[250px] gap-2 text-blue-700 shadow-md shadow-gray-300 flex' key={a.id}>
        <Image className='w-[40%] h-full' src={a.image} alt='no image' width={100} height={100} />
      <div className='font-bold relative space-y-2'>
          <p className='text-2xl'>{a.title.slice(0,38)}</p>
          <p className='text-xl '>${Math.floor(a.price)}</p>
          <p className='flex gap-1 items-center text-xl'><FaStar/>{a.rating}</p>
          <div className='flex font-bold gap-2 mb-2'>
           <button  onClick={()=>dispatch(cartdecrease(a.id))} className={quantitybutton}>-</button>{a.quantity}
           <button  onClick={()=>dispatch(cartincrease(a.id))} className={quantitybutton}>+</button>
          </div>

        <p>subtotal:${a.subtotal}</p>
        <div onClick={()=>dispatch(removecart(a))} className='w-14  place-items-center place-content-center 
          h-7 rounded-full text-xl bg-white shadow-mdshadow-gray-300'><FaTrash/>
        </div>
      </div>
      </div>
    ))  }

    </div>
      <div className='w-full md:w-[30%] lg:w-[20%]'>
       <Carttotal/>
      </div>
     </div>
}
  </div>
    
  )
}

export default Cart
