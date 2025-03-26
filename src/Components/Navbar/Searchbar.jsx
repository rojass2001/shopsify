import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchfilter } from "../../redux/Productslice"

function Mobilesearchbar() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [search,setsearch]=useState("")
  const submit=(event)=>{
    event.preventDefault()
   dispatch(searchfilter(search))
   navigate('/filter')
  }
 
  return (
    <form className="flex w-full" onSubmit={submit}>
      <input className='w-full  h-8' onChange={(e)=>setsearch(e.target.value)} 
      placeholder='search product here' type="text"  />
      <button type="submit" className='bg-blue-600 p-1 '>search</button>
  </form>
  )
}

export default Mobilesearchbar
