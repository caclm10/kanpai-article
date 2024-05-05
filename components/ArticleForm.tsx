"use client";

import { FormActions, FormStack, FormTitle } from "./ui/Form";
import { Label } from "./ui/Label";
import { ErrorMessage, Input, Textarea } from "./ui/Input";
import SaveButton from "./SaveButton";
import { useNotificationDispatch } from "@/contexts/notification-context";
import { useEffect, useRef, useState } from "react";
import DeleteButton from "./DeleteButton";
import { useRouter } from "next/navigation";
import { revalidateTag } from "next/cache";
import { Article } from "@/models/article";
import IconLoader from "./icons/IconLoader";

interface Props {
    formTitle: string;
    id?: number;
}

interface FormErrors {
    title?: string[];
    content?: string[];
}

const ArticleForm: React.FC<Props> = ({ formTitle, id }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const dispatchNotif = useNotificationDispatch();
    const [errors, setErrors] = useState<FormErrors>({});
    const [formData, setFormData] = useState({
        title: "",
        content: "",
    });
    const [isFetching, setIsFetching] = useState(true);
    const [isNotFound, setIsNotFound] = useState(false);

    const fetchArticle = async () => {
        setIsFetching(true);
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`
            );

            const body = await res.json();
            if (res.ok) {
                const data = body.data as Article;

                setFormData({
                    title: data.title,
                    content: data.content,
                });
            } else {
                console.log(body.meta.message);
            }
        } catch (error) {
            console.log(error);
            setIsNotFound(true);
        }

        setIsFetching(false);
    };

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
            } else {
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

    useEffect(() => {
        if (id) {
            fetchArticle();
        }
    }, [id]);

    if (id && isFetching) {
        return (
            <div className="p-5 flex items-center justify-center">
                <IconLoader className="size-5 animate-spin text-gray" />
            </div>
        );
    }

    if (isNotFound) {
        return (
            <p className="text-center italic text-sm text-gray">
                Article not found
            </p>
        );
    }

    return (
        <>
            <FormTitle text={formTitle} />

            <form action={action} ref={formRef}>
                <FormStack>
                    <div>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            name="title"
                            defaultValue={formData.title}
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
                            defaultValue={formData.content}
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
