"use client";

import Link from "next/link";
import IconDelete from "./icons/IconDelete";
import IconEdit from "./icons/IconEdit";
import { Button, buttonVariants } from "./ui/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./ui/Table";
import { useArticleDispatch } from "@/contexts/article-context";
import Pagination from "./ui/Pagination";
import SearchInput from "./SearchInput";
import IconAdd from "./icons/IconAdd";
import { Select } from "./ui/Input";
import { type ChangeEvent, useEffect, useState } from "react";
import { useDebouncedState } from "@/hooks/use-debounced-state";
import IconLoader from "./icons/IconLoader";
import { Article } from "@/models/article";

const ArticlesTable = () => {
    const dispatch = useArticleDispatch();
    const [articles, setArticles] = useState<Article[]>([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [searchValue, setSearchValue] = useDebouncedState("", 350);
    const [isProcessing, setIsProcessing] = useState(true);

    const getArticles = async () => {
        setIsProcessing(true);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/articles?page_size=${pageSize}&page=${currentPage}&search=${searchValue}`
        );
        const body = await res.json();

        setArticles(body.data.articles);
        setTotalPage(body.data.page_info.last_page);
        setIsProcessing(false);
    };

    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleChangePageSize = (event: ChangeEvent<HTMLSelectElement>) => {
        setCurrentPage(1);
        setPageSize(+event.target.value);
    };

    const handleChangePage = (page: number) => {
        setCurrentPage(page);
    };

    const handleClickDelete = (id: string | number) => () => {
        dispatch!({ type: "setDeleteId", payload: id });
    };

    useEffect(() => {
        getArticles();
    }, [pageSize, currentPage, searchValue]);

    return (
        <>
            <div className="flex items-center justify-between">
                <SearchInput
                    defaultValue={searchValue}
                    onChange={handleChangeSearch}
                />

                <div>
                    <Link
                        href="/add"
                        className={buttonVariants({ size: "sm" })}
                    >
                        <IconAdd className="mr-2 size-5" />
                        Add
                    </Link>
                </div>
            </div>

            <div className={`relative ${isProcessing ? "min-h-28" : ""}`}>
                {isProcessing && (
                    <div className="absolute inset-0 bg-gray/30 z-[1] flex items-center justify-center">
                        <IconLoader className="size-6 text-gray-solid animate-spin" />
                    </div>
                )}
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[20%]">Date</TableHead>
                            <TableHead className="w-[20%]">Title</TableHead>
                            <TableHead className="w-[35%]">Content</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {articles.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell>
                                    {new Date(
                                        article.created_at
                                    ).toLocaleDateString("id-ID", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </TableCell>
                                <TableCell>
                                    <p className="line-clamp-1">
                                        {article.title}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className="line-clamp-1">
                                        {article.content}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center items-center gap-1.5">
                                        <Link
                                            href={`/${article.id}/edit`}
                                            className={buttonVariants({
                                                variant: "orange",
                                                size: "icon-sm",
                                                className: "rounded-full",
                                            })}
                                        >
                                            <IconEdit className="size-4" />
                                        </Link>
                                        <Button
                                            variant="red"
                                            size="icon-sm"
                                            className="rounded-full"
                                            onClick={handleClickDelete(
                                                article.id
                                            )}
                                        >
                                            <IconDelete className="size-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {!isProcessing && articles.length === 0 && (
                    <div className="p-5">
                        <p className="text-xs text-gray-solid text-center italic">
                            No articles found.
                        </p>
                    </div>
                )}
            </div>

            <div className="flex justify-end items-center gap-5">
                <div className="inline-flex items-center gap-3 text-xs">
                    <span>Show</span>
                    <Select
                        className="w-16 py-1.5 text-xs"
                        value={pageSize}
                        onChange={handleChangePageSize}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </Select>
                    <span>entries</span>
                </div>

                <Pagination
                    total={totalPage}
                    currentPage={currentPage}
                    onPageChange={handleChangePage}
                />
            </div>
        </>
    );
};

export default ArticlesTable;
