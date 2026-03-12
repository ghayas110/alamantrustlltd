import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import styles from "./contact.module.css";

export const metadata: Metadata = {
    title: 'Contact | Al-Aman Trust',
};

export default function Contact() {
    return (
        <section className={styles.contactSection}>
            <div className="section-header">
                <Reveal>
                    <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Connect</span>
                    <h2 className="serif">We're here to <span className="gold">assist you</span></h2>
                    <p>Reach out to our expert team for a confidential consultation regarding your business or wealth management needs.</p>
                </Reveal>
            </div>

            <div className={styles.mainGrid}>
                <Reveal>
                    <form action="#" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your full name" />
                        </div>
                        <div className={styles.formGrid}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" name="email" required placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input type="tel" id="phone" name="phone" required placeholder="+123 456 789" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={6} required placeholder="How can we help you?"></textarea>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '1rem' }}>
                            <input type="checkbox" id="consent" style={{ width: 'auto', marginTop: '0.3rem' }} required />
                            <label htmlFor="consent" style={{ fontSize: '0.85rem', color: '#71717A' }}>I allow this website to store my submission so they can respond to my inquiry.*</label>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                </Reveal>

                <Reveal delay={0.1}>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="serif gold" style={{ marginBottom: '1rem' }}>Our Office</h3>
                        <p>Kensington Gardens, No. U1317, Lot 7616,</p>
                        <p>Jalan Jumidar Buyong, 87000 Federal Territory</p>
                        <p>of Labuan, Malaysia</p>
                    </div>
                    <div style={{ marginBottom: '4rem' }}>
                        <h3 className="serif gold" style={{ marginBottom: '1rem' }}>Direct Contact</h3>
                        <p>Email: <a href="mailto:info@alamantrust.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@alamantrust.com</a></p>
                        <p>Tel: +60 87 599800 / +60 87 452100</p>
                        <p>Fax: +60 87 420989</p>
                    </div>
                </Reveal>
            </div>
            
            {/* Added space at the bottom as requested */}
            <div style={{ paddingBottom: '8rem' }}></div>
        </section>
    );
}
