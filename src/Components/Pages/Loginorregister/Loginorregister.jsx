import { memo } from "react"
import { FaLock } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-router-dom"

function Loginorregister({des,buttonname,link}) {
    return (
      <div className=' w-full min-h-screen pb-5 px-2 pt-[135px] lg:pt-[120px] place-content-center place-items-center '>
      <form className='w-full md:w-[50%] lg:w-[23%] bg-white space-y-4 lg:space-y-3 border-[5px] border-blue-700
      place-content-center rounded-lg text-blue-600 min-h-[350px]  px-3 py-12  lg:min-h-[320px]  lg:py-4'>
      <label className='font-bold '>Enter Email</label>
     <div className="w-full flex  items-center h-14 pr-1 place-content-center border-2 border-blue-700">
      <IoIosContact className="mt-1 text-blue-700"size={29}/>
       <input placeholder='enter your username @gmail.com'className='w-full  outline-none mt-1 h-12 lg:h-9'/></div>
      <label className='font-bold '>Enter password</label>
      <div className="w-full flex gap-1  items-center h-14 pr-1 place-content-center border-2  border-blue-700">
      <FaLock className="mt-1  text-blue-700"size={20}/>
      <input type="password"placeholder='enter your password'className='w-full  outline-none mt-1 h-12 lg:h-9'/>  
      </div>
      <p className="font-bold">forget password?</p>
    <Link to={link}> <p className='text-sm font-bold underline text-center mt-2'>{des}</p></Link>
     <div className='w-full mt-2 text-center'> 
      <button className=' px-8 py-2 font-bold mx-auto text-white bg-blue-700 '>{buttonname}</button>
      </div>
      </form>
        
      </div>
    )
  }
  
  export default memo(Loginorregister)