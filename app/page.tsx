import Reveal from "@/components/Reveal";
import Link from 'next/link';
import BannerSlider from "@/components/BannerSlider";
import { getCMSContent } from "@/app/actions/cms";

export default async function Home() {
    // 1. Hydrate Banners (multi-slide format)
    const heroContent = await getCMSContent("home", "hero", {
        slides: [
            { title: 'Where Compliance Meets Operational <span class="gold-light">Excellence</span>', subtitle: 'We Handle Operations. You Drive Returns.', bgImage: '/images/banner2.png' },
            { title: 'Building Trust Through <span class="gold-light">Integrity</span>', subtitle: 'Corporate Governance. Wealth Management. Fund Services.', bgImage: '/images/hero.png' }
        ]
    });

    // Backward-compatible: if old format (single title/subtitle), wrap into slides array
    const heroSlides = heroContent.slides
        ? heroContent.slides.map((s: any) => ({ type: 'image' as const, src: s.bgImage || '/images/banner2.png', title: s.title, subtitle: s.subtitle }))
        : [{ type: 'image' as const, src: heroContent.bgImage || '/images/banner2.png', title: heroContent.title, subtitle: heroContent.subtitle }];

    // 2. Hydrate Services
    const defaultServices = {
        items: [
            { title: "Corporate Services", src: "/images/service-1.png", description: "Tailored Strategies That Reflect Your Vision. Your trusted corporate partner." },
            { title: "Private Client Services", src: "/images/service-3.png", description: "Wealth solutions in line with your faith and ethics." },
            { title: "Fund Services", src: "/images/service-2.png", description: "Where Compliance Meets Operational Excellence. We Handle Operations. You Drive Returns." },
            { title: "Business Support & Soft-Landing", src: "/images/business-soft-landing-home.png", description: "Your Bridge to the Gulf & ASEAN. We Handle Entry. You Focus on Growth." }
        ]
    };
    const servicesContent = await getCMSContent("home", "services", defaultServices);

    return (
        <>
            <BannerSlider slides={heroSlides} />

            <section className="section">
                <div className="section-header" style={{ maxWidth: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '4rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <Reveal>
                            <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>{servicesContent.expertiseTitle || 'Our Expertise'}</span>
                            <h2 className="serif" style={{ margin: 0 }}>{servicesContent.expertiseSubtitle || 'Tailored Solutions for Your Business & Wealth'}</h2>
                        </Reveal>
                    </div>
                    <div style={{ flex: '1 1 400px', paddingBottom: '0.5rem' }}>
                        <Reveal delay={0.1}>
                            <p className="subtitle" style={{ color: '#C5A473', fontWeight: 600, marginBottom: '1rem' }}>{servicesContent.expertiseContextLabel || 'Your Trusted Corporate Partner'}</p>
                            <p>{servicesContent.expertiseContextBody || 'Al Aman Trust Services specializes in Shariah-compliant corporate services that uphold ethical standards while driving growth. We serve a diverse clientele—from emerging ventures to established enterprises—with tailored expertise in corporate governance, private wealth management, fund services, and strategic market entry across Malaysia, Saudi Arabia, and the UAE. Partner with us to navigate your corporate journey with integrity and precision.'}</p>
                        </Reveal>
                    </div>
                </div>

                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {servicesContent.items.map((service: any, index: number) => (
                        <Reveal key={index} delay={index * 0.1} className="h-full">
                            <Link
                                href="/services"
                                className="card"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    border: '1px solid #C5A473',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    backgroundColor: 'rgba(197, 164, 115, 0.05)',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <img src={service.src || '/images/service-1.png'} alt={service.title} className="card-image" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                                <div className="card-body" style={{ padding: '20px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ color: '#C5A473', marginTop: '0' }}>{service.title}</h3>
                                    <p>{service.description || 'Professional corporate solutions.'}</p>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* New "Why Choose Us" Section */}
            <section className="section dark-section" style={{ background: '#18181b', color: '#fff' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <Reveal>
                            <span className="gold-light" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>Our Approach</span>
                            <h2 className="serif" style={{ fontSize: 'var(--h2-size)', marginBottom: '1.5rem', color: '#fff' }}>Driven by Integrity. Focused on Growth.</h2>
                            <p style={{ color: '#a1a1aa', fontSize: '1.1rem', marginBottom: '2rem' }}>We don't just provide services; we build long-term partnerships. Our approach blends deep regional expertise with uncompromising ethical standards to deliver solutions that are both effective and responsible.</p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                                <div>
                                    <h4 className="gold-light" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>01. Strategy</h4>
                                    <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Tailored planning aligned with your goals and ethical framework.</p>
                                </div>
                                <div>
                                    <h4 className="gold-light" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>02. Execution</h4>
                                    <p style={{ color: '#a1a1aa', fontSize: '0.95rem' }}>Flawless operational support to bring your vision to reality.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div style={{ flex: '1 1 400px', position: 'relative' }}>
                        <Reveal delay={0.2}>
                            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(197, 164, 115, 0.2)' }}>
                                <img src="/images/service-1.png" alt="Our Approach" style={{ width: '100%', height: '500px', objectFit: 'cover', display: 'block', filter: 'brightness(0.8)' }} />
                                <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top, rgba(24, 24, 27, 0.9), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
                                    <h3 style={{ color: '#C5A473', margin: 0, fontSize: '1.5rem' }}>Excellence in Motion</h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* New "Core Values" Section */}

        </>
    );
}
