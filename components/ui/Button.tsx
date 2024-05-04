import { ButtonHTMLAttributes, forwardRef } from "react";
import { type VariantProps, tv } from "tailwind-variants";

export const buttonVariants = tv({
    base: [
        "inline-flex items-center justify-center",
        "whitespace-nowrap",
        "rounded-md",
        "text-sm font-medium",
        "ring-offset-background",
        "transition-colors",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
    ],
    variants: {
        variant: {
            primary: "bg-primary text-primary-foreground hover:bg-primary/90",
            orange: "bg-orange text-orange-foreground hover:bg-orange/90",
            red: "bg-red text-red-foreground hover:bg-red/90",
            "ghost-gray": "text-gray-solid hover:bg-gray/30",
        },
        size: {
            sm: "h-9 rounded-md px-3",
            md: "h-10 min-w-24 px-4 py-2",
            lg: "h-11 rounded-md px-8",
            "icon-sm": "h-8 w-8",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
    },
});

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants({ variant, size, className })}
                {...props}
            />
        );
    }
);
