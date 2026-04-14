"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Twitter, Facebook, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    const pathname = usePathname();
    
    // Completely decouple generic website footer from Admin application
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className="site-footer">
            <div className="footer-columns">
                <div className="footer-column footer-brand">
                    <h3 className="serif gold">Al Aman Trust Services Limited</h3>
                    <p className="footer-description">
                        Al Aman Trust Services Limited is committed to delivering excellence in trust and corporate services while upholding the highest standards of governance.
                    </p>
                    <Link href="/contact" className="footer-btn">
                        Connect Me <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="footer-column">
                    <h4>Quick links</h4>
                    <ul className="footer-links">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><Link href="/services/corporate-solutions">Corporate Services</Link></li>
                        <li><Link href="/services/private-client-advisory">Private Client Services</Link></li>
                        <li><Link href="/services/fund-services">Fund Services</Link></li>
                        <li><Link href="/services/business-soft-landing">Business Support</Link></li>
                    </ul>
                </div>

                <div className="footer-column footer-contact">
                    <h4>Get in touch</h4>
                    <p><MapPin size={18} className="gold" style={{ flexShrink: 0, marginTop: '4px' }} /> <span>Kensington Gardens, No. U1317, Lot 7616,<br/>Jalan Jumidar Buyong, 87000 Federal Territory<br/>of Labuan, Malaysia</span></p>
                    <p><Phone size={18} className="gold" style={{ flexShrink: 0 }} /> <span>Tel: +60 87 599800 / +60 87 452100<br/>Fax: +60 87 420989</span></p>
                    <p><Mail size={18} className="gold" style={{ flexShrink: 0 }} /> info@alamantrust.com</p>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Al Aman Trust Services Limited. All rights reserved.</p>
                </div>

                <div className="legal-links">
                    <Link href="/privacy">Privacy policy</Link>
                    <Link href="/terms">Terms & conditions</Link>
                </div>
            </div>
        </footer>
    );
}
