import ActionTab from "@/components/ActionTab";
import ActionTabs from "@/components/ActionTabs";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import IconAdd from "@/components/icons/IconAdd";
import IconDelete from "@/components/icons/IconDelete";
import IconEdit from "@/components/icons/IconEdit";
import { Button } from "@/components/ui/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table";

export default function Article() {
    return (
        <>
            <Header title="Article" />

            <ActionTabs>
                <ActionTab title="Article" label="List Article" isActive />
                <ActionTab title="Add / Edit" label="Detail Article" />
            </ActionTabs>

            <div className="px-8">
                <div className="flex flex-col gap-5 p-5">
                    <div className="flex items-center justify-between">
                        <SearchInput />

                        <div>
                            <Button size="sm">
                                <IconAdd className="mr-2 size-5" />
                                Add
                            </Button>
                        </div>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[20%]">Date</TableHead>
                                <TableHead className="w-[20%]">Title</TableHead>
                                <TableHead className="w-[35%]">
                                    Content
                                </TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>06 Mar 2023</TableCell>
                                <TableCell>Lorem Ipsum</TableCell>
                                <TableCell>
                                    <p className="line-clamp-1">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Iste enim nihil
                                        incidunt labore voluptate id beatae
                                        recusandae velit ratione rem dicta
                                        provident ad quod perspiciatis nisi
                                        porro, nobis odit assumenda.
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <div className="flex justify-center items-center gap-1.5">
                                        <Button
                                            variant="orange"
                                            size="icon-sm"
                                            className="rounded-full"
                                        >
                                            <IconEdit className="size-4" />
                                        </Button>
                                        <Button
                                            variant="red"
                                            size="icon-sm"
                                            className="rounded-full"
                                        >
                                            <IconDelete className="size-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
