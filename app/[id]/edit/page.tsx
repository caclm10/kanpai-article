import type { Metadata } from "next";
import ArticleForm from "@/components/ArticleForm";

export const metadata: Metadata = {
    title: "Edit Article",
};

interface Props {
    params: {
        id: string;
    };
}

const EditArticle = ({ params }: Props) => {
    return (
        <ArticleForm
            formTitle={`Edit #${params.id}`}
            id={+params.id}
        />
    );
};

export default EditArticle;
