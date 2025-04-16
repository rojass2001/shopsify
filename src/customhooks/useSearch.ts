"use client"
import { searchfilter } from '@/redux/Productslice'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function useSearch() {
    const[search,setsearch]=useState<string>("")
    const dispatch = useDispatch()
    const router=useRouter()
    //for set search values
      const handlechange = (e: React.ChangeEvent) => {
          setsearch((e.target as HTMLInputElement).value)
          console.log(search)
      }
      //form submit with search values
      const submit=(event:React.FormEvent)=>{
                event.preventDefault()
                dispatch(searchfilter(search))
                router.push('/filter')
      }
      
  return {submit,handlechange,search}

}

export default useSearch
