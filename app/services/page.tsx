import Reveal from "@/components/Reveal";
import type { Metadata } from "next";
import styles from "./services.module.css";

export const metadata: Metadata = {
    title: 'Services | Al-Aman Trust',
};

export default function Services() {
    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroLeft}>
                    <Reveal>
                        <div className={styles.heroNumber}>01</div>
                        <h1 className={styles.heroTitle}>Solutions That Honor Values</h1>
                        <p className={styles.heroSubtitle}>SHARIAH-COMPLIANT EXCELLENCE</p>
                    </Reveal>
                </div>
                <div className={styles.heroRight}>
                    <Reveal>
                        <p className={styles.heroIntro}>
                            Bespoke strategies that reflect your values and long-term vision, grounded in Shariah compliance and regulatory excellence.
                        </p>
                        <div className={styles.statsGrid}>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>15+</div>
                                <div className={styles.statLabel}>Years Experience</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>500+</div>
                                <div className={styles.statLabel}>Clients Served</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>3</div>
                                <div className={styles.statLabel}>Key Markets</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statNumber}>100%</div>
                                <div className={styles.statLabel}>Compliance Rate</div>
                            </div>
                        </div>
                        <a href="#services" className={styles.heroCta}>EXPLORE SERVICES</a>
                    </Reveal>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.servicesSection} id="services">
                <div className={styles.sectionHeader}>
                    <Reveal>
                        <div className={styles.sectionLabel}>OUR SOLUTIONS</div>
                        <h2 className={styles.sectionTitle}>Comprehensive Services for Modern Businesses</h2>
                    </Reveal>
                </div>
                
                <div className={styles.servicesScroll}>
                    <Reveal>
                        <div className={styles.serviceCardAlt}>
                            <div className={styles.serviceNumberSmall}>01 / CORPORATE</div>
                            <h3 className={styles.serviceTitleAlt}>Corporate Services</h3>
                            <p className={styles.serviceDescAlt}>
                                Comprehensive management of your business lifecycle, from tax efficiency to stringent regulatory compliance.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Business Setup & Soft-Landing</li>
                                <li>Accounting & Tax Services</li>
                                <li>Compliance & Substance</li>
                                <li>Corporate Secretarial</li>
                            </ul>
                            <a href="/services/corporate-solutions" className={styles.serviceLink}>Learn More →</a>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className={styles.serviceCardAlt}>
                            <div className={styles.serviceNumberSmall}>02 / PRIVATE WEALTH</div>
                            <h3 className={styles.serviceTitleAlt}>Private Client Services</h3>
                            <p className={styles.serviceDescAlt}>
                                Sophisticated wealth structuring for individuals and families within Shariah-compliant frameworks.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Wealth Planning & Strategy</li>
                                <li>Trust & Foundation Management</li>
                                <li>Private Funds Setup</li>
                                <li>Multi-Family Office</li>
                            </ul>
                            <a href="/services/private-client-advisory" className={styles.serviceLink}>Learn More →</a>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className={styles.serviceCardAlt}>
                            <div className={styles.serviceNumberSmall}>03 / FUNDS</div>
                            <h3 className={styles.serviceTitleAlt}>Fund Services</h3>
                            <p className={styles.serviceDescAlt}>
                                Launch and manage investment vehicles with precision and regulatory knowledge.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Private & Public Fund Setup</li>
                                <li>Fund Administration</li>
                                <li>Client Onboarding & Compliance</li>
                                <li>Company Secretary for Funds</li>
                            </ul>
                            <a href="/services/fund-services" className={styles.serviceLink}>Learn More →</a>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className={styles.serviceCardAlt}>
                            <div className={styles.serviceNumberSmall}>04 / EXPANSION</div>
                            <h3 className={styles.serviceTitleAlt}>Soft-Landing Services</h3>
                            <p className={styles.serviceDescAlt}>
                                Transform market entry ambitions into operational realities across high-growth markets.
                            </p>
                            <ul className={styles.serviceList}>
                                <li>Market Entry Strategy</li>
                                <li>Setup & Licensing</li>
                                <li>Business Localization</li>
                                <li>Regulatory Navigation</li>
                            </ul>
                            <a href="/services/business-soft-landing" className={styles.serviceLink}>Learn More →</a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Footer CTA */}
            <section className={styles.footerCta}>
                <Reveal>
                    <h2 className={styles.footerCtaTitle}>Ready to Connect?</h2>
                    <p className={styles.footerCtaText}>Let's discuss how our Shariah-compliant solutions can serve your unique objectives.</p>
                    <a href="/contact" className={styles.footerBtn}>SCHEDULE CONSULTATION</a>
                </Reveal>
            </section>
        </div>
    );
}
