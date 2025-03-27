import { Link } from "react-router-dom"

function Login() {
  return (
    <div className='w-full px-2 pt-14 min-h-screen flex items-center place-content-center'>
      <div className='w-full pb-8 md:pb-0 md:w-[60%] shadow-md h-auto md:h-[400px] flex flex-col md:flex-row  gap-5 bg-white shadow-gray-300'>
  <div className='w-full md:w-[50%] py-4 rounded-b-[20%] md:rounded-b-[0%] text-white flex flex-col gap-5 bg-blue-600  place-content-center place-items-center h-full'>
    <h2 className='font-bold text-4xl'>Hello, welcome</h2>
    <p className='text-sm'>Dont have an account register</p>
    <Link to="/register"><button className='border-[1px] px-8 py-1 border-white'>Register</button></Link>
  </div>

  <div className='w-full md:w-[50%] h-full px-2 flex flex-col items-center place-content-center '>
    <h2 className='font-bold text-3xl mb-5'>Login</h2>
    <input placeholder="enter email" className='w-full h-9 outline-none mb-7 border-[1px] border-gray-500' />
    <input placeholder="enter password" className='w-full h-9 outline-none border-[1px] mb-7 border-gray-500' />
    <button className='bg-blue-600 w-[130px] py-1 text-white font-bold'>Login</button>
  </div>
      </div>
    </div>
  )
}

export default Login
