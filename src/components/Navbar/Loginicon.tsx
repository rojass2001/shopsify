"use client"
import Link from 'next/link'  // Importing Next.js Link component for client-side navigation
import { CiLogin } from 'react-icons/ci'  // Importing the login icon from 'react-icons'
import Box from '../Box'  // Reusable Box component for layout
import Text from '../Text'  // Reusable Text component for rendering text
import Button from '../Button'  // Reusable Button component for clickable actions

function Loginicon() {
  return (
    <>
      {/* Wrapping the login link inside Next.js Link component for client-side navigation */}
      <Link href="/login">
        {/* Box component for layout, aligning text and button horizontally */}
        <Box className='flex'>
          {/* Text component to display "Login" label */}
          <Text className=''>Login</Text>

          {/* Button component with a login icon */}
          <Button className='h-6 w-6 mr-1'>
            {/* Icon inside the button, styled with text-white and 2x font size */}
            <CiLogin className='text-2xl text-white ' />
          </Button>
        </Box>
      </Link>      
    </>
  )
}

export default Loginicon
