import Reveal from "@/components/Reveal";
import Link from "next/link";
import { services } from "@/data/services";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: 'Services | Al Aman Trust',
};

export default function Services() {
    return (
        <>
            <section
                style={{
                    display: "grid",
                    placeItems: "center",
                    minHeight: "400px",
                    position: "relative",
                    marginBottom: "4rem"
                }}
            >
                <img
                    src="/images/services-hero-new.png"
                    alt="Our Services"
                    style={{
                        gridArea: "1 / 1",
                        width: "100%",
                        height: "auto",
                        maxHeight: "80vh",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                />
                <div
                    style={{
                        gridArea: "1 / 1",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
                        zIndex: 1,
                    }}
                />
                <div style={{ gridArea: "1 / 1", zIndex: 10, textAlign: "center", padding: "0 1rem" }}>
                    <Reveal>
                        <p
                            style={{
                                color: "#D4AF37",
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                                fontSize: "0.875rem",
                                marginBottom: "1rem",
                            }}
                        >
                            Our Services
                        </p>
                        <h1
                            className="serif"
                            style={{
                                color: "#fff",
                                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                                marginBottom: "1rem",
                                lineHeight: "1.2"
                            }}
                        >
                            Solutions That Honor Your Values,<br />
                            <span className="gold">Strategies That Secure Your Future</span>
                        </h1>
                        <div style={{ width: "80px", height: "3px", backgroundColor: "#D4AF37", margin: "0 auto 1.5rem auto" }} />
                        <p 
                            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                            style={{ color: '#fff', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                        >
                            Bespoke, Shariah-compliant services designed to bridge tradition and innovation
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section">
                <div style={{ marginBottom: "6rem" }}>
                    <Reveal>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "center" }}>
                            <div style={{ position: "relative", minHeight: "300px" }}>
                                <img
                                    src="/images/our-solutions-services.png"
                                    alt="Our Solutions"
                                    style={{ width: "100%", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)" }}
                                />
                                <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100px", height: "100px", borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37", zIndex: -1 }}></div>
                                <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37", zIndex: -1 }}></div>
                            </div>
                            <div>
                                <h2 className="serif" style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
                                    Our <span className="gold">Solutions</span>
                                </h2>
                                <div style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                                    <p style={{ marginBottom: "1.5rem" }}>
                                        Your business ambitions deserve more than standard solutions. At Al Aman Trust Services, we deliver bespoke strategies that reflect your values and long-term vision, all grounded in Shariah compliance and regulatory excellence.
                                    </p>
                                    <p style={{ marginBottom: "1.5rem" }}>
                                        From corporate structuring to wealth preservation, from fund administration to seamless market entry—we provide the expertise, infrastructure, and strategic support you need to thrive in today's dynamic global markets.
                                    </p>
                                    <p style={{ fontWeight: 600 }}>
                                        Explore our comprehensive suite of services designed for discerning clients and forward-thinking businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

            <div className="services-vertical">
                {services.map((service, index) => (
                    <Reveal key={service.slug}>
                        <Link href={`/services/${service.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className={`service-row ${index % 2 !== 0 ? 'reverse' : ''}`}>
                                <div className="service-content">
                                    <h3 className="serif gold" style={{ fontSize: '2rem' }}>{service.headline}</h3>
                                    <p className="subtitle" style={{ fontSize: '1.1rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-body)' }}>
                                        {service.subHeadline}
                                    </p>
                                    <p style={{ marginBottom: '1.5rem' }}>{service.shortDescription}</p>
                                    
                                    <div style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                                        gap: '1rem', 
                                        marginTop: '1.5rem',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} style={{ 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '0.75rem', 
                                                padding: '1rem', 
                                                background: 'rgba(212, 175, 55, 0.05)', 
                                                border: '1px solid rgba(212, 175, 55, 0.2)', 
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s ease, background 0.2s ease'
                                            }} className="feature-card">
                                                <div style={{ 
                                                    background: 'rgba(212, 175, 55, 0.1)', 
                                                    padding: '6px', 
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Check color="#D4AF37" size={16} strokeWidth={3} />
                                                </div>
                                                <span style={{ fontWeight: 500, fontSize: '0.95rem' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <span style={{ color: 'var(--primary-gold)', fontWeight: 600, marginTop: '2rem', display: 'inline-block', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} className="hover-underline">
                                        {service.ctaText}
                                    </span>
                                </div>
                                <div className="service-image-container" style={{ overflow: 'visible' }}>
                                    <div style={{ position: "relative", height: "100%", width: "100%" }}>
                                        <img src={service.image} alt={service.title} className="service-img" style={{ borderRadius: "12px", objectFit: "cover", width: "100%", height: "100%" }} />
                                        <div className="img-overlay" style={{ borderRadius: "12px" }}></div>
                                        <div style={{ position: "absolute", top: "-20px", left: "-20px", width: "100px", height: "100px", borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37", zIndex: -1 }}></div>
                                        <div style={{ position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37", zIndex: -1 }}></div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
            </section>
        </>
    );
}
