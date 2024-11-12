import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-12 rounded-md border border-stone-200/20 bg-primary focus:border-accent font-light px-4 py-5 text-base text-stone-200 placeholder:text-stone-200/80 placeholder:italic outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
