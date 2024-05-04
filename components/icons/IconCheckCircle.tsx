import type { SVGProps } from "react";

const IconCheckCircle = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
            >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                <path d="m9 12l2 2l4-4"></path>
            </g>
        </svg>
    );
};

export default IconCheckCircle;
