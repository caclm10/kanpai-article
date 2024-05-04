"use client";

import { useArticleDispatch } from "@/contexts/article-context";
import { Button } from "./ui/Button";

interface DeleteButton {
    id: string | number;
}

const DeleteButton: React.FC<DeleteButton> = ({ id }) => {
    const dispatch = useArticleDispatch();

    const handleClick = () => {
        dispatch!({ type: "setDeleteId", payload: id });
    };
    return (
        <Button type="button" variant="red" onClick={handleClick}>
            Delete
        </Button>
    );
};

export default DeleteButton;
