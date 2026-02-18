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
                        src: '/images/banner2.png',
                        title: 'Where Compliance Meets Operational <span class="gold-light">Excellence</span>',
                        subtitle: 'We Handle Operations. You Drive Returns.'
                    },
                    {
                        type: 'image',
                        src: '/images/banner3.png',
                      
                        title: 'Your Values, Our <span class="gold-light">Commitment</span>, Lasting Trust',
                        subtitle: 'Wealth solutions in line with your faith and ethics'
                    },
                    {
                        type: 'image',
                        src: '/images/hero.png',
                        title: 'Your Bridge to the <span class="gold-light">Gulf & ASEAN</span>',
                        subtitle: 'We Handle Entry. You Focus on Growth'
                    }
                ]}
            />

            <section className="section">
                <div className="section-header" style={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <Reveal>
                            <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>Our Expertise</span>
                            <h2 className="serif" style={{ margin: 0 }}>Tailored Solutions for Your <span className="gold">Business & Wealth</span></h2>
                        </Reveal>
                    </div>
                    <div style={{ flex: '1 1 400px', paddingBottom: '0.5rem' }}>
                        <Reveal delay={0.1}>
                            <p className="subtitle" style={{ color: '#C5A473', fontWeight: 600, marginBottom: '1rem' }}>Your Trusted Corporate Partner</p>
                            <p>Al Aman Trust Services specializes in Shariah-compliant corporate services that uphold ethical standards while driving growth. We serve a diverse clientele—from emerging ventures to established enterprises—with tailored expertise in corporate governance, private wealth management, fund services, and strategic market entry across Malaysia, Saudi Arabia, and the UAE. Partner with us to navigate your corporate journey with integrity and precision.</p>
                        </Reveal>
                    </div>
                </div>
         <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
    <Reveal>
        <Link 
            href="/services/corporate-solutions" 
            className="card" 
            style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                border: '1px solid #C5A473', // Theme-aligned border
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(197, 164, 115, 0.05)', // Very subtle theme tint
                transition: 'transform 0.3s ease'
            }}
        >
            <img src="/images/service-1.png" alt="Corporate Services" className="card-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className="card-body" style={{ padding: '20px' }}>
                <h3 style={{ color: '#C5A473', marginTop: '0' }}>Corporate Services</h3>
                <p>Tailored Strategies That Reflect Your Vision. Your trusted corporate partner.</p>
            </div>
        </Link>
    </Reveal>

    <Reveal delay={0.1}>
        <Link 
            href="/services/private-client-advisory" 
            className="card" 
            style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                border: '1px solid #C5A473',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(197, 164, 115, 0.05)',
                transition: 'transform 0.3s ease'
            }}
        >
            <img src="/images/service-3.png" alt="Private Client Services" className="card-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className="card-body" style={{ padding: '20px' }}>
                <h3 style={{ color: '#C5A473', marginTop: '0' }}>Private Client Services</h3>
                <p> Wealth solutions in line with your faith and ethics.</p>
            </div>
        </Link>
    </Reveal>

    <Reveal delay={0.2}>
        <Link 
            href="/services/fund-services" 
            className="card" 
            style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                border: '1px solid #C5A473',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(197, 164, 115, 0.05)',
                transition: 'transform 0.3s ease'
            }}
        >
            <img src="/images/service-2.png" alt="Fund Services" className="card-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className="card-body" style={{ padding: '20px' }}>
                <h3 style={{ color: '#C5A473', marginTop: '0' }}>Fund Services</h3>
                <p>Where Compliance Meets Operational Excellence. We Handle Operations. You Drive Returns.</p>
            </div>
        </Link>
    </Reveal>

    <Reveal delay={0.3}>
        <Link 
            href="/services/business-soft-landing" 
            className="card" 
            style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                border: '1px solid #C5A473',
                borderRadius: '8px',
                overflow: 'hidden',
                backgroundColor: 'rgba(197, 164, 115, 0.05)',
                transition: 'transform 0.3s ease'
            }}
        >
            <img src="/images/business-soft-landing-home.png" alt="Business Soft-landing" className="card-image" style={{ width: '100%', height: 'auto', display: 'block' }} />
            <div className="card-body" style={{ padding: '20px' }}>
                <h3 style={{ color: '#C5A473', marginTop: '0' }}>Business Support & Soft-Landing</h3>
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
