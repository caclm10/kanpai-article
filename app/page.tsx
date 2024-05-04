import ActionTab from "@/components/ActionTab";
import ActionTabs from "@/components/ActionTabs";
import ArticlesTable from "@/components/ArticlesTable";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import IconAdd from "@/components/icons/IconAdd";
import { Button } from "@/components/ui/Button";

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

                    <ArticlesTable />
                </div>
            </div>
        </>
    );
}
