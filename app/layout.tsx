import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

export const metadata: Metadata = {
    title: "Al Aman Trust",
    description: "Excellence in ethical consulting.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable}`}>
                <div className="app-container">
                    <NavigationWrapper />
                    <main className="main-content">
                        {children}
                        <Footer />
                    </main>
                </div>
            </body>
        </html>
    );
}
