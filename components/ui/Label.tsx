import { forwardRef, type LabelHTMLAttributes } from "react";
import { tv } from "tailwind-variants";

export const labelVariants = tv({
    base: "font-semibold text-sm mb-1.5",
});

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => {
        return (
            <label
                ref={ref}
                className={labelVariants({ className })}
                {...props}
            />
        );
    }
);
