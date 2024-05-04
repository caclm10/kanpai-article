"use client";

import { FormActions, FormStack, FormTitle } from "./ui/Form";
import { Label } from "./ui/Label";
import { ErrorMessage, Input, Textarea } from "./ui/Input";
import SaveButton from "./SaveButton";
import { useNotificationDispatch } from "@/contexts/notification-context";
import { useRef, useState } from "react";
import DeleteButton from "./DeleteButton";

interface Props {
    formTitle: string;
    id?: number;
    title?: string;
    content?: string;
}

interface FormErrors {
    title?: string[];
    content?: string[];
}

const ArticleForm: React.FC<Props> = ({ formTitle, id, title, content }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatchNotif = useNotificationDispatch();
    const [errors, setErrors] = useState<FormErrors>({});

    const action = async (formData: FormData) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/articles${id ? `/${id}` : ""}`,
            {
                method: id ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData.entries())),
            }
        );

        const body = await res.json();

        if (res.ok) {
            dispatchNotif!({
                type: "set",
                payload: {
                    title: "Success!",
                    description: id
                        ? "Article updated successfully."
                        : "New article created successfully.",
                    variant: "primary",
                },
            });

            (document.activeElement as any).blur();

            if (!id) {
                formRef.current?.reset();
            }
        } else {
            if (res.status === 422) {
                setErrors(body.meta.message);
            } else {
                dispatchNotif!({
                    type: "set",
                    payload: {
                        title: "Error!",
                        description: body.meta.message,
                        variant: "red",
                    },
                });
            }
        }
    };

    return (
        <>
            <FormTitle text={formTitle} />

            <form action={action} ref={formRef}>
                <FormStack>
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            name="title"
                            defaultValue={title}
                            className="max-w-[493px]"
                        />
                        {errors.title && (
                            <ErrorMessage>{errors.title[0]}</ErrorMessage>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="content">Content</Label>
                        <Textarea
                            name="content"
                            defaultValue={content}
                            rows={3}
                        />
                        {errors.content && (
                            <ErrorMessage>{errors.content[0]}</ErrorMessage>
                        )}
                    </div>
                </FormStack>

                <FormActions>
                    <SaveButton />

                    {id && <DeleteButton id={id} />}
                </FormActions>
            </form>
        </>
    );
};

export default ArticleForm;
