import Reveal from "@/components/Reveal";
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Testimonials | Al Aman Trust',
};

export default function Testimonials() {
    return (
        <>
            <section className="section">
                <div className="section-header">
                    <Reveal>
                        <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Client Success</span>
                        <h2 className="serif">Voice of <span className="gold">Experience</span></h2>
                        <p>Discover how we've helped businesses and families achieve their goals while staying true to their values.</p>
                    </Reveal>
                </div>

                <div className="grid">
                    <Reveal>
                        <div className="testimonial-card">
                            <span className="quote-icon">“</span>
                            <p className="testimonial-text">Al Aman Trust provided us with exceptional guidance on Shariah-compliant investments that truly aligned with our values. Their team's expertise made the process seamless and trustworthy.</p>
                            <div className="testimonial-author">Brandon Vega</div>
                            <div className="testimonial-company">Ethical Investments Co.</div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="testimonial-card">
                            <span className="quote-icon">“</span>
                            <p className="testimonial-text">I appreciate the tailored business solutions Al Aman Trust offered us. Their commitment to Shariah compliance gave us the confidence we needed to move forward with our expansion plans.</p>
                            <div className="testimonial-author">Chris Wei</div>
                            <div className="testimonial-company">Global Corp.</div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="testimonial-card">
                            <span className="quote-icon">“</span>
                            <p className="testimonial-text">The private client advisory service was a game-changer for our family. They provided personalized support and insights that made managing our wealth not only compliant but also effective.</p>
                            <div className="testimonial-author">Karen Weiss</div>
                            <div className="testimonial-company">Family Holdings Ltd.</div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="section dark-section" style={{ textAlign: 'center' }}>
                <Reveal>
                    <h2 className="serif" style={{ marginBottom: '2rem' }}>Join our <span className="gold">network</span> of successful clients</h2>
                    <Link href="/contact" className="btn">Start Your Consultation</Link>
                </Reveal>
            </section>
        </>
    );
}
