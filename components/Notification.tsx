"use client";

import {
    useNotification,
    useNotificationDispatch,
} from "@/contexts/notification-context";
import { Alert } from "./ui/Alert";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
const Notification = () => {
    const pathname = usePathname();
    const { isShow, ...props } = useNotification();
    const dispatch = useNotificationDispatch();

    useEffect(() => {
        dispatch!({ type: "clear" });
    }, [pathname]);

    if (!isShow) {
        return null;
    }

    return <Alert {...props} />;
};

export default Notification;
