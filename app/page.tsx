import Reveal from "@/components/Reveal";
import Link from 'next/link';
import BannerSlider from "@/components/BannerSlider";

export default function Home() {
    return (
        <>
            <BannerSlider 
                slides={[
                    {
                        type: 'video',
                        src: '/video/hero-video.mp4',
                        title: 'Trust in <span class="gold">Excellence</span>',
                        subtitle: 'Business and Wealth solutions in line with your faith'
                    },
                    {
                        type: 'image',
                        src: '/images/banner1.png',
                        title: 'Corporate <span class="gold">Leadership</span>',
                        subtitle: 'Empowering Decisions with Integrity'
                    },
                    {
                        type: 'image',
                        src: '/images/banner2.png',
                        title: 'Premium <span class="gold">Wealth</span> Management',
                        subtitle: 'Securing Your Legacy for Generations'
                    },
                    {
                        type: 'image',
                        src: '/images/banner3.png',
                        title: 'Global <span class="gold">Vision</span>',
                        subtitle: 'Connecting Tradition with Modern Success'
                    }
                ]}
            />

            <section className="section">
                <div className="section-header">
                    <Reveal>
                        <h2 className="serif">Our commitment to <span className="gold">ethics</span></h2>
                        <p>Al Aman Trust is dedicated to providing tailored corporate solutions that align with Shariah law. Our mission is to empower businesses and clients with ethical, compliant options while fostering a culture of trust and integrity.</p>
                    </Reveal>
                </div>
                <div className="grid">
                    <Reveal>
                        <Link href="/services/corporate-solutions" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-1.png" alt="Business Solutions" className="card-image" />
                            <div className="card-body">
                                <h3>Tailored Business Solutions</h3>
                                <p>Customized strategies designed to empower your business growth while maintaining strict Shariah compliance.</p>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <Link href="/services/fund-services" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-2.png" alt="Fund Services" className="card-image" />
                            <div className="card-body">
                                <h3>Fund Services</h3>
                                <p>Manage your investments ethically and efficiently with our expert fund administration and compliance team.</p>
                            </div>
                        </Link>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <Link href="/services/private-client-advisory" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="/images/service-3.png" alt="Private Client" className="card-image" />
                            <div className="card-body">
                                <h3>Private Client Advisory</h3>
                                <p>Personalized guidance for your financial journey, ensuring your wealth management aligns with your values.</p>
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
