"use client"  // Ensures the hook runs on the client-side in a Next.js app.

import { searchfilter } from '@/redux/Productslice';  // Importing the Redux action to filter products based on search.
import { useRouter } from 'next/navigation';  // Importing Next.js `useRouter` hook for navigation.
import React, { useState } from 'react';  // Importing necessary React hooks.
import { useDispatch } from 'react-redux';  // Importing `useDispatch` to dispatch Redux actions.

function useSearch() {
  // State to hold the search query value.
  const [search, setsearch] = useState<string>("");

  const dispatch = useDispatch();  // Dispatch function to dispatch actions to the Redux store.
  const router = useRouter();  // Router function to programmatically navigate to a new route.

  // Handle input change for the search query.
  // This updates the `search` state whenever the user types in the search field.
  const handlechange = (e: React.ChangeEvent) => {
    setsearch((e.target as HTMLInputElement).value);  // Update search state with the input value.
    console.log(search);  // Logs the current search value for debugging.
  };

  // Handle form submission with the search value.
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();  // Prevent the default form submission behavior.
    dispatch(searchfilter(search));  // Dispatch search filter action with the current search value.
    router.push('/filter');  // Navigate to the `/filter` route to show filtered products.
  };

  // Return the necessary values and functions for the search form: submit handler, change handler, and the search value.
  return { submit, handlechange, search };
}

export default useSearch;
