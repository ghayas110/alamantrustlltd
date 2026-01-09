'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <aside className="sidebar">
            <Link href="/" className="logo">
                <span className="gold">AL AMAN</span> TRUST
            </Link>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link href="/" className={isActive('/') ? 'active' : ''}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/services" className={isActive('/services') ? 'active' : ''}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={isActive('/about') ? 'active' : ''}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/testimonials" className={isActive('/testimonials') ? 'active' : ''}>
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <p>&copy; {new Date().getFullYear()} Al Aman Trust</p>
                <div className="social-links">
                    {/* Social icons could go here */}
                </div>
            </div>
        </aside>
    );
}
