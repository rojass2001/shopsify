import { categoryarray } from './Categoryarray'
function Category() {

  return (
    <div className='w-full '>
      <p className=' text-blue-500 ml-5 font-bold text-2xl'>Shop By Category</p>
      <div className='w-full justify-center py-2 grid gap-3 grid-cols-4'>
       
        {categoryarray.map((a)=>(
      <div className='rounded-full pt-2 text-center justify-center place-items-center
      place-content-center  text-blue-600' key={a.name}>
      <img className='w-16 h-16 rounded-full mx-auto' src={a.image}/>
      <p className=' font-bold '>{a.name}</p>
      </div>
          ))}
      </div>
    </div>
  )
}

export default Category
