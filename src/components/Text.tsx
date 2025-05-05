"use client"  // Indicates that this component is intended to run on the client side in a Next.js application.

import React from 'react';  // Importing React to define the component and JSX syntax.
import { memo } from 'react';  // Importing memo from React to optimize rendering by preventing unnecessary re-renders.

function Text({ children, className }: { children?: React.ReactNode; className?: string }) { 
  
  return <p className={className}> {children} </p>;  // Returns a <p> tag with the provided className and children.
}

export default memo(Text);  // Exports the Text component for use in other parts of the application.
