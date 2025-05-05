"use client"  // This directive ensures that the component is executed on the client side in a Next.js environment.

import { useCallback, useState } from 'react';  // Importing necessary hooks from React.

export default function useInput<T>(initialValues: T) {
  // Initialize the state with the provided initial values.
  const [values, setValues] = useState<T>(initialValues);

  // Define the shape of the event object in the `ChangeEvent` type.
  type ChangeEvent = {
    target: {
      name: string;  // The name of the input field.
      value: string;  // The value entered in the input field.
    };
  };

  // Define the `handlechange` function to update the form state.
  // It uses `useCallback` to memoize the function and avoid unnecessary re-renders.
  const handlechange = useCallback((e: ChangeEvent) => {
    const { name, value } = e.target;
    
    // Update the state with the new value, keeping the previous state intact.
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }, []);  // The empty dependency array ensures the function is not recreated on each render.

  // Return the `values` (current form state) and the `handlechange` function to be used in form inputs.
  return { values, handlechange };
}
