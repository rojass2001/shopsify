
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';  // Importing social media icons from React Icons
import { FaFacebook } from 'react-icons/fa6';  // Importing Facebook icon from React Icons
import Box from './Box';  // Importing Box component for layout
import Text from './Text';  // Importing Text component for displaying text

// Footer component renders the footer of the website
function Footer() {
  return (
    // Footer container with blue background and padding
    <footer className='w-full bg-blue-600 mt-4 md:px-1 lg:px-[60px] py-2'>
      {/* Grid layout for the footer's content */}
      <Box className='w-full py-4 pl-[2px] grid grid-cols-2 md:grid-cols-4 gap-8'>
        
        {/* Company section with links */}
        <Box className='space-y-2 text-white font-bold'>
          <Text className='text-2xl'>Company</Text>  {/* Section title */}
          <Text>About us</Text>  {/* Link to about us page */}
          <Text>Our service</Text>  {/* Link to services page */}
          <Text>Privacy policy</Text>  {/* Link to privacy policy page */}
        </Box>
        
        {/* Help section with customer support links */}
        <Box className='text-white space-y-2 font-bold'>
          <Text className='text-2xl'>Get Help</Text>  {/* Section title */}
          <Text>FAQ</Text>  {/* Link to FAQ page */}
          <Text>Shipping</Text>  {/* Link to shipping details page */}
          <Text>Returns</Text>  {/* Link to return policy page */}
          <Text>Payment Option</Text>  {/* Link to payment options page */}
        </Box>
        
        {/* Online shopping categories section */}
        <Box className='space-y-2 text-white font-bold'>
          <Text className='text-2xl'>OnlineShopping</Text>  {/* Section title */}
          <Text>Women</Text>  {/* Link to women's products */}
          <Text>Men</Text>  {/* Link to men's products */}
          <Text>Jewelery</Text>  {/* Link to jewelry section */}
          <Text>Electronics</Text>  {/* Link to electronics section */}
        </Box>
        
        {/* Social media links section */}
        <Box className='space-y-2 text-white font-bold'>
          <Text className='text-2xl'>Follow us</Text>  {/* Section title */}
          
          {/* Social media icons */}
          <Box className='flex text-3xl items-center gap-3'>
            <FaInstagram />  {/* Instagram icon */}
            <FaTwitter />  {/* Twitter icon */}
            <FaFacebook />  {/* Facebook icon */}
            <FaYoutube />  {/* YouTube icon */}
          </Box>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;  // Exporting Footer component for use in other parts of the app
