import Button from "../Button/Button";

export default ({ onClick, className, children }) => {
    return (
        <Button onClick={() => onClick()} className={`w-full ${className}`}>
            {children}
        </Button>
    );
};
