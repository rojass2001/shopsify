"use client"
import React from 'react'
import { servicearray } from './Servicearray'

function Service() {
  return (
  <div className='w-full'>
    <div className='w-full py-3 text-4xl font-bold text-center text-blue-600'>Our Services</div>
    <div className='grid py-3 px-2   gap-5 grid-cols-1 md:grid-cols-3  lg:grid-cols-5'>
      {servicearray.map((a)=>(
      <div className='py-3 bg-white text-center place-items-center shadow-lg shadow-gray-300 
       text-black font-bold space-y-2' key={a.des}>
        <p>{a.icon}</p>
        <p>{a.sevice}</p>
        <p>{a.des}</p>
      </div>

      ))}
    </div>
    </div>
  )
}

export default Service
