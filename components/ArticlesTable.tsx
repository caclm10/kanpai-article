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
import { Select, inputVariants } from "./ui/Input";
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
        dispatch!({
            type: "setDeleteId",
            payload: {
                id,
                afterDelete: () => {
                    getArticles();
                },
            },
        });
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

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 8 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-2 top-[50%] -translate-y-[50%]"
                        >
                            <path
                                d="M6.58753 1.32462H6.23471V0.971805C6.23471 0.777756 6.07594 0.618988 5.88189 0.618988C5.68784 0.618988 5.52908 0.777756 5.52908 0.971805V1.32462H2.0009V0.971805C2.0009 0.777756 1.84214 0.618988 1.64809 0.618988C1.45404 0.618988 1.29527 0.777756 1.29527 0.971805V1.32462H0.942451C0.554352 1.32462 0.236816 1.64216 0.236816 2.03026V7.67533C0.236816 8.06343 0.554352 8.38097 0.942451 8.38097H6.58753C6.97563 8.38097 7.29316 8.06343 7.29316 7.67533V2.03026C7.29316 1.64216 6.97563 1.32462 6.58753 1.32462ZM6.23471 7.67533H1.29527C1.10122 7.67533 0.942451 7.51657 0.942451 7.32252V3.08871H6.58753V7.32252C6.58753 7.51657 6.42876 7.67533 6.23471 7.67533Z"
                                fill="#51B15C"
                            />
                        </svg>
                        <Select className="w-24 py-1.5 text-xs pl-8">
                            <option value="2023" className="pl-0">
                                2023
                            </option>
                        </Select>
                    </div>

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
