export default function ExpandButton({ onClick, isExpanded }) {
    const buttonText = isExpanded ? "↑ Read Less ↑" : "↓ Read more ↓";

    return (
        <button
            className="absolute bottom-3 left-1/2 text-red-600 font-semibold text-sm focus:outline-none"
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
}
