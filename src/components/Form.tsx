"use client"  // Indicates that this is a client-side component in a Next.js application

import { form } from '@/commontypes/types';  // Importing the 'form' type from common types for prop validation
import React, { memo } from 'react';  // Importing React and memo for performance optimization

// The 'Form' component renders a form element
function Form({ classname, children, onsubmit }: form) {
  return (
    // The form element with the provided className and autoComplete disabled
    <form className={classname} autoComplete='off' onSubmit={onsubmit}>
      {children}  {/* Rendering children elements (form fields or other components passed as children) */}
    </form>         
  );
}

export default memo(Form);  // Using memo to prevent unnecessary re-renders and exporting the Form component
