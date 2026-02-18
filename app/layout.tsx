import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/NavigationWrapper";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({ 
    subsets: ["latin"], 
    weight: ["700"],
    variable: "--font-montserrat" 
});
const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-lato",
});

export const metadata: Metadata = {
    title: "Al-Aman Trust",
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
                <CookieConsent />
            </body>
        </html>
    );
}
