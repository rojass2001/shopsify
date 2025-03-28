import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'

function Footer() {
  return (
<div className='w-full    bg-blue-600 mt-4 md:px-1 lg:px-[60px] py-2'>
   <div className='w-full py-4 grid grid-cols-2  md:grid-cols-4  gap-6'>
     <div className=' space-y-2 text-white font-bold'>
        <p className='text-2xl'>Company</p>
        <p>About us</p>
        <p>Our service</p>
        <p>Privacy policy</p>

    </div>
    <div className=' text-white space-y-2 font-bold'>
      <p className='text-2xl'>Get Help</p>
      <p>FAQ</p>
      <p>Shipping</p>
      <p>Returns</p>
      <p>Payment Option</p>

    </div>
    <div className='space-y-2 text-white font-bold'>
      <p className='text-2xl'>OnlineShopping</p>
      <p>Women</p>
      <p>Men</p>
      <p>Jewelery</p>
      <p>Electronics</p>

    </div>
     <div className=' space-y-2 text-white font-bold'>
          <p className='text-2xl'>Follow us</p>
          <div className='flex text-3xl items-center gap-3'>
          <FaInstagram/>
          <FaTwitter/>
          <FaFacebook/>
          <FaYoutube/>
          </div>
      </div>
  </div>
</div>
  )
}

export default Footer
