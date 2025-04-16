"use client"
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail} from 'react-icons/md'

function Contact() {

  return (
  <div className='w-full px-1 py-5 pt-[150px] md:pt-[100px] md:px-5'>
    <div className='h-6 bg-blue-700 w-full text-center  text-white font-bold text-3xl'>Contact</div>
      <div className='bg-blue-700 justify-center min-h-[400px] place-content-center place-items-center  flex gap-10 px-5   py-10 text-blue-600 flex-col md:flex-row  lg:px-14'>
        <div className='w-full pt-6 space-y-14 lg:w-[30%]'>
        <div className='h-10 w-full flex items-center bg-white'><FaPhone/>+9656213935</div>
        <div className='h-10 w-full bg-white flex items-center'><MdEmail className='text-xl'/>Shopy@gmail.com</div>
        <div className='h-10 flex items-center bg-white'><FaLocationDot/> Ernakulam Kadavanthra</div>
        </div>
        <div className='hidden h-[200px] w-2  bg-white md:block'></div>
        <form className='w-full md:pt-6 text-white font-bold space-y-7 lg:w-[30%]'>
          <label>Your Name</label> 
          <input type="text" className='h-10 w-full  text-blue-800 bg-white' placeholder='enter your name'/>
          <label>Your Email</label> 
          <input type="email" className='h-10  text-blue-700 w-full bg-white' placeholder='enter your email'/>
          <label>Your Message</label> 
          <textarea className='h-14  w-full  text-blue-800 bg-white' placeholder='write Your message'></textarea>
        </form>
     </div>
  </div>
  )
}

export default Contact