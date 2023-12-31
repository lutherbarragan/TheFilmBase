import Navbar from "@/components/Navbar/Navbar";

import { StoreInitializer } from "@/config/storeInitializer";

import "./globals.css";

export const metadata = {
    title: "The Film Base",
    description: "Search movies, shows and more...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-zinc-950 pb-10 text-white">
                <StoreInitializer />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
