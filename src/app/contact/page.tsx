"use client"

import Box from '@/components/Box'
import Button from '@/components/Button'
import Form from '@/components/Form'
import useAuth from '@/customhooks/useauth'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Contact() {
  const { contactsubmit } = useAuth()

  return (
    <Box className="w-full px-1 py-5 pt-[150px] md:pt-[100px] md:px-5">
      {/* Contact Page Title */}
      <Box className="h-6 bg-blue-700 w-full text-center text-white font-bold text-3xl">
        Contact
      </Box>

      {/* Contact Form Wrapper */}
      <Form classname="bg-blue-700 pb-3" onsubmit={contactsubmit}>
        <Box className="bg-blue-700 justify-center min-h-[370px] place-content-center place-items-center flex gap-10 px-5 py-10 text-blue-600 flex-col md:flex-row lg:px-14">
          
          {/* Contact Info Section */}
          <Box className="w-full pt-6 space-y-14 lg:w-[30%]">
            <Box className="h-10 w-full flex items-center bg-white p-2 gap-2">
              <FaPhone />
              +9656213935
            </Box>
            <Box className="h-10 w-full bg-white flex items-center p-2 gap-2">
              <MdEmail className="text-xl" />
              Shopy@gmail.com
            </Box>
            <Box className="h-10 flex items-center bg-white p-2 gap-2">
              <FaLocationDot />
              Ernakulam Kadavanthra
            </Box>
          </Box>

          {/* Divider Line (Visible on medium and up) */}
          <Box className="hidden h-[200px] w-2 bg-white md:block" />

          {/* Contact Form Fields */}
          <Box className="w-full md:pt-6 text-white font-bold space-y-7 lg:w-[30%]">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              required
              type="text"
              className="h-10 w-full text-blue-800 bg-white px-2"
              placeholder="Enter your name"
            />

            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              required
              type="email"
              className="h-10 text-blue-700 w-full bg-white px-2"
              placeholder="Enter your email"
            />

            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              className="h-14 w-full text-blue-800 bg-white px-2 py-1"
              placeholder="Write your message"
            />
          </Box>
        </Box>

        {/* Submit Button */}
        <Box className="w-full text-center">
          <Button
            type="submit"
            className="px-4 rounded-2xl py-2 text-white border-2 border-white"
          >
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default Contact
