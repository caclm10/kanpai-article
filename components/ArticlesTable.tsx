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

const ArticlesTable = () => {
    const dispatch = useArticleDispatch();

    const handleClickDelete = (id: string | number) => () => {
        dispatch!({ type: "setDeleteId", payload: id });
    };

    return (
        <>
            <div className="flex items-center justify-between">
                <SearchInput />

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
                    {Array.from(Array(10).keys()).map((i) => (
                        <TableRow key={i}>
                            <TableCell>06 Mar 2023</TableCell>
                            <TableCell>Lorem Ipsum</TableCell>
                            <TableCell>
                                <p className="line-clamp-1">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iste enim nihil incidunt
                                    labore voluptate id beatae recusandae velit
                                    ratione rem dicta provident ad quod
                                    perspiciatis nisi porro, nobis odit
                                    assumenda.
                                </p>
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-center items-center gap-1.5">
                                    <Link
                                        href={`/${i + 1}/edit`}
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
                                        onClick={handleClickDelete(i + 1)}
                                    >
                                        <IconDelete className="size-4" />
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Pagination total={20} />
        </>
    );
};

export default ArticlesTable;
