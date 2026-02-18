'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className={`top-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className="header-container">
                <Link href="/" className="logo-wrapper">
                    <div className="logo-icon-container">
                        <img 
                            src="/logo.png" 
                            alt="Al-Aman Trust Logo" 
                            className="logo-icon"
                        />
                    </div>
                    <div className="logo-text">
                        <span className="brand-name">Al-AMAN TRUST</span>
                        <span className="brand-subtext">Empowering Growth, Upholding Values</span>
                    </div>
                </Link>
                
                <nav className={`desktop-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link 
                                    href={link.href} 
                                    className={pathname === link.href ? 'active' : ''}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <Link href="/contact" className="btn btn-sm hide-mobile">Connect Me</Link>
                    <button 
                        className="mobile-toggle" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} color="#1a1a1a" /> : <Menu size={24} color="#1a1a1a" />}
                    </button>
                </div>
            </div>
            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />}
        </header>
    );
}
