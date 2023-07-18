import Button from "../Button/Button";

export default ({ onClick, className, children }) => {
    return (
        <Button
            onClick={() => onClick()}
            className={`w-full mt-8 ${className}`}
        >
            {children}
        </Button>
    );
};
