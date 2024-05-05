import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const tableVariants = tv({
    slots: {
        wrapper: ["relative w-full overflow-auto"],
        root: ["w-full caption-bottom text-sm"],
        header: ["[&_tr]:border-b"],
        body: ["[&_tr:last-child]:border-0"],
        row: [
            "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        ],
        head: [
            "h-9 px-4 text-center text-xs align-middle font-semibold text-primary bg-primary-low border border-gray-solid/30 [&:has([role=checkbox])]:pr-0",
        ],
        cell: [
            "p-4 text-center text-sm align-middle border border-gray-solid/30 [&:has([role=checkbox])]:pr-0",
        ],
    },
});

const { wrapper, root, header, body, row, head, cell } = tableVariants();

export const Table = forwardRef<
    HTMLTableElement,
    HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
    <div className={wrapper()}>
        <table ref={ref} className={root({ className })} {...props} />
    </div>
));

export const TableHeader = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <thead ref={ref} className={header({ className })} {...props} />
));

export const TableBody = forwardRef<
    HTMLTableSectionElement,
    HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
    <tbody ref={ref} className={body({ className })} {...props} />
));

export const TableRow = forwardRef<
    HTMLTableRowElement,
    HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
    <tr ref={ref} className={row({ className })} {...props} />
));

export const TableHead = forwardRef<
    HTMLTableCellElement,
    ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <th ref={ref} className={head({ className })} {...props} />
));

export const TableCell = forwardRef<
    HTMLTableCellElement,
    TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
    <td ref={ref} className={cell({ className })} {...props} />
));
