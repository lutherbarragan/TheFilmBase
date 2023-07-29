const LinksArea = ({ children, title }) => {
    return (
        <div className="mb-6">
            <h2 className="font-semibold mb-2">{title}</h2>
            {children}
        </div>
    );
};

export default LinksArea;
