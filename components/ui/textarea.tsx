import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-80 md:w-full  border border-black bg-background px-3 py-2 text-md font-light tracking-wide text-black  ring-offset-background placeholder:text-gray-500 placeholder:font-light placeholder:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#344A80] focus-visible:ring-offset-2 focus-visible:border-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
