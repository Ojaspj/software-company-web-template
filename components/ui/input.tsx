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
          "flex h-16 w-80 md:w-full rounded-lg border  border-black bg-background px-4 py-2 text-md font-light tracking-wide text-black   file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 placeholder:font-light placeholder:tracking-wide  focus-visible:border-[#344A80] disabled:cursor-not-allowed disabled:opacity-50",
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
