import ActionTab from "@/components/ActionTab";
import ActionTabs from "@/components/ActionTabs";
import Header from "@/components/Header";

export default function Article() {
    return (
        <>
            <Header title="Article" />

            <ActionTabs>
                <ActionTab title="Article" label="List Article" isActive />
                <ActionTab title="Add / Edit" label="Detail Article" />
            </ActionTabs>
        </>
    );
}
