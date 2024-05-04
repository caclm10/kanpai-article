"use client";

import { useArticleDispatch } from "@/contexts/article-context";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

interface DeleteButton {
    id: string | number;
}

const DeleteButton: React.FC<DeleteButton> = ({ id }) => {
    const router = useRouter();
    const dispatch = useArticleDispatch();

    const handleClick = () => {
        dispatch!({
            type: "setDeleteId",
            payload: {
                id,
                afterDelete: () => {
                    router.replace("/");
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
