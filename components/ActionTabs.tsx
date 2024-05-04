"use client";

import { usePathname } from "next/navigation";
import Tab from "./ui/Tab";
import Tabs from "./ui/Tabs";

const ActionTabs = () => {
    const pathname = usePathname();

    const getInstanceName = () => {
        if (pathname.startsWith("/")) {
            return "article";
        }

        return "";
    };

    const isForm = pathname.endsWith("add") || pathname.endsWith("edit");

    const instanceName = getInstanceName();

    return (
        <Tabs>
            <Tab
                title={instanceName}
                label={`List ${instanceName}`}
                isActive={!isForm}
            />
            <Tab
                title="Add / Edit"
                label={`Detail ${instanceName}`}
                isActive={isForm}
            />
        </Tabs>
    );
};

export default ActionTabs;
