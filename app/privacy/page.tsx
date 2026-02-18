import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Shield, Database, Eye, Lock, Users, Share2 } from "lucide-react";

export const metadata: Metadata = {
    title: 'Privacy Policy | Al-Aman Trust',
    description: 'Learn how Al Aman Trust Services Limited collects, uses, and safeguards your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <>
            {/* Hero */}
            <section className="policy-hero">
                <div className="policy-hero-inner">
                    <Reveal>
                        <span className="policy-label">Legal</span>
                        <h1 className="serif">Privacy <span className="gold">Policy</span></h1>
                        <p className="policy-hero-sub">
                            Your trust is the foundation of everything we do. This policy outlines how we protect and manage your personal information.
                        </p>
                    </Reveal>
                    <div className="policy-hero-decoration"></div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section-tight policy-section">
                <Reveal>
                    <div className="policy-intro-card">
                        <Shield size={36} color="var(--primary-gold)" strokeWidth={1.5} />
                        <div>
                            <h2 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Our Commitment to Your Privacy</h2>
                            <p>
                                At Al Aman Trust Services Limited (&ldquo;Al Aman,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we are committed to protecting your privacy and ensuring the highest levels of data security. As a subsidiary of Rusd Investment Bank Inc. and part of the RUSD Group, we operate under stringent ethical conduct and Shariah principles. This policy outlines how we collect, use, and safeguard your personal information in compliance with the Personal Data Protection Act (PDPA) and Labuan Financial Services Authority regulations.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Information We Collect */}
            <section className="policy-section policy-section-alt">
                <div className="policy-section-inner">
                    <Reveal>
                        <div className="policy-section-heading">
                            <Database size={24} color="var(--primary-gold)" strokeWidth={1.5} />
                            <h2 className="serif">Information We <span className="gold">Collect</span></h2>
                        </div>
                        <p className="policy-section-desc">To provide our bespoke corporate and private client services, we may collect:</p>
                    </Reveal>

                    <div className="policy-grid">
                        {[
                            { title: "Identity Data", desc: "Names, passport details, and tax identification for business set-ups and compliance." },
                            { title: "Contact Data", desc: "Email addresses, phone numbers, and physical addresses." },
                            { title: "Financial Data", desc: "Bank account details and financial history required for fund administration and cash management services." },
                            { title: "Technical Data", desc: "IP addresses and website usage via cookies to improve your user experience." },
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="policy-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Use Your Data */}
            <section className="section-tight policy-section">
                <Reveal>
                    <div className="policy-section-heading">
                        <Eye size={24} color="var(--primary-gold)" strokeWidth={1.5} />
                        <h2 className="serif">How We Use <span className="gold">Your Data</span></h2>
                    </div>
                    <p className="policy-section-desc">Your information is processed to:</p>
                    <ul className="policy-list">
                        <li>Execute requested professional services</li>
                        <li>Communicate updates regarding your requested professional services</li>
                    </ul>
                </Reveal>
            </section>

            {/* Disclosure */}
            <section className="policy-section policy-section-alt">
                <div className="policy-section-inner">
                    <Reveal>
                        <div className="policy-section-heading">
                            <Share2 size={24} color="var(--primary-gold)" strokeWidth={1.5} />
                            <h2 className="serif">Disclosure of <span className="gold">Information</span></h2>
                        </div>
                        <p className="policy-section-desc">We do not sell your data. We may share information with:</p>
                    </Reveal>

                    <div className="policy-disclosure-list">
                        {[
                            { label: "RUSD Group Affiliates", desc: "To provide integrated financial and investment solutions." },
                            { label: "Regulators", desc: "Such as the Labuan Financial Services Authority (Labuan FSA) to meet legal obligations." },
                            { label: "Service Partners", desc: "Specialized providers assisting in HR, payroll, or universal life insurance." },
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <div className="policy-disclosure-item">
                                    <div className="policy-disclosure-dot"></div>
                                    <div>
                                        <strong>{item.label}</strong>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data Security */}
            <section className="section-tight policy-section">
                <Reveal>
                    <div className="policy-section-heading">
                        <Lock size={24} color="var(--primary-gold)" strokeWidth={1.5} />
                        <h2 className="serif">Data Security <span className="gold">&amp; Integrity</span></h2>
                    </div>
                    <p>
                        Consistent with our core value of Transparency, we employ robust technical and organizational measures to prevent unauthorized access or disclosure. We retain your data only as long as necessary to fulfill our service obligations or as required by Malaysian law.
                    </p>
                </Reveal>
            </section>

            {/* Shariah Compliance */}
            <section className="policy-section policy-section-dark">
                <div className="policy-section-inner">
                    <Reveal>
                        <div className="policy-section-heading" style={{ justifyContent: 'center', textAlign: 'center' }}>
                            <h2 className="serif" style={{ color: 'white' }}>Shariah Compliance <span className="gold">&amp; Investment Disclaimer</span></h2>
                        </div>
                        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto 2rem' }}>
                            This disclaimer outlines the nature of the Shariah-compliant services provided by Al Aman Trust Services Limited.
                        </p>
                    </Reveal>

                    <div className="policy-shariah-grid">
                        {[
                            { title: "Ethical Foundation", desc: "All services and strategies offered by Al Aman Trust Services are built on Shariah Principles and the evolving concept of Islamic economic jurisprudence." },
                            { title: "Regulatory Status", desc: "Al Aman Trust Services Limited is a licensed managed trust company, regulated by the Labuan Financial Services Authority in Labuan, F.T., Malaysia." },
                            { title: "Corporate Affiliation", desc: "We operate as a wholly owned subsidiary of Rusd Investment Bank Inc., a leading Islamic investment bank, and are part of the broader RUSD Group." },
                            { title: "Jurisprudential Innovation", desc: "Our approach, symbolized by the \"RUSD\" concept, seeks to revive concepts within Islamic jurisprudence for modern application, bridging tradition and innovation." },
                            { title: "Professional Advice", desc: "The information provided on this website does not constitute financial or Shariah-legal advice. Clients should seek independent consultation." },
                            { title: "Governance Standards", desc: "We maintain stringent corporate governance standards, emphasizing ethical conduct, fairness, and transparency in all operations." },
                        ].map((item, i) => (
                            <Reveal key={i} delay={i * 0.08}>
                                <div className="policy-shariah-card">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
