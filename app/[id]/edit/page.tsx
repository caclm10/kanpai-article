import ArticleForm from "@/components/ArticleForm";
import { Article } from "@/models/article";

interface Props {
    params: {
        id: string;
    };
}

const EditArticle = async ({ params }: Props) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/articles/${params.id}`,
        {
            cache: "no-store",
        }
    );

    const data = (await res.json()).data as Article;

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
