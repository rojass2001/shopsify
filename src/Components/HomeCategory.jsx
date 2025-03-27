import { useDispatch } from 'react-redux'
import { categoryarray } from './Categoryarray'
import { useNavigate } from 'react-router-dom'
import { categoryfilter } from '../redux/Productslice'
import { productwithcategory } from '../Api'
function HomeCategory() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
   const filters=async(value)=>{
          const data=await productwithcategory(value)
         dispatch(categoryfilter(data))
         navigate('/filter')
      }
  return (
    
    <div className='w-full '>
      <p className=' text-blue-500 ml-5 text-center font-bold text-3xl'>Shop By Category</p>
      <div className='w-full justify-center md:px-6 py-5 grid gap-10 grid-cols-2 md:grid-cols-4'>
       
        {categoryarray.map((a)=>(
      <div onClick={()=>filters(a.value)} className='pt-2  bg-gray-400 text-center justify-center place-items-center
      place-content-center  text-blue-600' key={a.name}>
      <img className='w-16 h-16 rounded-full mx-auto' src={a.image}/>
      <p className=' font-bold '>{a.name}</p>
      </div>
          ))}
      </div>
    </div>
  )
}

export default HomeCategory