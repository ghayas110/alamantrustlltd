'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface MobileHeaderProps {
    onOpen: () => void;
}

export default function MobileHeader({ onOpen }: MobileHeaderProps) {
    return (
        <header className="mobile-header">
            <Link href="/" className="logo">
                <img src="/logo.png" alt="Al Aman Trust" style={{ height: '70px', width: 'auto' }} />
            </Link>
            <button className="menu-toggle" onClick={onOpen} aria-label="Open menu">
                <Menu size={24} />
            </button>
        </header>
    );
}
