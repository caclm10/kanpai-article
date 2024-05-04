import ArticleForm from "@/components/ArticleForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Add Article",
};

const AddArticle = () => {
    return <ArticleForm formTitle="Add" />;
};

export default AddArticle;
