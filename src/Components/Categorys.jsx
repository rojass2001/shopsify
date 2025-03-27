import { categoryarray } from './Categoryarray'

import { useDispatch } from 'react-redux'
import { categoryfilter } from '../redux/Productslice'
import { useNavigate } from 'react-router-dom'
import { productwithcategory } from '../Api'
function Categorys() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const productcategorys=async(value)=>{
        const data=await productwithcategory(value)
       dispatch(categoryfilter(data))
       navigate('/filter')
    }
  return (
    <div className='w-full   md:justify-center  overflow-x-auto flex gap-[70px]' >
 
      {categoryarray.map((a)=>(
        <div className=' text-center  text-blue-600 font-bold' key={a.name} >
        <div  onClick={()=>productcategorys(a.value)}className='bg-white shadow-md shadow-gray-300 w-[90px] h-[90px] rounded-full p-2   ' >
        <img  className='w-full h-full rounded-full' src={a.image}/>
        </div>
        <p >{a.name}</p>
        </div>
      ))
       
      }
    </div>
  )
}

export default Categorys
