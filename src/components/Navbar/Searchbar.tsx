"use client"
import useSearch from "@/customhooks/useSearch";  // Importing custom hook for managing search state and functionality
import Box from "../Box";  // Importing Box component for layout and styling
import Form from "../Form";  // Importing Form component for form layout
import Button from "../Button";  // Importing Button component for form submission

function Mobilesearchbar() {
  const { search, submit, handlechange } = useSearch();  // Destructuring search, submit, and handlechange from the custom hook
  
  return (
    // Box wrapper for the search bar
    <Box className=" bg-white w-full">
      {/* Form component with a submit handler */}
      <Form classname="flex bg-white w-full" onsubmit={submit}>
        {/* Input field for product search, updates the search value on change */}
        <input 
          className='w-full pl-1 outline-none h-8 text-black' 
          value={search}  // Binding the search state to the input value
          onChange={handlechange}  // Triggering handlechange to update the search state
          placeholder='search product here'  // Placeholder text in the input field
          type="text"  // Defining input type as text
        />
        
        {/* Submit button for the form */}
        <Button type="submit" className='bg-blue-700 p-1 text-white '>search</Button>
      </Form>
    </Box>
  );
}

export default Mobilesearchbar;
