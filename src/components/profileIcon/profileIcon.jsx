import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileIcon = ({ className }) => {
    return (
        <Link
            href="/profile"
            className={`flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full ${className}`}
        >
            <FontAwesomeIcon icon={faUser} />
        </Link>
    );
};

export default ProfileIcon;
