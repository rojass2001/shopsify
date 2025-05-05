"use client"

import React from 'react';  // Importing React for JSX syntax and component creation
import { memo } from 'react';  // Importing memo from React to prevent unnecessary re-renders

// Type definition for the props of the Box component
type box = { 
  className?: string;  // Optional className to apply custom styles to the Box component
  children?: React.ReactNode;  // Optional children to allow passing any JSX elements inside the Box component
  onClick?: () => void;// Optional onClick function for handling click events on the Box component
  style?: React.CSSProperties; // Optional inline styles for the Box component
};

function Box({ className, children, onClick , style}: box) {
  return (
    // Main div element that renders the Box component with optional onClick functionality and custom className
    <div onClick={onClick} className={className} style={style} >
      {children}  {/* Rendering the children passed into the Box component */}
    </div>
  );
}

// Wrapping the Box component with React.memo to optimize rendering, preventing re-renders unless props change
export default memo(Box);
