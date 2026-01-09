import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact | Al Aman Trust',
};

export default function Contact() {
    return (
        <section className="section">
            <div className="section-header">
                <Reveal>
                    <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Connect</span>
                    <h2 className="serif">We're here to <span className="gold">assist you</span></h2>
                    <p>Reach out to our expert team for a confidential consultation regarding your business or wealth management needs.</p>
                </Reveal>
            </div>

            <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: '6rem' }}>
                <Reveal>
                    <form action="#" className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required placeholder="Your full name" />
                        </div>
                        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" name="email" required placeholder="email@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone number</label>
                                <input type="tel" id="phone" name="phone" placeholder="+123 456 789" />
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
                        <p>Riyadh, 01, SA</p>
                        <p>Saudi Arabia</p>
                    </div>
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 className="serif gold" style={{ marginBottom: '1rem' }}>Direct Contact</h3>
                        <p>Email: <a href="mailto:rizwan@rusdbank.com" style={{ color: 'inherit', textDecoration: 'none' }}>rizwan@rusdbank.com</a></p>
                        <p>Phone: +6087452100</p>
                    </div>
                    <div>
                        <h3 className="serif gold" style={{ marginBottom: '1rem' }}>Business Hours</h3>
                        <table style={{ width: '100%', fontSize: '0.95rem', borderCollapse: 'collapse' }}>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #E4E4E7' }}>
                                    <td style={{ padding: '0.5rem 0' }}>Mon – Fri</td>
                                    <td style={{ textAlign: 'right' }}>9:00am – 10:00pm</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E4E4E7' }}>
                                    <td style={{ padding: '0.5rem 0' }}>Sat</td>
                                    <td style={{ textAlign: 'right' }}>9:00am – 6:00pm</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #E4E4E7' }}>
                                    <td style={{ padding: '0.5rem 0' }}>Sun</td>
                                    <td style={{ textAlign: 'right' }}>9:00am – 12:00pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
