import ArticlesTable from "@/components/ArticlesTable";
import SearchInput from "@/components/SearchInput";
import IconAdd from "@/components/icons/IconAdd";
import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

export default function Article() {
    return (
        <>
            <div className="px-8">
                <div className="flex flex-col gap-5 p-5">
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

                    <ArticlesTable />
                </div>
            </div>
        </>
    );
}
