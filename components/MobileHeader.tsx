'use client';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface MobileHeaderProps {
    onOpen: () => void;
}

export default function MobileHeader({ onOpen }: MobileHeaderProps) {
    return (
        <header className="mobile-header">
            <Link href="/" className="logo-wrapper">
                <div className="logo-icon-container" style={{ width: '45px', height: '45px' }}>
                    <img 
                        src="/logo.png" 
                        alt="Al-Aman Trust Logo" 
                        className="logo-icon"
                        style={{ transform: 'scale(1.4)' }}
                    />
                </div>
                <div className="logo-text">
                    <span className="brand-name" style={{ fontSize: '1.2rem' }}>Al-Aman</span>
                    <span className="brand-subtext" style={{ fontSize: '0.5rem' }}>Trust Services Limited</span>
                </div>
            </Link>
            <button className="menu-toggle" onClick={onOpen} aria-label="Open menu">
                <Menu size={24} />
            </button>
        </header>
    );
}
