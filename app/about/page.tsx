import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About | Al Aman Trust',
};

export default function About() {
    return (
        <>
            <section className="section">
                <div className="section-header">
                    <Reveal>
                        <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Our Purpose</span>
                        <h2 className="serif">Commitment to <span className="gold">Trust</span></h2>
                        <p>Tailored Corporate & Private Wealth Solutions to meet your aspirations & faith.</p>
                    </Reveal>
                </div>

                <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
                    <Reveal>
                        <img src="/images/hero.png" alt="About Al Aman Trust" style={{ width: '100%', borderRadius: '20px', boxShadow: '20px 20px 0 var(--primary-gold)' }} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h3 className="serif" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Building lasting success <span className="gold">Guided by values</span></h3>
                        <p>At Al Aman Trust, we recognize the challenges of today’s dynamic business environment and deliver customized solutions to address your unique needs.</p>
                        <p style={{ marginTop: '1.5rem' }}>Our mission is to empower businesses and clients with ethical, compliant options while fostering a culture of trust and integrity. With a team of experts passionate about Shariah compliance, we focus on understanding your unique needs and delivering exceptional support.</p>
                        <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--bg-dark)', color: 'white', borderRadius: '12px' }}>
                            <h4 className="serif" style={{ marginBottom: '1rem' }}>Secure Your Family's Legacy</h4>
                            <p style={{ fontSize: '0.95rem', opacity: '0.8' }}>We pave the way for sustainable growth and success in a rapidly changing business landscape through faith-based excellence.</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="section" style={{ background: 'white' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <Reveal>
                        <h2 className="serif">Our Fundamental <span className="gold">Values</span></h2>
                        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '4rem' }}>
                            <div>
                                <h3 className="gold">Integrity</h3>
                                <p>Upholding the highest ethical standards in every transaction.</p>
                            </div>
                            <div>
                                <h3 className="gold">Excellence</h3>
                                <p>Delivering superior quality in consulting and fund management.</p>
                            </div>
                            <div>
                                <h3 className="gold">Faith</h3>
                                <p>Ensuring every decision is guided by Shariah principles.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
