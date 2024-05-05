import ArticleForm from "@/components/ArticleForm";
import { Article } from "@/models/article";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Edit Article",
};

interface Props {
    params: {
        id: string;
    };
}

const EditArticle = async ({ params }: Props) => {
    let data: Article;
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${params.id}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        return (
            <p className="text-center italic text-sm text-gray">
                Article not found
            </p>
        );
    }

    data = (await res.json()).data as Article;

    return (
        <ArticleForm
            formTitle={`Edit #${params.id}`}
            id={data.id}
            title={data.title}
            content={data.content}
        />
    );
};

export default EditArticle;
