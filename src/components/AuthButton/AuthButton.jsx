import Button from "../Button/Button";
import { signOutUser } from "@/config/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default ({ isAuth, onClick, className }) => {
    return (
        <Button
            onClick={() => onClick()}
            className={`w-full mt-8 ${className}`}
        >
            <span className="mr-2">{isAuth ? "Sign Out" : "Sign In"}</span>

            {isAuth ? <FontAwesomeIcon icon={faArrowRightFromBracket} /> : ""}
        </Button>
    );
};
