"use client"//use client Component

import { FaLock } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { userinput } from "@/commontypes/types"
import useAuth from "@/customhooks/useauth"
import useInput from "@/customhooks/useInput"
import Form from "@/components/Form"
import Box from "@/components/Box"
import Text from "@/components/Text"
import Button from "@/components/Button"

// Shared styling for input containers
const inputcontainer = "w-full px-2 flex items-center bg-white border-[1px] border-black"

function Login() {
  // Managing form state using custom hook
  const { values, handlechange } = useInput<userinput>({
    email: "",
    password: ""
  })

  // Login submission logic from custom authentication hook
  const { loginsubmit } = useAuth(values.email, values.password)

  return (
    // Wrapping the entire UI inside a reusable Form component with submit handler
    <Form
      classname="w-full px-2 pt-[115px] min-h-screen flex items-center place-content-center"
      onsubmit={loginsubmit}
    >
      {/* Login form container with responsive layout */}
      <Box className="form w-full pb-8 md:pb-0 md:w-[60%] shadow-md h-auto md:h-[400px] flex flex-col md:flex-row gap-5 bg-white shadow-gray-300">
        
        {/* Left panel with welcome text and registration link */}
        <div className="w-full md:w-[50%] py-4 rounded-b-[20%] md:rounded-b-[0%] text-white flex flex-col gap-5 bg-blue-600 place-content-center place-items-center h-full">
          <Text className="font-bold text-4xl">Hello, welcome</Text>
          <Text className="text-sm">Dont have an account? Register</Text>
          <Link href="/register" className="border-[1px] px-8 py-1 border-white">
            Register
          </Link>
        </div>

        {/* Right panel: login form inputs and submit button */}
        <Box className="w-full md:w-[50%] h-full px-2 flex flex-col items-center place-content-center">
          <Text className="font-bold text-3xl mb-5">Login</Text>

          {/* Email input field with icon */}
          <Box className={inputcontainer}>
            <MdEmail />
            <input
              required
              name="email"
              onChange={handlechange}
              value={values.email}
              className="outline-none w-full h-12 pl-2"
              placeholder="enter email"
              type="email"
            />
          </Box>

          {/* Password input field with icon */}
          <Box className={`${inputcontainer} mt-5 mb-2`}>
            <FaLock className="text-sm" />
            <input
              required
              name="password"
              onChange={handlechange}
              value={values.password}
              className="outline-none w-full h-12 bg-white pl-2"
              placeholder="enter password"
              type="password"
            />
          </Box>

          {/* Link to password reset page */}
          <Link href="/forgotpassword" className="text-[15px] underline mt-3">
            forgot password?
          </Link>

          {/* Submit login button */}
          <Button type="submit" className="bg-blue-600 w-[130px] py-1 text-white mt-4 font-bold">
            Login
          </Button>
        </Box>
      </Box>
    </Form>
  )
}

export default Login
