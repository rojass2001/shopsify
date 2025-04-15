"use client"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchfilter } from "@/redux/Productslice"
import {  useRouter } from "next/navigation"

function Mobilesearchbar() {
  const router=useRouter()
  const dispatch=useDispatch()
  const [search,setsearch]=useState("")
     const submit=async (event:React.FormEvent)=>{
        event.preventDefault()
        dispatch(searchfilter(search))
        router.push('/filter')
      }
  return (
    <form className="flex bg-white w-full" onSubmit={submit}>
      <input className='w-full pl-1 outline-none h-8 text-black' value={search} onChange={(e)=>setsearch(e.target.value)} 
       placeholder='search product here' type="text"  />
      <button type="submit" className='bg-blue-700 p-1 text-white '>search</button>
    </form>
  )
}

export default Mobilesearchbar
