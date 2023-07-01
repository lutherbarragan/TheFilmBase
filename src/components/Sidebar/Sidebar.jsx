const Sidebar = ({ isBarOpen, closeBar }) => {
    return (
        <div
            className={`absolute z-50 w-full h-screen ${
                isBarOpen ? "left-0" : "-left-full duration-500"
            }`}
        >
            <div
                onClick={closeBar}
                className={`absolute w-full h-full bg-black  ${
                    isBarOpen ? "opacity-60 duration-500" : "opacity-0"
                }`}
            ></div>

            <div
                className={`absolute h-full w-2/5 duration-500  bg-neutral-900 ${
                    isBarOpen ? "left-0" : "-left-1/2"
                }`}
            >
                <h1>SIDEBAR</h1>
            </div>
        </div>
    );
};

export default Sidebar;
