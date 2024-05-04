"use client";

import { useArticle, useArticleDispatch } from "@/contexts/article-context";
import IconDelete2 from "./icons/IconDelete2";
import {
    AlertDialog,
    AlertDialogActions,
    AlertDialogHeader,
} from "./ui/AlertDialog";
import { Button } from "./ui/Button";

const DeleteAlert = () => {
    const { idToDelete } = useArticle();
    const dispatch = useArticleDispatch();

    const handleClose = () => {
        dispatch!({ type: "removeDeleteId" });
    };

    if (!idToDelete) return null;

    return (
        <AlertDialog onClose={handleClose}>
            <AlertDialogHeader title="Delete Article" icon={IconDelete2} />

            <div>
                <p>
                    Are you sure you want to delete it? You can't undo this
                    action.
                </p>
            </div>

            <AlertDialogActions>
                <Button
                    type="button"
                    variant="ghost-gray"
                    onClick={handleClose}
                >
                    Cancel
                </Button>
                <Button variant="red">Delete</Button>
            </AlertDialogActions>
        </AlertDialog>
    );
};

export default DeleteAlert;
