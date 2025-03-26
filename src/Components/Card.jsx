/* eslint-disable react/prop-types */
import { FaCartShopping } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { setproductdetail } from '../redux/Productslice'
import { addtocart } from '../redux/Cartslice'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

function Card({product}) {
    const dispatch=useDispatch()
  return (
    <>
 <Link to="/details">
    <div onClick={()=>dispatch(setproductdetail(product))} className='h-[300px] relative 
      text-center space-y-2 font-bold  bg-white shadow-md rounded-lg shadow-gray-300'>
      <img className='h-[50%] w-full' src={product.image}/>
       <p>{product.title.slice(0,40)}</p>
       <div className='w-full flex items-center justify-center'><FaStar/>{product.rating.rate}</div>
         <p>${Math.floor(product.price)}</p>
      <div onClick={()=>dispatch(addtocart(product))} className='p-2 rounded-full bg-white shadow-md 
         absolute bottom-2 right-2 shadow-gray-300'> <FaCartShopping className='text-xl  '/>
      </div>
    </div>
 
    </Link>
    </>
  )
}

export default Card
