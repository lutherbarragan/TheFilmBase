import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileIcon = ({ className }) => {
    return (
        <Link
            href="/sign-in"
            className={`flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full ${className}`}
        >
            <FontAwesomeIcon icon={faUser} />
        </Link>
    );
};

export default ProfileIcon;
