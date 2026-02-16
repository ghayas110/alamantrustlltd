import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { ShieldCheck, Users, Eye, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: 'About | Al Aman Trust',
    description: 'Learn about Al Aman Trust Services, a licensed managed trust company in Labuan, Malaysia, backed by the RUSD Group.',
};

export default function About() {
    return (
        <>
            <section className="section-tight">
                <div className="grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
                    <Reveal>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '0.75rem' }}>About Us</span>
                            <h2 className="serif" style={{ marginBottom: '1rem' }}>Who We Are</h2>
                        </div>
                        <h3 className="serif" style={{ marginBottom: '2rem' }}>Built on <span className="gold">Trust</span>, Backed by <span className="gold">Strength</span></h3>
                        <p style={{ marginBottom: '1.75rem' }}>
                            Al Aman Trust Services is a licensed managed trust company dedicated to providing bespoke solutions in today's evolving business landscape. Based in the premier midshore jurisdiction of Labuan, Malaysia, we are regulated by the Labuan Financial Services Authority (Labuan FSA).
                        </p>
                        <p style={{ marginBottom: '1.75rem' }}>
                            We operate as a wholly owned subsidiary of Rusd Investment Bank Inc., a premier Islamic investment bank, and are a proud member of the RUSD Group. This affiliation allows us to combine local expertise with the global strength and ethical foundations of a leading international conglomerate.
                        </p>
                         <p>
                            Operating from Labuan's strategic international business and financial hub, we serve as your trusted partner in navigating the complexities of modern wealth structuring, corporate services, and fund administration. Our foundation in Islamic principles, combined with international best practices, allows us to deliver solutions that honor tradition while embracing innovation.
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                         <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--primary-gold)',
                                borderRadius: '20px',
                                zIndex: 0
                            }}></div>
                            <img 
                                src="/images/business-soft-landing-home.png" 
                                alt="Al Aman Trust" 
                                style={{ 
                                    width: '100%', 
                                    borderRadius: '20px', 
                                    position: 'relative', 
                                    zIndex: 1,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }} 
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

             <section className="section-tight" style={{ background: 'var(--bg-light)' }}>
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <Reveal>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '-20px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--primary-gold)',
                                borderRadius: '20px',
                                zIndex: 0
                            }}></div>
                            <img 
                                src="/images/rusd-heritage.png" 
                                alt="The RUSD Connection" 
                                style={{ 
                                    width: '100%', 
                                    borderRadius: '20px', 
                                    position: 'relative', 
                                    zIndex: 1,
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }} 
                            />
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                         <h3 className="serif" style={{ marginBottom: '2rem' }}>Our Heritage: <span className="gold">The RUSD Connection</span></h3>
                         <p style={{ marginBottom: '1.75rem' }}>
                            The RUSD Group, headquartered in Saudi Arabia, has been a pioneer in Shariah-compliant services since 2002. The name "RUSD" reflects a commitment to reviving flexible Islamic economic jurisprudence for the modern era—bridging the gap between tradition and innovation. 
                        </p>
                        <p>
                            At Al Aman, we carry this legacy forward by ensuring all our operations adhere to the highest standards of corporate governance, ethical conduct, and transparency.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-tight">
                 <div className="section-header">
                    <Reveal>
                        <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', color: 'var(--primary-gold-dark)' }}>Core Values</span>
                        <h2 className="serif" style={{ color: 'var(--text-on-light)' }}>Our <span style={{ color: 'var(--primary-gold-dark)' }}>Principles</span></h2>
                         <p style={{ maxWidth: '800px', margin: '2rem 0 0', textAlign: 'left' }}>
                            Our growth is driven by a dynamic, highly experienced team respected across their respective fields. At RUSD, we maintain stringent corporate governance standards anchored in:
                        </p>
                    </Reveal>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem', gap: '2rem' }}>
                    {[
                        { title: "Ethical Conduct", desc: "Unwavering integrity in every interaction.", icon: ShieldCheck, isFeatured: true },
                        { title: "Fairness", desc: "Equitable treatment of all stakeholders.", icon: Users },
                        { title: "Transparency", desc: "Clear communication and open processes.", icon: Eye },
                        { title: "Accountability", desc: "Responsibility for our actions and outcomes.", icon: CheckCircle }
                    ].map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div style={{ 
                                padding: '2rem', 
                                background: item.isFeatured ? 'var(--bg-dark)' : 'white', 
                                borderRadius: '16px', 
                                color: item.isFeatured ? 'white' : 'var(--text-on-light)', 
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                boxShadow: item.isFeatured ? '0 10px 30px rgba(0,0,0,0.2)' : '0 4px 15px rgba(0,0,0,0.05)',
                                border: item.isFeatured ? 'none' : '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div style={{
                                    background: item.isFeatured ? 'rgba(197, 164, 115, 0.2)' : 'rgba(197, 164, 115, 0.1)',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <item.icon size={32} color={item.isFeatured ? 'var(--primary-gold-dark)' : 'var(--primary-gold)'} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: item.isFeatured ? '800' : '700', color: item.isFeatured ? 'var(--primary-gold-dark)' : 'var(--primary-gold)' }}>{item.title}</h3>
                                    <p style={{ opacity: item.isFeatured ? 0.9 : 1, fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
                 <div style={{ marginTop: '3rem', textAlign: 'left', paddingLeft: '1.5rem', borderLeft: '3px solid var(--primary-gold-dark)' }}>
                     <Reveal>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-on-light)', margin: 0 }}>"These principles guide our day-to-day operations and ensure that trust remains at the heart of everything we do."</p>
                    </Reveal>
                 </div>
            </section>

            <section className="section-tight" style={{ background: 'var(--bg-light)' }}>
                <div className="section-header" style={{ maxWidth: '100%' }}>
                    <Reveal>
                        <h2 className="serif">Why Choose <span className="gold">Al Aman Trust Services</span></h2>
                    </Reveal>
                </div>
                
                 <div className="grid-3" style={{ marginTop: '2rem' }}>
                    {[
                        { title: "Regulatory Certainty", desc: "Full licensing and oversight by Labuan FSA" },
                        { title: "Shariah Compliance", desc: "Structures and solutions aligned with Islamic principles" },
                        { title: "Group Strength", desc: "The backing of the diversified RUSD Group" },
                        { title: "Tailored Solutions", desc: "Services customized to your specific requirements" },
                        { title: "Strategic Location", desc: "Access to Asia's opportunities through Labuan's international platform" },
                        { title: "Experienced Team", desc: "Professionals with deep expertise in trust, corporate, and fund services" }
                    ].map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                             <div style={{ 
                                padding: '2rem', 
                                background: 'white', 
                                borderRadius: '12px', 
                                height: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <h3 className="gold" style={{ marginBottom: '1rem' }}>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
                <div style={{ marginTop: '3rem', textAlign: 'left', paddingLeft: '1.5rem', borderLeft: '3px solid var(--primary-gold-dark)' }}>
                    <Reveal>
                        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--text-on-light)', margin: 0 }}>"Al Aman Trust Services Limited is committed to delivering excellence in trust and corporate services while upholding the highest standards of governance, transparency, and client care."</p>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
