export default (props) => {
    return (
        <button
            className={`bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-sm duration-300 ${props.className}`}
        >
            {props.children}
        </button>
    );
};
