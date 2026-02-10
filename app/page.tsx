import Reveal from "@/components/Reveal";
import Link from 'next/link';
import BannerSlider from "@/components/BannerSlider";

export default function Home() {
    return (
        <>
            <BannerSlider 
                slides={[
                    {
                        type: 'image',
                        src: '/images/banner1.png',
                        title: 'Tailored Strategies That Reflect Your <span class="gold">Vision</span>',
                        subtitle: 'Your trusted corporate partner'
                    },
                    {
                        type: 'image',
                        src: '/images/banner2.png',
                        title: 'Where Compliance Meets Operational <span class="gold">Excellence</span>',
                        subtitle: 'We Handle Operations. You Drive Returns.'
                    },
                    {
                        type: 'image',
                        src: '/images/banner3.png',
                        title: 'Your Values, Our <span class="gold">Commitment</span>, Lasting Trust',
                        subtitle: 'Wealth solutions in line with your faith and ethics'
                    },
                    {
                        type: 'image',
                        src: '/images/hero.png',
                        title: 'Your Bridge to the <span class="gold">Gulf & ASEAN</span>',
                        subtitle: 'We Handle Entry. You Focus on Growth'
                    }
                ]}
            />

            <section className="section">
                <div className="section-header">
                    <Reveal>
                        <h2 className="serif">Tailored Solutions for Your <span className="gold">Business & Wealth</span></h2>
                        <p className="subtitle" style={{ color: '#C5A473', fontWeight: 600, marginBottom: '1rem' }}>Your Trusted Corporate Partner</p>
                        <p>Al Aman Trust Services specializes in Shariah-compliant corporate services that uphold ethical standards while driving growth. We serve a diverse clientele—from emerging ventures to established enterprises—with tailored expertise in corporate governance, private wealth management, fund services, and strategic market entry across Malaysia, Saudi Arabia, and the UAE. Partner with us to navigate your corporate journey with integrity and precision.</p>
                    </Reveal>
                </div>
                <div className="grid">
                    <Reveal>
                        <Link href="/services/corporate-solutions" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-1.png" alt="Corporate Services" className="card-image" />
                            <div className="card-body">
                                <h3>Corporate Services</h3>
                                <p>Tailored Strategies That Reflect Your Vision. Your trusted corporate partner.</p>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Link href="/services/private-client-advisory" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-3.png" alt="Private Client Services" className="card-image" />
                            <div className="card-body">
                                <h3>Private Client Services</h3>
                                <p>Your Values, Our Commitment, Lasting Trust. Wealth solutions in line with your faith and ethics.</p>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Link href="/services/fund-services" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-2.png" alt="Fund Services" className="card-image" />
                            <div className="card-body">
                                <h3>Fund Services</h3>
                                <p>Where Compliance Meets Operational Excellence. We Handle Operations. You Drive Returns.</p>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <Link href="/services/business-soft-landing" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/hero.png" alt="Business Soft-landing" className="card-image" />
                            <div className="card-body">
                                <h3>Business Soft-landing</h3>
                                <p>Your Bridge to the Gulf & ASEAN. We Handle Entry. You Focus on Growth.</p>
                            </div>
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* <section className="section dark-section">
                <Reveal>
                    <div className="text-center" style={{ textAlign: 'center' }}>
                        <h2 className="serif" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to align your business with <span className="gold">faith?</span></h2>
                        <Link href="/contact" className="btn">Get Started Today</Link>
                    </div>
                </Reveal>
            </section> */}
        </>
    );
}
