"use client";

import { useArticleDispatch } from "@/contexts/article-context";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";
import { useNotificationDispatch } from "@/contexts/notification-context";

interface DeleteButton {
    id: string | number;
}

const DeleteButton: React.FC<DeleteButton> = ({ id }) => {
    const router = useRouter();
    const dispatch = useArticleDispatch();
    const dispatchNotif = useNotificationDispatch();

    const handleClick = () => {
        dispatch!({
            type: "setDeleteId",
            payload: {
                id,
                afterDelete: () => {
                    router.replace("/");

                    setTimeout(() => {
                        dispatchNotif!({
                            type: "set",
                            payload: {
                                title: "Success!",
                                description: "Article deleted successfully.",
                                variant: "primary",
                            },
                        });
                    }, 100);
                },
            },
        });
    };
    return (
        <Button type="button" variant="red" onClick={handleClick}>
            Delete
        </Button>
    );
};

export default DeleteButton;
