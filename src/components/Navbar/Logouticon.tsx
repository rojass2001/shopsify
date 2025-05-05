"use client"
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";  // Importing the vertical dots icon for a settings-like button
import Button from "../Button";  // Importing the reusable Button component for clickable actions
import Box from "../Box";  // Importing Box component for layout and styling
import { IoIosSettings } from "react-icons/io";  // Importing the settings icon for the logout button
import useAuthentication from '../../customhooks/useauth';  // Importing custom hook for authentication management

// Logouticon component that displays a vertical dots button and a logout option on hover
function Logouticon() {
  // Destructuring the logout function from the custom useAuthentication hook
  const { logout } = useAuthentication();

  return (
    // Box container with 'group' class for hover interactions and 'relative' for positioning
    <Box className='group relative hidden md:block'>
      {/* Button with a vertical dots icon, shown by default */}
      <Button className='h-6 w-6 '>
        <PiDotsThreeOutlineVerticalFill className='text-2xl text-white ' />  {/* Icon inside the button */}
      </Button>
      
      {/* Button for logging out, hidden by default, shown on hover of the dots icon */}
      <Button
        onClick={logout}  // The logout function is called when the button is clicked
        className="hidden group-hover:flex p-2 rounded-full items-center place-content-center absolute top-[30px] bg-blue-700 right-[-15px]"
      >
        <IoIosSettings />  {/* Settings icon for visual context */}
        Logout  {/* Text next to the icon */}
      </Button>
    </Box>
  );
}

export default Logouticon;
