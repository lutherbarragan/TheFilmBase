"use client";
import Link from "next/link";
import useUserStore from "@/config/store";

import AuthButton from "@/components/AuthButton/AuthButton";
import Button from "@/components/Button/Button";
import ProfileIcon from "@/components/profileIcon/profileIcon";

export default () => {
    const isAuth = useUserStore((state) => state.signedIn);

    if (isAuth) {
        return <ProfileIcon className="w-9 h-9" />;
    } else {
        return (
            <Link href="/login">
                <Button className="text-xs font-bold">Sign In</Button>
            </Link>
        );
    }
};
