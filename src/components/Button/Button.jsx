export default ({ children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-sm duration-300 ${className}`}
        >
            {children}
        </button>
    );
};
