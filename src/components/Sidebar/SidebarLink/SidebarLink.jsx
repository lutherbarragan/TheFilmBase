import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarLink = ({ children, to, setIsSidebarOpen }) => {
    const pathname = usePathname();
    return (
        <Link
            onClick={() => {
                setIsSidebarOpen(false);
            }}
            href={to}
            className={`mb-3 block duration-200 outline-none
            hover:text-red-600 
            hover:cursor-pointer 
            focus:text-red-600 
            focus:cursor-pointer
            focus:outline-2 focus:outline-red-600
            ${
                pathname === to
                    ? "text-red-600 font-semibold border-r-2 border-red-600"
                    : "text-neutral-400"
            }`}
        >
            <p>{children}</p>
        </Link>
    );
};

export default SidebarLink;
