import Link from 'next/link';
import { Twitter, Facebook, Linkedin, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-columns">
                <div className="footer-column footer-brand">
                    <h3 className="serif gold">Al Aman Trust</h3>
                    <p className="footer-description">
                        Al Aman Trust Services Limited is committed to delivering excellence in trust and corporate services while upholding the highest standards of governance.
                    </p>
                    <Link href="/contact" className="footer-btn">
                        Let's Talk <ArrowUpRight size={20} />
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
                        <li><Link href="/services/corporate">Corporate Services</Link></li>
                        <li><Link href="/services/private-client">Private Client Services</Link></li>
                        <li><Link href="/services/fund-services">Fund Services</Link></li>
                        <li><Link href="/services/business-support">Business Support</Link></li>
                    </ul>
                </div>

                <div className="footer-column footer-contact">
                    <h4>Get in touch</h4>
                    <p><MapPin size={18} className="gold" /> Riyadh, Saudi Arabia</p>
                    <p><Phone size={18} className="gold" /> +6087452100</p>
                    <p><Mail size={18} className="gold" /> info@alamantrust.com</p>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="copyright">
                    <p>© {new Date().getFullYear()} Al Aman Trust. All rights reserved.</p>
                </div>

                <div className="social-icons">
                    <a href="#" className="social-icon"><Facebook size={20} /></a>
                    <a href="#" className="social-icon"><Twitter size={20} /></a>
                    <a href="#" className="social-icon"><Linkedin size={20} /></a>
                </div>

                <div className="legal-links">
                    <Link href="/privacy">Privacy policy</Link>
                    <Link href="/terms">Terms & conditions</Link>
                </div>
            </div>
        </footer>
    );
}
