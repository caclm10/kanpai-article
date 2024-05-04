"use client";

import { usePathname } from "next/navigation";

const HeaderTitle = () => {
    const pathname = usePathname();

    const getTitle = () => {
        if (pathname.startsWith("/")) {
            return "Article";
        }

        return "";
    };

    return <h1 className="text-2xl font-semibold">{getTitle()}</h1>;
};

export default HeaderTitle;
