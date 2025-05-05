"use client"  // Ensures this hook runs on the client side in a Next.js application.

import { useEffect, useState } from 'react';  // Importing React hooks: useEffect and useState.

const useKeyboardStatus = () => {
  // useState hook to track whether the keyboard is open or not.
  const [isKeyboardOpen, setIsKeyboardOpen] = useState<boolean>(false);

  useEffect(() => {
    // Event handler for focus-in event: triggers when an input field or textarea is focused.
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;  // Get the target element of the focus event.
      // Check if the focused element is an input, textarea, or contentEditable field.
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true')) {
        setIsKeyboardOpen(true);  // Set state to true indicating the keyboard is likely open.
      }
    };

    // Event handler for focus-out event: triggers when an input field or textarea loses focus.
    const handleFocusOut = () => {
      setIsKeyboardOpen(false);  // Set state to false indicating the keyboard is likely closed.
    };

    // Adding event listeners for 'focusin' and 'focusout' events.
    window.addEventListener('focusin', handleFocusIn);  // Focus-in event when input/textarea gains focus.
    window.addEventListener('focusout', handleFocusOut);  // Focus-out event when input/textarea loses focus.

    // Cleanup function to remove event listeners when the component unmounts or the effect is cleaned up.
    return () => {
      window.removeEventListener('focusin', handleFocusIn);  // Clean up focus-in event listener.
      window.removeEventListener('focusout', handleFocusOut);  // Clean up focus-out event listener.
    };
  }, []);  // Empty dependency array to ensure this effect runs only once when the component mounts.

  // Return the current keyboard status (open or closed).
  return { isKeyboardOpen };
};

export default useKeyboardStatus;
