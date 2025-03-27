
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increaseproductquantity,decreaseproductquantity} from '../redux/Productslice'
import { addtocart } from '../redux/Cartslice'

function Productdetail() {
const dispatch=useDispatch()
const {productdetails}=useSelector(state=>state.product)
  return (
   
 <div className='w-full min-h-screen pt-[130px] place-items-center place-content-center p-2 '>
  <div className='w-full   md:w-[70%] lg:h-[500px] shadow-lg flex shadow-gray-300 flex-col md:flex-row gap-2 p-5 '>
      <img className='w-full h-[200px] md:w-[50%] md:h-full' src={productdetails?.image}/>
    <div className='space-y-2 font-bold text-center place-items-center md:text-start md:place-items-start'>
      <p className='text-2xl'>{productdetails?.title}</p>
      <p className='text-2xl'>Price:${Math.floor(productdetails?.price)}</p>
      <p>{productdetails?.description}</p>
      <p className='text-black flex items-center'><FaStar/> {productdetails?.rating?.rate}</p>
      <button onClick={()=>dispatch(decreaseproductquantity())} className='bg-black w-10 h-7 text-white mr-2'>-</button>{productdetails.quantity}
      <button  onClick={()=>dispatch(increaseproductquantity())} className='bg-black w-10 h-7 ml-2 text-white'>+</button>
      <p className='text-xl'>subtotal:${productdetails?.subtotal}</p>
      <button className='bg-black w-[100px] h-10 text-white'>Buy now</button>
      <button onClick={()=>dispatch(addtocart(productdetails))}
      className='bg-black w-[100px] h-10 text-white ml-5'>Addtocart</button>   
   </div>
  </div>
 </div>
 
  )
}

export default Productdetail
