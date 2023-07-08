import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SidebarIcon({ setIsSidebarOpen }) {
    return (
        <div onClick={() => setIsSidebarOpen(true)}>
            <FontAwesomeIcon icon={faBars} className=" text-2xl" />
        </div>
    );
}
