"use client";

import useUserStore from "@/config/store";
import Link from "next/link";

const ProfileIcon = ({ className }) => {
    const isAuth = useUserStore((state) => state.signedIn);
    const profileSrc = isAuth
        ? "/assets/default-profile.png"
        : "/assets/default-profile-offline.png";

    return (
        <Link
            href="/profile"
            className={`flex justify-center items-center bg-neutral-800 text-neutral-600 rounded-full ${className}`}
        >
            <img src={profileSrc} alt="profile picture" />
        </Link>
    );
};

export default ProfileIcon;
