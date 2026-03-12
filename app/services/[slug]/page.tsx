import Reveal from "@/components/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import type { Metadata } from "next";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.title} | Al Aman Trust`,
        description: service.shortDescription,
    };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            {/* Hero Section */}
            <section
                style={{
                    display: "grid",
                    placeItems: "center",
                    minHeight: "400px",
                    position: "relative",
                }}
            >
                <img
                    src={service.image}
                    alt={service.title}
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
                            }}
                        >
                            {service.title}
                        </h1>
                        <div style={{ width: "80px", height: "3px", backgroundColor: "#D4AF37", margin: "0 auto" }} />
                    </Reveal>
                </div>
            </section>

            {/* Content Section */}
            <section className="section">
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    {/* Header */}
                    <Reveal>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            {service.subtitle && (
                                <h2 className="serif" style={{ fontSize: "1.75rem", color: "var(--primary-gold)", marginBottom: "1.5rem" }}>
                                    {service.subtitle}
                                </h2>
                            )}
                            {service.intro ? (
                                <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--text-body)" }}>
                                    {service.intro}
                                </p>
                            ) : (
                                service.fullDescription.split("\n\n").map((paragraph, idx) => (
                                    <p key={idx} style={{ marginBottom: "1.5rem", lineHeight: 1.8, color: "var(--text-body)" }}>
                                        {paragraph}
                                    </p>
                                ))
                            )}
                        </div>
                    </Reveal>

                    {/* Our Services / SubServices */}
                    {service.subServices && service.subServices.length > 0 && (
                        <Reveal>
                            <div style={{ marginBottom: "4rem" }}>
                                <h3 className="serif" style={{ marginBottom: "2rem", borderLeft: "4px solid var(--primary-gold)", paddingLeft: "1rem" }}>Our Services</h3>
                                <div style={{ display: "grid", gap: "2rem" }}>
                                    {service.subServices.map((sub, idx) => (
                                        <div key={idx} style={{ padding: "1.5rem", background: "var(--card-bg)", borderRadius: "8px", border: "1px solid var(--border-color, #e5e5e5)" }}>
                                            <h4 style={{ color: "#D4AF37", marginBottom: "0.5rem", fontSize: "1.25rem", fontWeight: 700 }}>{sub.title}</h4>
                                            <p style={{ lineHeight: 1.6, color: "var(--text-body)" }}>{sub.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {/* Markets (Soft-Landing) */}
                    {service.markets && service.markets.length > 0 && (
                        <Reveal>
                            <div style={{ marginBottom: "4rem" }}>
                                <h3 className="serif" style={{ marginBottom: "2rem", borderLeft: "4px solid var(--primary-gold)", paddingLeft: "1rem" }}>Our Markets</h3>
                                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
                                    {service.markets.map((market, idx) => (
                                        <div key={idx} style={{ padding: "1.5rem", background: "var(--bg-light)", borderRadius: "8px" }}>
                                            <h4 style={{ color: "var(--text-heading)", marginBottom: "0.5rem", fontWeight: 700 }}>{market.title}</h4>
                                            <p style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{market.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {/* Ongoing Support */}
                    {service.ongoingSupport && service.ongoingSupport.length > 0 && (
                        <Reveal>
                            <div style={{ marginBottom: "4rem" }}>
                                <h3 className="serif" style={{ marginBottom: "2rem", borderLeft: "4px solid var(--primary-gold)", paddingLeft: "1rem" }}>Ongoing Support</h3>
                                <div style={{ display: "grid", gap: "1.5rem" }}>
                                    {service.ongoingSupport.map((support, idx) => (
                                        <div key={idx} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                            <span style={{ color: "#D4AF37", fontSize: "1.25rem", marginTop: "-0.2rem" }}>•</span>
                                            <div>
                                                <h4 style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{support.title}</h4>
                                                <p style={{ fontSize: "0.95rem" }}>{support.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    )}

                    {/* Why Choose Us */}
                    {service.whyChoose && service.whyChoose.length > 0 && (
                        <Reveal>
                            <div style={{ marginBottom: "4rem" }}>
                                <h3 className="serif" style={{ marginBottom: "2rem", borderLeft: "4px solid var(--primary-gold)", paddingLeft: "1rem" }}>Why Choose Al Aman</h3>
                                <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                                    {service.whyChoose.map((point, idx) => (
                                        <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                            <span style={{ color: "#D4AF37", fontSize: "1.25rem" }}>✓</span>
                                            <span style={{ lineHeight: 1.6 }}>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    )}

                    {/* Closing CTA */}
                    <Reveal>
                        <div style={{ 
                            marginTop: "3rem", 
                            padding: "3rem", 
                            background: "linear-gradient(135deg, var(--card-bg) 0%, rgba(212, 175, 55, 0.1) 100%)", 
                            borderRadius: "12px", 
                            textAlign: "center", 
                            border: "1px solid var(--primary-gold)" 
                        }}>
                            <h2 className="serif" style={{ marginBottom: "1rem" }}>Ready to Discuss Your Needs?</h2>
                            <p style={{ marginBottom: "2rem", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
                                Whether you're establishing a new entity, preserving family wealth, launching an investment fund, or expanding into new markets, Al Aman Trust Services delivers the expertise and support you need.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                                    <Link href="/contact" className="btn">
                                        Schedule a Consultation
                                    </Link>
                                    <Link href="/services" className="btn" style={{ background: "transparent", color: "var(--navy)", border: "2px solid var(--navy)" }}>
                                        Explore All Services
                                    </Link>
                                </div>
                                <div style={{ fontSize: "0.9rem", marginTop: "1rem", opacity: 0.8 }}>
                                    <p>Contact us to explore how our Shariah-compliant solutions can serve your unique objectives.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
