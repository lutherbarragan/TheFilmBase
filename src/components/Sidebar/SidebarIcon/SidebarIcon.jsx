import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SidebarIcon({ setSidebarState }) {
    return (
        <div onClick={() => setSidebarState(true)}>
            <FontAwesomeIcon icon={faBars} className=" text-2xl" />
        </div>
    );
}
