import Navbar from "@/components/Navbar/Navbar";

import { StoreInitializer } from "@/config/storeInitializer";
import supabase from "@/config/dbConnection";
import { useUserStore } from "@/config/store";

import "./globals.css";

export const metadata = {
    title: "The Film Base",
    description: "Search movies, shows and more...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <StoreInitializer />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
