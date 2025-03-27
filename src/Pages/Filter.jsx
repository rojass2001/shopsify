/* eslint-disable react/jsx-key */
import Categorys from '../Components/Categorys'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

function Filter() {
const {filterproducts}=useSelector(state=>state.product)
  return (
    
    <div className='w-full mt-[130px] md:mt-[70px]  '>
    <Categorys/>
    {filterproducts.length<1?
    <div className='w-full mt-4 h-screen font-bold text-3xl text-center text-blue-600'>No Search Found</div>
    :
    <div className='w-full  mt-5 px-6 md:px-10 gap-y-8 gap-x-2 
      grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        {filterproducts?.map((product)=>(
          <Card product={product} key={product.id}/>
))}
    </div>
}
    </div>
  )
}

export default Filter
