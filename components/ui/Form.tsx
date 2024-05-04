"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export interface FormTitleProps {
    text: string;
}

export const FormTitle: React.FC<FormTitleProps> = ({ text }) => {
    return (
        <h4 className="text-xl font-semibold pb-4 border-b border-b-gray-solid/20">
            {text}
        </h4>
    );
};

export const formStackVariants = tv({
    base: "flex flex-col gap-y-4",
});

export const FormStack = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={formStackVariants({ className })}
            {...props}
        />
    );
});

export const formActionsVariants = tv({
    base: "mt-5 flex items-center gap-x-3",
});

export const FormActions = forwardRef<
    HTMLDivElement,
    HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={formActionsVariants({ className })}
            {...props}
        />
    );
});
