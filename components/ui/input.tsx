import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-16 w-80 md:w-full  border border-black bg-background px-3 py-2 text-md font-light tracking-wide text-black ring-offset-background focus:border-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 placeholder:font-light placeholder:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#344A80] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
