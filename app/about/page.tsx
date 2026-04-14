import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { getCMSContent } from "@/app/actions/cms";

export const metadata: Metadata = {
    title: 'About | Al-Aman Trust',
    description: 'Learn about Al-Aman Trust Services, a licensed managed trust company in Labuan, Malaysia, backed by the RUSD Group.',
};

export default async function About() {

    const defaultAbout = { 
        hero: { mainTitle: "Building Legacies Through Visionary Advisory", details: "Al-Aman Trust Ltd bridges classical investment structures with highly bespoke modern strategies.", targetImage: "/images/business-soft-landing-home.png" },
        heritage: { title: "Our Heritage: The RUSD Connection", text: "The RUSD Group, headquartered in Saudi Arabia, has been a pioneer in Shariah-compliant services since 2002. At Al-Aman, we carry this legacy forward.", image: "/images/rusd-heritage-new.png" },
        principles: [
            { title: "Ethical Conduct", desc: "Unwavering integrity in every interaction." },
            { title: "Fairness", desc: "Equitable treatment of all stakeholders." },
            { title: "Transparency", desc: "Clear communication and open processes." },
            { title: "Accountability", desc: "Responsibility for our actions and outcomes." }
        ],
        whyChoose: [
            { title: "Regulatory Certainty", desc: "Full licensing and oversight by Labuan FSA" },
            { title: "Shariah Compliance", desc: "Structures and solutions aligned with Islamic principles" },
            { title: "Group Strength", desc: "The backing of the diversified RUSD Group" },
            { title: "Tailored Solutions", desc: "Services customized to your specific requirements" },
            { title: "Strategic Location", desc: "Access to Asia's opportunities through Labuan's platform" },
            { title: "Experienced Team", desc: "Professionals with deep expertise in trust services" }
        ]
    };
    const aboutContent = await getCMSContent("about", "us", defaultAbout);

    return (
        <>
            <section className="section-tight">
                <div className="grid-2" style={{ alignItems: 'start', gap: '4rem' }}>
                    <Reveal>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '0.75rem' }}>About Us</span>
                            <h2 className="serif" style={{ marginBottom: '1rem' }}>Who We Are</h2>
                        </div>
                        <h3 className="serif" style={{ marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: aboutContent.hero?.mainTitle || defaultAbout.hero.mainTitle }}></h3>
                        <p style={{ marginBottom: '1.75rem', whiteSpace: 'pre-line' }}>
                            {aboutContent.hero?.details || defaultAbout.hero.details}
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                         <div style={{ position: 'relative', padding: '1rem' }}>
                            <div style={{
                                position: 'absolute', top: '0', right: '0', width: '80%', height: '80%',
                                background: 'rgba(197, 164, 115, 0.1)', borderRadius: '20px', zIndex: 0
                            }}></div>
                            <img 
                                src={aboutContent.hero?.targetImage || defaultAbout.hero.targetImage} 
                                alt="Al-Aman Trust" 
                                style={{ width: '100%', borderRadius: '20px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                            />
                            <div style={{
                                position: 'absolute', bottom: '-10px', left: '-10px', width: '100px', height: '100px',
                                borderLeft: '4px solid var(--primary-gold)', borderBottom: '4px solid var(--primary-gold)',
                                borderRadius: '0 0 0 20px', zIndex: 2
                            }}></div>
                        </div>
                    </Reveal>
                </div>
            </section>

             <section className="section-tight" style={{ background: 'var(--bg-light)' }}>
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <Reveal>
                        <div style={{ position: 'relative', padding: '1rem' }}>
                            <div style={{
                                position: 'absolute', bottom: '0', left: '0', width: '80%', height: '80%',
                                background: 'rgba(197, 164, 115, 0.1)', borderRadius: '20px', zIndex: 0
                            }}></div>
                            <img 
                                src={aboutContent.heritage?.image || defaultAbout.heritage.image} 
                                alt="The RUSD Connection" 
                                style={{ width: '100%', borderRadius: '20px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
                            />
                            <div style={{
                                position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px',
                                borderRight: '4px solid var(--primary-gold)', borderTop: '4px solid var(--primary-gold)',
                                borderRadius: '0 20px 0 0', zIndex: 2
                            }}></div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                         <h3 className="serif" style={{ marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: aboutContent.heritage?.title || defaultAbout.heritage.title }}></h3>
                         <p style={{ marginBottom: '1.75rem', whiteSpace: 'pre-line' }}>
                            {aboutContent.heritage?.text || defaultAbout.heritage.text}
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="section-tight">
                 <div className="section-header">
                    <Reveal>
                        <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', color: 'var(--primary-gold-dark)' }}>Core Values</span>
                        <h2 className="serif" style={{ color: 'var(--text-on-light)' }}>Our <span style={{ color: 'var(--primary-gold-dark)' }}>Principles</span></h2>
                    </Reveal>
                </div>

                <div className="grid-2" style={{ marginTop: '2rem', gap: '2rem' }}>
                    {(aboutContent.principles || defaultAbout.principles).map((item: any, index: number) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div style={{ 
                                padding: '2rem', background: 'white', borderRadius: '16px', color: 'var(--text-on-light)', 
                                display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ background: 'rgba(197, 164, 115, 0.1)', padding: '1rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <ShieldCheck size={32} color='var(--primary-gold)' strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary-gold)' }}>{item.title}</h3>
                                    <p style={{ fontSize: '0.95rem' }}>{item.desc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
                 <div style={{ marginTop: '3rem', textAlign: 'left', paddingLeft: '1.5rem', borderLeft: '3px solid var(--primary-gold-dark)' }}>
                     <Reveal>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-on-light)', margin: 0 }}>These principles guide our day-to-day operations and ensure that trust remains at the heart of everything we do.</p>
                    </Reveal>
                 </div>
            </section>

            <section className="section-tight" style={{ background: 'var(--bg-light)' }}>
                <div className="section-header" style={{ maxWidth: '100%' }}>
                    <Reveal>
                        <h2 className="serif">Why Choose <span className="gold">Al-Aman Trust Services</span></h2>
                    </Reveal>
                </div>
                
                 <div className="grid-3" style={{ marginTop: '2rem' }}>
                    {(aboutContent.whyChoose || defaultAbout.whyChoose).map((item: any, index: number) => (
                        <Reveal key={index} delay={index * 0.1}>
                             <div style={{ 
                                padding: '2rem', background: 'white', borderRadius: '12px', height: '100%',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <h3 className="gold" style={{ marginBottom: '1rem' }}>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
