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

const ArticlesTable = () => {
    const dispatch = useArticleDispatch();

    const handleClickDelete = (id: string | number) => () => {
        dispatch!({ type: "setDeleteId", payload: id });
    };

    return (
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
                                ratione rem dicta provident ad quod perspiciatis
                                nisi porro, nobis odit assumenda.
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
    );
};

export default ArticlesTable;
