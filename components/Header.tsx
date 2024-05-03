import Image from "next/image";
import IconFlagUnitedKingdom from "./icons/IconFlagUnitedKingdom";
import IconKeyboardArrowDown from "./icons/IconKeyboardArrowDown";
import IconNotification from "./icons/IconNotification";
import avatar from "@/assets/images/avatar.png";

interface Props {
    title: string;
}

const Header: React.FC<Props> = ({ title }) => {
    return (
        <header className="px-8 py-7 bg-background h-24 flex items-center">
            <h1 className="text-2xl font-semibold">{title}</h1>

            <div className="flex-grow"></div>

            <div className="flex items-center gap-10">
                <div className="flex items-center gap-5">
                    <button
                        type="button"
                        className="inline-flex items-center gap-2"
                    >
                        <IconFlagUnitedKingdom className="size-6" />
                        <IconKeyboardArrowDown className="size-6" />
                    </button>

                    <button type="button" className="relative">
                        <IconNotification />
                        <span className="absolute -right-2 -top-0.5 inline-flex items-center justify-center size-4 rounded-full bg-red text-[7px] leading-none text-red-foreground">
                            10
                        </span>
                    </button>
                </div>

                <div className="w-[1px] h-10 bg-gray"></div>

                <div className="">
                    <button
                        type="button"
                        className="inline-flex items-center gap-3"
                    >
                        <Image
                            src={avatar}
                            alt="avatar"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                        <IconKeyboardArrowDown className="size-6" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
