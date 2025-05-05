"use client"//client component in Next.js, allowing it to use hooks and state

import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import useInput from "@/customhooks/useInput"
import { userinput } from "@/commontypes/types"
import useAuth from "@/customhooks/useauth"
import Form from "@/components/Form"
import Box from "@/components/Box"
import Text from '@/components/Text'
import Button from "@/components/Button"

// Common input container styling for consistency
const inputcontainer = "w-full px-2 flex items-center bg-white border-[1px] border-black"

function Register() {
  // Custom hook to manage form input values
  const { values, handlechange } = useInput<userinput>({
    email: "",
    password: ""
  })

  // Custom hook to handle registration submission logic
  const { registersubmit } = useAuth(values.email, values.password)

  return (
    // Form wrapper with styling and form submit handler
    <Form
      classname='w-full px-2 pt-[115px] min-h-screen flex items-center place-content-center'
      onsubmit={registersubmit}
    >
      {/* Form box with shadow and responsive layout */}
      <Box className='form w-full pb-8 md:pb-0 md:w-[60%] shadow-md h-auto md:h-[400px] flex flex-col md:flex-row gap-5 bg-white shadow-gray-300'>
        
        {/* Left side greeting section with link to login */}
        <Box className='w-full md:w-[50%] py-4 rounded-b-[20%] md:rounded-b-[0%] text-white flex flex-col gap-5 bg-blue-600 place-content-center place-items-center h-full'>
          <Text className='font-bold text-4xl'>Hello, welcome</Text>
          <Text className='text-sm'>Already have an account? Login</Text>
          <Link href="/login" className='border-[1px] px-8 py-1 border-white'>Login</Link>
        </Box>

        {/* Right side form inputs */}
        <Box className='w-full md:w-[50%] h-full px-2 flex flex-col items-center place-content-center'>
          <Text className='font-bold text-3xl mb-5'>Register</Text>

          {/* Email input field */}
          <Box className={inputcontainer}>
            <MdEmail />
            <input
              required
              name="email"
              onChange={handlechange}
              value={values.email}
              className='outline-none w-full h-12 pl-2'
              placeholder='Enter email'
              type="email"
            />
          </Box>

          {/* Password input field */}
          <Box className={`${inputcontainer} mt-5`}>
            <FaLock className="text-sm" />
            <input
              required
              name="password"
              value={values.password}
              onChange={handlechange}
              className='outline-none w-full h-12 bg-white pl-2'
              placeholder='Enter password'
              type="password"
            />
          </Box>

          {/* Submit button */}
          <Button
            type="submit"
            className='bg-blue-600 w-[130px] py-1 text-white mt-4 font-bold'
          >
            Register
          </Button>
        </Box>
      </Box>
    </Form>
  )
}

export default Register
