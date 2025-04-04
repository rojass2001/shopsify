"use client"
import Link from 'next/link'
import { CiLogin } from 'react-icons/ci'

function Loginicon() {
  return (
    <>
  <Link href="/login">
    <div className='flex '>
      <p className=''>Login</p>
      <button className='h-6 w-6 mr-1'><CiLogin className='text-2xl text-white ' /></button>
    </div>
  </Link>      
    </>
  )
}

export default Loginicon
