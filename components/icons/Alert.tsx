import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import IconCheckCircle from "../icons/IconCheckCircle";

export const alertVariants = tv({
    slots: {
        root: [
            "relative w-full rounded-lg border p-4",
            "[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
        ],
        title: ["mb-1 font-medium leading-none tracking-tight"],
        description: ["text-sm [&_p]:leading-relaxed"],
    },

    variants: {
        variant: {
            primary: {
                root: [
                    "border-primary/50 text-primary dark:border-primary [&>svg]:text-primary",
                ],
            },
            red: {
                root: [
                    "border-red/50 text-red dark:border-red [&>svg]:text-red",
                ],
            },
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});

export interface AlertProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
        VariantProps<typeof alertVariants> {
    title?: string;
    description?: string;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ title, description, className, variant, ...props }, ref) => {
        const {
            root,
            title: titleVariants,
            description: descriptionVariants,
        } = alertVariants({ variant });

        const isPrimary = variant === "primary";

        return (
            <div ref={ref} role="alert" className={root()} {...props}>
                {isPrimary && <IconCheckCircle className="size-4" />}
                <h5 className={titleVariants()}>{title}</h5>
                <div className={descriptionVariants()}>{description}</div>
            </div>
        );
    }
);
