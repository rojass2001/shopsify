"use client"
import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { userinput } from "@/commontypes/types"
import useAuth from "@/customhooks/useauth"
import useInput from "@/customhooks/useInput"
const inputcontainer = "w-full px-2 flex items-center bg-white border-[1px] border-black"

function Login() {
  const { values, handlechange } = useInput<userinput>({
    email: "",
    password:""
  })
  const { loginsubmit } = useAuth(values.email, values.password)
  
  return(
<div className='w-full px-2 pt-[115px] min-h-screen flex items-center place-content-center'>
  <div className='form w-full pb-8 md:pb-0 md:w-[60%] shadow-md h-auto md:h-[400px] flex flex-col md:flex-row  gap-5 bg-white shadow-gray-300' >
    <div className='w-full md:w-[50%] py-4 rounded-b-[20%] md:rounded-b-[0%] text-white flex flex-col gap-5 bg-blue-600  place-content-center place-items-center h-full'>
     <h2 className='font-bold text-4xl'>Hello, welcome</h2>
     <p className='text-sm'>Dont have an account register</p>
     <Link href="/register"><button className='border-[1px] px-8 py-1 border-white'>Register</button></Link>
   </div>

   <div className='w-full md:w-[50%] h-full px-2 flex flex-col items-center place-content-center '>
      <h2 className='font-bold text-3xl mb-5'>Login</h2>
      <span className={inputcontainer}>
      <MdEmail /> <input required name="email" onChange={handlechange} value={values.email}  className='outline-none w-full h-12 pl-2' placeholder='enter email' type="email"/>
      </span>
      <span className={`${inputcontainer} mt-5 mb-2`}>
      <FaLock className="text-sm" /> <input required name="password" onChange={handlechange} value={values.password}   className='outline-none w-full h-12  bg-white pl-2' placeholder='enter password' type="password"/>
          </span>
          <Link href="/forgotpassword" className="text-[15px] underline mt-3" >forgot password?</Link>
      <button onClick={loginsubmit} className='bg-blue-600 w-[130px] py-1 text-white mt-4 font-bold'>Login</button>
   </div>
  </div>
 </div>
  )
}

export default Login