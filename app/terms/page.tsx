import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { Scale, FileText, Globe, Copyright, AlertTriangle, Gavel } from "lucide-react";

export const metadata: Metadata = {
    title: 'Terms & Conditions | Al-Aman Trust',
    description: 'Terms and Conditions governing the use of Al Aman Trust Services Limited website and services.',
};

export default function TermsAndConditions() {
    return (
        <>
            {/* Hero */}
            <section className="policy-hero policy-hero-terms">
                <div className="policy-hero-inner">
                    <Reveal>
                        <span className="policy-label">Legal</span>
                        <h1 className="serif">Terms <span className="gold">&amp; Conditions</span></h1>
                        <p className="policy-hero-sub">
                            Please read these terms carefully before using our website. By accessing this site, you agree to be bound by these terms.
                        </p>
                    </Reveal>
                    <div className="policy-hero-decoration"></div>
                </div>
            </section>

            {/* Acceptance */}
            <section className="section-tight policy-section">
                <Reveal>
                    <div className="policy-intro-card">
                        <FileText size={36} color="var(--primary-gold)" strokeWidth={1.5} />
                        <div>
                            <h2 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Acceptance of Terms</h2>
                            <p>
                                By accessing this website, you agree to be bound by these Terms and Conditions. Al Aman Trust Services Limited reserves the right to modify these terms at any time to reflect changes in our regulated services.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Terms Grid */}
            <section className="policy-section policy-section-alt">
                <div className="policy-section-inner">
                    <div className="terms-grid">
                        <Reveal>
                            <div className="terms-card">
                                <div className="terms-card-icon">
                                    <AlertTriangle size={28} color="var(--primary-gold)" strokeWidth={1.5} />
                                </div>
                                <h3>No Professional Advice</h3>
                                <p>
                                    The content on this website is for informational purposes only and does not constitute legal, financial, or tax advice. While we provide high-level strategies for wealth planning and market entry, specific professional consultation is required before making any investment or corporate decisions.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="terms-card">
                                <div className="terms-card-icon">
                                    <Copyright size={28} color="var(--primary-gold)" strokeWidth={1.5} />
                                </div>
                                <h3>Intellectual Property</h3>
                                <p>
                                    All logos, text, and graphics—including the RUSD Group branding and Al Aman&apos;s &ldquo;Built on Trust&rdquo; philosophy—are the intellectual property of Al Aman or its parent company. Unauthorized use is strictly prohibited.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="terms-card">
                                <div className="terms-card-icon">
                                    <Scale size={28} color="var(--primary-gold)" strokeWidth={1.5} />
                                </div>
                                <h3>Limitation of Liability</h3>
                                <p>
                                    Al Aman strives for accuracy but provides this website &ldquo;as is.&rdquo; We are not liable for any direct or indirect loss resulting from the use of information on this site, particularly regarding the dynamic nature of Islamic economic jurisprudence and global market growth.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Services & Jurisdiction */}
            <section className="section-tight policy-section">
                <Reveal>
                    <div className="policy-section-heading">
                        <Globe size={24} color="var(--primary-gold)" strokeWidth={1.5} />
                        <h2 className="serif">Services <span className="gold">&amp; Jurisdiction</span></h2>
                    </div>
                </Reveal>

                <div className="terms-jurisdiction-list">
                    {[
                        { label: "Regulation", desc: "Al Aman is a licensed managed trust company regulated by the Labuan Financial Services Authority." },
                        { label: "Scope", desc: "Our services—including Corporate, Private Client, and Fund Services—are governed by the laws of Labuan, F.T., Malaysia." },
                        { label: "Market Entry", desc: "Support for Saudi Arabia and UAE markets is provided through our RUSD Group expertise and local partnerships." },
                    ].map((item, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="terms-jurisdiction-item">
                                <span className="terms-jurisdiction-num">0{i + 1}</span>
                                <div>
                                    <h4>{item.label}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Governing Law */}
            <section className="policy-section policy-section-dark" style={{ paddingBottom: '5rem' }}>
                <div className="policy-section-inner">
                    <Reveal>
                        <div className="terms-governing-law">
                            <Gavel size={40} color="var(--primary-gold)" strokeWidth={1.5} />
                            <h2 className="serif" style={{ color: 'white', marginBottom: '1rem' }}>Governing <span className="gold">Law</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', textAlign: 'center' }}>
                                These terms are governed by and construed in accordance with the laws of Labuan, Malaysia. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Malaysia.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
