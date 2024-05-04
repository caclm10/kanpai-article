"use client";

import Link from "next/link";
import Logo from "./Logo";
import IconArticle from "./icons/IconArticle";
import { Button } from "./ui/Button";

const Sidebar = () => {
    return (
        <aside className="fixed left-0 inset-y-0 bg-background w-[270px] border-r border-r-gray">
            <div className="flex flex-col gap-y-12">
                <div className="px-12 pt-7">
                    <Button size="icon-sm" className="rounded-full">
                        <svg
                            width="14"
                            height="12"
                            viewBox="0 0 14 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.5 10.1381V11.5065H1.18421V10.1381H13.5ZM3.64463 0.493469L4.61211 1.46094L2.43495 3.6381L4.61211 5.81526L3.64463 6.78273L0.5 3.6381L3.64463 0.493469ZM13.5 5.34863V6.71705H7.34211V5.34863H13.5ZM13.5 0.559153V1.92757H7.34211V0.559153H13.5Z"
                                className="fill-primary-foreground"
                            />
                        </svg>
                    </Button>
                </div>

                <div className="flex justify-center">
                    <a className="inline-flex items-center gap-2">
                        <Logo />
                        <span className="text-primary text-lg font-bold">
                            Logo
                        </span>
                    </a>
                </div>

                <nav className="flex flex-col gap-2 px-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 px-6 py-3 relative rounded-sm overflow-hidden bg-primary/5 text-primary font-semibold"
                    >
                        <div className="absolute w-[3px] bg-primary left-0 inset-y-0"></div>
                        <IconArticle />
                        <span>Article</span>
                    </Link>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
