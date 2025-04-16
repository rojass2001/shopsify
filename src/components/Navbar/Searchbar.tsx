"use client"
import useSearch from "@/customhooks/useSearch"

function Mobilesearchbar() {
    const {search,submit,handlechange}=useSearch()
    
  return (
    <form className="flex bg-white w-full" onSubmit={submit} >
      <input className='w-full pl-1 outline-none h-8 text-black' value={search} onChange={handlechange} 
       placeholder='search product here' type="text"  />
      <button type="submit" className='bg-blue-700 p-1 text-white '>search</button>
    </form>
  )
}

export default Mobilesearchbar
