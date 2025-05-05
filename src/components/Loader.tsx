
import { PulseLoader } from 'react-spinners';  // Importing the PulseLoader component from the react-spinners package for a loading spinner.
import Box from './Box';  // Importing the custom Box component for layout purposes.

function Loader() {  // The Loader component represents a loading indicator typically displayed while content is being fetched or loaded.
  return (
    <Box className='w-full h-screen bg-red flex items-center place-content-center'>
      {/* Box container covering the entire screen, with background color 'bg-red' and flexbox properties for centering */}
      <PulseLoader color="black" size={16} />  {/* The PulseLoader component with specified color and size */}
    </Box>
  )
}

export default Loader;  // Exporting the Loader component for use in other parts of the application.
