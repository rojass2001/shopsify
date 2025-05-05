"use client"
import React, { memo } from 'react';  // Importing React to handle JSX syntax and component creation


type ButtonProps = {// Defining the type for the Button component props
  onClick?: () => Promise<void> | void;  // Optional onClick function that can return a promise or void
  children?: React.ReactNode;  // Optional children prop to render any nested elements inside the button
  className?: string;  // Optional className for custom styling
  type?: "submit" | "reset" | "button"; // Optional type prop to specify the button's type attribute

}

function Button({ onClick, children, className, type }: ButtonProps) {
  
    return (
      // Rendering the button element with optional props for type, className, and onClick handler
      <button 
        type={type}  // Setting the button's type attribute (e.g., submit, reset, button)
        className={className}  // Applying any custom styles passed through className
        onClick={() => onClick && onClick()}  // Triggering the onClick function if it is provided
      >
        {children}  {/* Rendering any children (content) passed inside the Button */}
      </button>
    );
  }

export default memo(Button);  // Exporting the Button component so it can be used elsewhere
