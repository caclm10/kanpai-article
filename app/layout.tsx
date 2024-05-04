import type { Metadata } from "next";
import { Open_Sans as FontSans } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import "./globals.css";
import ActionTabs from "@/components/ActionTabs";
import DeleteAlert from "@/components/DeleteAlert";
import { ArticleProivder } from "@/contexts/article-context";
import Notification from "@/components/Notification";
import { NotificationProivder } from "@/contexts/notification-context";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Articles",
    description: "Tes article",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`flex min-h-screen bg-background font-sans antialiased ${fontSans.variable}`}
            >
                <Sidebar />
                <div className="flex-grow grid grid-cols-[270px_1fr]">
                    <div className=""></div>

                    <div className="flex flex-col gap-5">
                        <Header />

                        <ActionTabs />

                        <div className="px-8">
                            <div className="flex flex-col gap-5 p-5">
                                <NotificationProivder>
                                    <Notification />

                                    <ArticleProivder>
                                        {children}

                                        <DeleteAlert />
                                    </ArticleProivder>
                                </NotificationProivder>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
