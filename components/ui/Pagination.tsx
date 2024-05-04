"use client";

import { Fragment } from "react";
import { tv } from "tailwind-variants";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconChevronRight from "../icons/IconChevronRight";

const paginationVariants = tv({
    slots: {
        item: [
            "inline-flex justify-center items-center",
            "size-9",
            "rounded-lg",
            "text-xs leading-none",
        ],
    },
    variants: {
        isActive: {
            false: {
                item: ["bg-white-low text-gray-hard"],
            },
            true: {
                item: ["bg-primary text-primary-foreground font-bold"],
            },
        },
    },
    defaultVariants: {
        isActive: false,
    },
});

interface PaginationProps {
    total: number;
    currentPage?: number;
    boundaries?: number;
    siblings?: number;
    onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    total,
    currentPage = 1,
    boundaries = 1,
    siblings = 1,
    onPageChange,
}) => {
    const { item } = paginationVariants();

    const pages = [
        ...(boundaries + 1 >= currentPage - siblings - 1
            ? Array.from(
                  { length: 2 + boundaries + siblings * 2 },
                  (_, i) => i + 1
              )
            : [
                  ...Array.from({ length: boundaries }, (_, i) => i + 1),

                  ...(total - boundaries <= currentPage + siblings + 1
                      ? Array.from(
                            { length: siblings * 2 + 1 + boundaries },
                            (_, i) =>
                                total - (siblings * 2 + 1 + boundaries) + i
                        )
                      : Array.from(
                            { length: siblings * 2 + 1 },
                            (_, i) => currentPage - siblings + i
                        )),
              ]),
        ...Array.from(
            { length: boundaries },
            (_, i) => total - boundaries + 1 + i
        ),
    ].filter(
        (value, index, array) =>
            array.indexOf(value) === index && value > 0 && value <= total
    );

    const handleClickItem = (page: number) => () => {
        onPageChange?.(page);
        // setCurrentPage(page);
    };

    const handleClickNext = () => {
        onPageChange?.(currentPage + 1);
        // setCurrentPage((currentPage) => currentPage + 1);
    };

    const handleClickPrevious = () => {
        onPageChange?.(currentPage - 1);
        // setCurrentPage((currentPage) => currentPage - 1);
    };

    return (
        <div className="flex items-center gap-3">
            <button
                type="button"
                className={item()}
                disabled={currentPage === 1}
                onClick={handleClickPrevious}
            >
                <IconChevronLeft className="size-4" />
            </button>

            {pages.map((page, index) => (
                <Fragment key={page}>
                    <button
                        type="button"
                        className={item({ isActive: currentPage === page })}
                        onClick={handleClickItem(page)}
                        disabled={currentPage === page}
                    >
                        {page}
                    </button>

                    {pages[index + 1] !== page + 1 && page !== total && (
                        <span className={item()}>...</span>
                    )}
                </Fragment>
            ))}

            <button
                type="button"
                className={item()}
                disabled={currentPage === total}
                onClick={handleClickNext}
            >
                <IconChevronRight className="size-4" />
            </button>
        </div>
    );
};

export default Pagination;
