"use client";

import {
    FormEvent,
    FormHTMLAttributes,
    HTMLAttributes,
    forwardRef,
} from "react";
import { tv } from "tailwind-variants";

export interface FormProps
    extends Omit<FormHTMLAttributes<HTMLFormElement>, "title"> {
    title?: string;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ({ title, onSubmit, ...props }, ref) => {
        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            onSubmit?.(event);
        };

        return (
            <>
                {title && (
                    <h4 className="text-xl font-semibold pb-4 border-b border-b-gray-solid/20">
                        {title}
                    </h4>
                )}

                <form ref={ref} onSubmit={handleSubmit} {...props} />
            </>
        );
    }
);

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
