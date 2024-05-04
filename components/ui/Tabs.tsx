interface Props {
    children: React.ReactNode;
}

const Tabs: React.FC<Props> = ({ children }) => {
    return (
        <div className="px-8">
            <div className="border-b border-gray">
                <div className="grid grid-cols-4">{children}</div>
            </div>
        </div>
    );
};

export default Tabs;
