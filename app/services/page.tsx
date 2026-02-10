import Reveal from "@/components/Reveal";
import Link from "next/link";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Services | Al Aman Trust',
};

export default function Services() {
    return (
        <section className="section">
            <div className="section-header" style={{ marginBottom: '4rem' }}>
                <Reveal>
                    <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>
                        Solutions That Honor Your Values, <br/>
                        <span className="gold">Strategies That Secure Your Future</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#C5A473', fontWeight: 500 }}>
                        Bespoke, Shariah-compliant services designed to bridge tradition and innovation
                    </p>
                </Reveal>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto 6rem auto', textAlign: 'center' }}>
                <Reveal delay={0.2}>
                    <h2 className="serif" style={{ marginBottom: '2rem' }}>Our <span className="gold">Solutions</span></h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Your business ambitions deserve more than standard solutions. At Al Aman Trust Services, we deliver bespoke strategies that reflect your values and long-term vision, all grounded in Shariah compliance and regulatory excellence.
                    </p>
                    <p>
                        From corporate structuring to wealth preservation, from fund administration to seamless market entry—we provide the expertise, infrastructure, and strategic support you need to thrive in today's dynamic global markets.
                    </p>
                    <p style={{ marginTop: '1.5rem', fontWeight: 600 }}>
                        Explore our comprehensive suite of services designed for discerning clients and forward-thinking businesses.
                    </p>
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
                                    <ul className="service-list">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <span style={{ color: 'var(--primary-gold)', fontWeight: 600, marginTop: '2rem', display: 'inline-block', borderBottom: '1px solid transparent', transition: 'border-color 0.3s' }} className="hover-underline">
                                        {service.ctaText}
                                    </span>
                                </div>
                                <div className="service-image-container">
                                    <img src={service.image} alt={service.title} className="service-img" />
                                    <div className="img-overlay"></div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
