import React from "react";
import { Button } from "./ui/Button";
import { useFormStatus } from "react-dom";
import IconLoader from "./icons/IconLoader";

const SaveButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending}>
            {pending && <IconLoader className="size-4 animate-spin" />}
            Save
        </Button>
    );
};

export default SaveButton;
