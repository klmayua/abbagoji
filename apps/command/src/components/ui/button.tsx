"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/* Digital Majlis Button Styles - GOJI2027
 * - Primary: Linear gradient (green) with silk-finish depth
 * - Secondary: Gold background for high-priority actions
 * - Ghost: No background, primary text for low-emphasis
 * - No borders (No-Line rule) - use tonal shifts instead
 * - Rounded-md (0.375rem) for professional look
 */

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border-0 text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-surface active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Primary: Gradient from primary to primary-container
         * Silk-finish depth at 135° angle */
        default:
          "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-sm hover:shadow-md hover:brightness-110",

        /* Secondary: Gold background for high-priority actions
         * "Gold Standard" for important CTAs */
        secondary:
          "bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed/90 shadow-sm",

        /* Outline: Ghost border with transparent background */
        outline:
          "bg-transparent text-primary border border-outline-variant/30 hover:bg-surface-container-low hover:border-outline-variant/50",

        /* Ghost: No background, just text
         * For low-emphasis navigation */
        ghost:
          "bg-transparent text-on-surface hover:bg-surface-container-low hover:text-primary",

        /* Destructive: Soft error styling */
        destructive:
          "bg-error-container text-error hover:bg-error-container/80",

        /* Link: Text only with underline */
        link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none",

        /* Gold: Direct gold gradient for premium CTAs */
        gold: "bg-gradient-to-br from-secondary to-secondary-fixed text-on-secondary hover:brightness-105 shadow-sm",
      },
      size: {
        default: "h-10 gap-2 px-4 py-2",
        xs: "h-7 gap-1.5 px-2 text-xs rounded-sm",
        sm: "h-8 gap-1.5 px-3 text-xs",
        lg: "h-12 gap-2 px-6 text-base rounded-lg",
        icon: "h-10 w-10 p-2",
        "icon-sm": "h-8 w-8 p-1.5",
        "icon-lg": "h-12 w-12 p-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
