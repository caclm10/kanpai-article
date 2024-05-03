const SearchInput = () => {
    return (
        <div className="flex items-center gap-x-3">
            <svg
                width={14}
                height={14}
                viewBox="0 0 10 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.89117 0.333344C7.12867 0.333344 8.94867 2.15334 8.94867 4.39084C8.94867 5.44649 8.54355 6.40929 7.88061 7.13188L9.18509 8.43364C9.30717 8.55572 9.30759 8.75322 9.1855 8.8753C9.12467 8.93697 9.04425 8.96739 8.96425 8.96739C8.88467 8.96739 8.80467 8.93697 8.74342 8.87614L7.42319 7.5596C6.7287 8.11578 5.84812 8.44876 4.89117 8.44876C2.65367 8.44876 0.833252 6.62834 0.833252 4.39084C0.833252 2.15334 2.65367 0.333344 4.89117 0.333344ZM4.89117 0.958343C2.99825 0.958343 1.45825 2.49793 1.45825 4.39084C1.45825 6.28376 2.99825 7.82376 4.89117 7.82376C6.78367 7.82376 8.32367 6.28376 8.32367 4.39084C8.32367 2.49793 6.78367 0.958343 4.89117 0.958343Z"
                    fill="#939393"
                />
            </svg>
            <div className="w-full max-w-[250px]">
                <input
                    type="search"
                    className="text-xs leading-none focus:outline-none w-full"
                    placeholder="Type here to search..."
                />
            </div>
        </div>
    );
};

export default SearchInput;
