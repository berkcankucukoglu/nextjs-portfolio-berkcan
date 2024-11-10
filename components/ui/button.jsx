import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-hover",
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
        outline_transparent: "border border-stone-400 bg-transparent text-white hover:border-accent hover:text-accent-hover hover:transition-all duration-200",
        outline_stone: "border border-stone-400 bg-transparent text-white hover:border-accent hover:text-accent-hover hover:bg-stone-800",
      },
      size: {
        default: "h-10 rounded-full px-6",
        sm: "h-9 rounded-md px-6",
        lg: "h-11 rounded-md px-8 text-sm uppercase tracking-[2px]",
        icon: "h-10 w-10",
        back_to_top: "h-full w-full rounded-full p-3"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
