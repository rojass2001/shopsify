
import { FaStar } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { increaseproductquantity,decreaseproductquantity} from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'

function Productdetail() {
const dispatch=useDispatch()
const Pro=useSelector(state=>state.product.productdetails)
  return (
   
    <div className='w-full min-h-screen pt-[130px] place-items-center place-content-center p-2 '>

      <div className='w-full   md:w-[70%] lg:h-[500px] shadow-lg flex shadow-gray-300 flex-col md:flex-row gap-2 p-5 '>
      <img className='w-full h-[200px] md:w-[50%] md:h-full' src={Pro?.image}/>
      <div className='space-y-2 font-bold text-center place-items-center md:text-start md:place-items-start'>
      <p className='text-2xl'>{Pro?.title}</p>
      <p className='text-2xl'>Price:${Math.floor(Pro?.price)}</p>
      <p>{Pro?.description}</p>
     <div className='w-full flex justify-center md:justify-start items-center gap-1'> <FaStar/>{Pro?.rating.rate}</div>
     <div className='w-full justify-center md:justify-start items-center flex text-black gap-2  '>
      <button onClick={()=>dispatch(decreaseproductquantity())} className='bg-black w-10 h-7 text-white'>-</button>{Pro.quantity}
      <button  onClick={()=>dispatch(increaseproductquantity())} className='bg-black w-10 h-7 text-white'>+</button>
     </div>
     <p className='text-xl'>subtotal:${Pro?.subtotal}</p>
     <div className='w-full justify-center md:justify-start flex gap-3 mt-5 text-white'>
      <button className='bg-black w-[100px] h-9'>BuyNow</button>
      <button onClick={()=>dispatch(addtocart(Pro))} className='bg-black w-[100px] h-9'>Addtocart</button>
     </div>
      </div>
      </div>
    </div>
 
  )
}

export default Productdetail
