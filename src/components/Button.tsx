import React from 'react'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type ButtonProps = {
    // ? means optional
    small? : boolean
    gray? : boolean
    className? : string
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
// to make sure this has same property as a button in react;

export const Button = ({ small = false, gray=false , className = "", ...props}: ButtonProps) => {
  const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold"
  const colorClasses = gray 
        ? "bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300" 
        : "bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400";

  return (
    <button className={`rounded-full transition-colors duration-200 disabled:cursor-not-allowed  disabled:opacity-50 text-white ${sizeClasses} ${colorClasses} ${className}`} {...props}>Button</button>
  )
}
