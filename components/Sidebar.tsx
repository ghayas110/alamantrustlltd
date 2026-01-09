'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <>
            {/* Mobile Overlay */}
            <div 
                className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
                onClick={onClose}
            />
            
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Link href="/" className="logo" onClick={onClose}>
                        <span className="gold">AL AMAN</span> TRUST
                    </Link>
                    <button className="mobile-close" onClick={onClose} aria-label="Close menu">
                        <X size={24} />
                    </button>
                </div>

                <nav>
                    <ul className="nav-links">
                        <li>
                            <Link href="/" className={isActive('/') ? 'active' : ''} onClick={onClose}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className={isActive('/services') ? 'active' : ''} onClick={onClose}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className={isActive('/about') ? 'active' : ''} onClick={onClose}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/testimonials" className={isActive('/testimonials') ? 'active' : ''} onClick={onClose}>
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className={isActive('/contact') ? 'active' : ''} onClick={onClose}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <p>&copy; {new Date().getFullYear()} Al Aman Trust</p>
                </div>
            </aside>
        </>
    );
}
