"use client";
import useUserStore from "@/config/store";
import Link from "next/link";
import { useState, useEffect } from "react";

const ProfileIcon = ({ className, size, onClick }) => {
    const [linkUrl, setLinkUrl] = useState("/login");
    const [profileSrc, setProfileSrc] = useState(
        "/assets/default-profile-offline.png"
    );
    const isAuth = useUserStore((state) => state.signedIn);

    const SIZES = {
        xs: "w-8 h-8",
        sm: "w-10 h-10",
        md: "w-14 h-14",
        lg: "w-20 h-20",
        xl: "w-32 h-32",
    };

    useEffect(() => {
        if (isAuth) {
            setLinkUrl("/profile");
            setProfileSrc("/assets/default-profile-online.png");
        } else {
            setLinkUrl("/login");
            setProfileSrc("/assets/default-profile-offline.png");
        }
    }, [isAuth]);

    return (
        <Link
            href={linkUrl}
            onClick={onClick}
            className={`flex justify-center items-center rounded-full ${SIZES[size]} ${className}`}
        >
            <img src={profileSrc} alt="profile picture" />
        </Link>
    );
};

export default ProfileIcon;
