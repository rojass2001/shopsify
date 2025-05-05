"use client" // This indicates that this component is intended to run on the client side in a Next.js application.

import { userinput } from '@/commontypes/types'
import useAuth from '@/customhooks/useauth'
import useInput from '@/customhooks/useInput'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import Form from '@/components/Form'
import Box from '@/components/Box'
import Text from '@/components/Text'
import Button from '@/components/Button'

// Utility class for consistent input styling
const inputcontainer = "w-full px-2 flex items-center bg-white border-[1px] border-black"

function Forgotpassword() {
  // Using a custom hook to manage input state
  const { values, handlechange } = useInput<Partial<userinput>>({
    email: "",
  })

  // Destructuring the password reset function from a custom authentication hook
  const { resetemail } = useAuth(values.email)

  return (
    // Form component to wrap the entire UI and handle form submission
    <Form
      classname="w-full px-2 pt-[115px] min-h-screen flex items-center place-content-center"
      onsubmit={resetemail}
    >
      {/* Main container for the form card with shadow and responsive layout */}
      <Box className="form w-full pb-8 md:pb-0 md:w-[60%] shadow-md h-auto md:h-[400px] flex flex-col md:flex-row gap-5 bg-white shadow-gray-300">
        
        {/* Left section: Intro text and register link */}
        <Box className="w-full md:w-[50%] py-4 rounded-b-[20%] md:rounded-b-[0%] text-white flex flex-col gap-5 bg-blue-600 place-content-center place-items-center h-full">
          <Text className="font-bold text-4xl">Hello, welcome</Text>
          <Text className="text-sm">Dont have an account? Register</Text>
          <Link href="/register" className="border-[1px] px-8 py-1 border-white">Register</Link>
        </Box>

        {/* Right section: Email input and submit button */}
        <Box className="w-full md:w-[50%] h-full px-2 flex flex-col items-center place-content-center">
          <Text className="font-bold text-3xl mb-5">Forgot Password</Text>

          {/* Email input field with icon */}
          <Box className={inputcontainer}>
            <MdEmail />
            <input
              name="email"
              onChange={handlechange}
              value={values.email || ""}
              className="outline-none w-full h-12 pl-2"
              placeholder="enter email"
              type="email"
              required
            />
          </Box>

          {/* Submit button */}
          <Button type="submit" className="bg-blue-600 w-[130px] py-1 text-white mt-4 font-bold">
            Send link
          </Button>
        </Box>
      </Box>
    </Form>
  )
}

export default Forgotpassword
