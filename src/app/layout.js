import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
    title: "The Film Base",
    description: "Search movies, shows and more...",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
