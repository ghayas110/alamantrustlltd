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
            <section
                style={{
                    position: "relative",
                    height: "60vh",
                    minHeight: "400px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                <img
                    src={service.image}
                    alt={service.title}
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.8))",
                    }}
                />
                <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 1rem" }}>
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
                    <Reveal>
                        <div style={{ marginBottom: "3rem" }}>
                            {service.fullDescription.split("\n\n").map((paragraph, idx) => (
                                <p key={idx} style={{ marginBottom: "1.5rem", lineHeight: 1.8, color: "var(--text-body)" }}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal>
                        <h2 className="serif" style={{ marginBottom: "1.5rem" }}>
                            Key <span className="gold">Features</span>
                        </h2>
                        <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "1rem" }}>
                            {service.features.map((feature, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "1rem",
                                        padding: "1rem",
                                        background: "var(--card-bg)",
                                        borderRadius: "8px",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    <span style={{ color: "#D4AF37", fontSize: "1.25rem" }}>✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    <Reveal>
                        <div style={{ marginTop: "3rem", textAlign: "center" }}>
                            <Link href="/contact" className="btn">
                                Get Started
                            </Link>
                            <Link
                                href="/services"
                                style={{
                                    marginLeft: "1rem",
                                    color: "var(--text-body)",
                                    textDecoration: "underline",
                                }}
                            >
                                View All Services
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
