import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["700"],
});
const lato = Lato({
    subsets: ["latin"],
    variable: "--font-lato",
    weight: ["400"],
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
            <body suppressHydrationWarning className={`${lato.variable} ${montserrat.variable}`}>
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
