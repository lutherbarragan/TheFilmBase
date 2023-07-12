"use client";

import useUserStore from "@/config/store";
import Link from "next/link";

const ProfileIcon = ({ className }) => {
    const isAuth = useUserStore((state) => state.signedIn);
    const linkUrl = isAuth ? "/profile" : "/login";
    const profileSrc = isAuth
        ? "/assets/default-profile.png"
        : "/assets/default-profile-offline.png";

    return (
        <Link
            href={linkUrl}
            className={`flex justify-center items-center rounded-full ${className}`}
        >
            <img src={profileSrc} alt="profile picture" />
        </Link>
    );
};

export default ProfileIcon;
