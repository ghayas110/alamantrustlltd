"use client";
import { usePathname } from 'next/navigation';
import Header from './Header';

export default function NavigationWrapper() {
    const pathname = usePathname();
    
    // Completely decouple generic website header from Admin application
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return <Header />;
}
