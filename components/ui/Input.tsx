import { forwardRef } from "react";
import { tv } from "tailwind-variants";

export const inputVariants = tv({
    base: [
        "flex w-full",
        "rounded-md",
        "bg-[#f0f0f0]",
        "px-3 py-2.5",
        "text-sm",
        "ring-offset-background",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none",
        "focus-visible:ring-1 focus-visible:ring-primary/50 focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
    ],
});

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={inputVariants({ className })}
                ref={ref}
                {...props}
            />
        );
    }
);

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={inputVariants({ className })}
                ref={ref}
                {...props}
            />
        );
    }
);
