import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[200px] w-[325px] md:w-full rounded-md border border-black bg-background px-4 py-2 text-md font-light ring-offset-background placeholder:text-muted-foreground placeholder:font-light focus-visible:outline-none focus-visible:border-2 focus-visible:border-border focus-visible:border-[#344A80] disabled:cursor-not-allowed disabled:opacity-50",
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
