"use client";

import { tv } from "tailwind-variants";
import { createPortal } from "react-dom";
import React, { SVGProps, useEffect, useState } from "react";

export const alertDialogVariant = tv({
    slots: {
        root: ["fixed inset-0 flex justify-center items-center z-10"],
        overlay: ["absolute inset-0 bg-black/50"],
        content: ["relative w-full max-w-[425px]"],
        paper: ["bg-background p-10 rounded-xl flex flex-col gap-5"],
    },
});

export interface AlertDialogProps {
    children?: React.ReactNode;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ children }) => {
    const { root, overlay, content, paper } = alertDialogVariant({});

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        setMounted(true);

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    if (!mounted) {
        return null;
    }

    return createPortal(
        <div className={root()}>
            <div className={overlay()}></div>

            <div className={content()}>
                <div className={paper()}>{children}</div>
            </div>
        </div>,
        document?.body
    );
};

export const alertDialogHeaderVariants = tv({
    slots: {
        title: ["font-semibold text-xl"],
    },
});

export interface AlertDialogHeaderProps {
    icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title?: string;
    classNames?: {
        title?: string;
    };
}

export const AlertDialogHeader: React.FC<AlertDialogHeaderProps> = ({
    icon,
    title,
    classNames,
}) => {
    const { title: titleVariants } = alertDialogHeaderVariants();

    const Icon = icon;
    return (
        <header>
            <div className="flex items-center gap-6">
                {Icon && <Icon />}
                <h4 className={titleVariants({ className: classNames?.title })}>
                    {title}
                </h4>
            </div>
        </header>
    );
};

export const alertDialogActionsVariants = tv({
    base: ["flex justify-end items-center gap-3"],
});

export interface AlertDialogActionsProps {
    className?: string;
    children?: React.ReactNode;
}

export const AlertDialogActions: React.FC<AlertDialogActionsProps> = ({
    className,
    children,
}) => {
    return (
        <div className={alertDialogActionsVariants({ className })}>
            {children}
        </div>
    );
};
