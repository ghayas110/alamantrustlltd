import React from 'react';
import Link from 'next/link';
import styles from '../../styles/service-pages.module.css';

export const metadata = {
    title: 'Business Support & Soft-Landing Services | Al-Aman Trust Services',
    description: 'Market entry and soft-landing services for expanding into Saudi Arabia, UAE, and Malaysia (Labuan IBFC).',
};

export default function SoftLandingServicesPage() {
    return (
        <div className={styles.servicePage}>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/services">Services</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>Soft-Landing Services</span>
                </div>
                
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <div className={styles.serviceCategory}>MARKET EXPANSION</div>
                        <h1 className={styles.pageTitle}>Business Support & Soft-Landing Services</h1>
                        <p className={styles.pageSubtitle}>
                            Expanding into new markets demands local expertise, regulatory knowledge, and operational support. Our soft-landing services transform your market entry plans into compliant, operational realities across three of Asia and the Middle East&apos;s most dynamic markets.
                        </p>
                    </div>
                </div>
            </section>

            {/* Target Markets */}
            <section className={styles.marketsSection}>
                <div className={styles.container}>
                    <div className={styles.marketsIntro}>
                        <h2>Our Target Markets</h2>
                        <p>
                            We specialize in facilitating market entry and expansion across three strategically important jurisdictions, each offering unique advantages for international business growth.
                        </p>
                    </div>

                    <div className={styles.marketsGrid}>
                        <div className={styles.marketCard}>
                            <div className={styles.marketFlag}>🇸🇦</div>
                            <h3 className={styles.marketName}>Saudi Arabia</h3>
                            <p className={styles.marketDescription}>
                                Vision 2030 is transforming the Kingdom into a global business hub with massive infrastructure investment and economic diversification.
                            </p>
                        </div>

                        <div className={styles.marketCard}>
                            <div className={styles.marketFlag}>🇦🇪</div>
                            <h3 className={styles.marketName}>United Arab Emirates</h3>
                            <p className={styles.marketDescription}>
                                A strategic gateway between East and West, offering world-class infrastructure, favorable tax regimes, and regional market access.
                            </p>
                        </div>

                        <div className={styles.marketCard}>
                            <div className={styles.marketFlag}>🇲🇾</div>
                            <h3 className={styles.marketName}>Malaysia (Labuan IBFC)</h3>
                            <p className={styles.marketDescription}>
                                ASEAN&apos;s financial hub with strong Islamic finance leadership, political stability, and competitive business costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Service Categories</h2>
                    <div className={styles.sectionCount}>COMPREHENSIVE MARKET ENTRY</div>
                </div>

                <div className={styles.serviceList}>
                    {/* Service 1 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Strategic Market Entry Assessment</h3>
                                <p className={styles.serviceDescription}>
                                    Comprehensive market opportunity assessment and feasibility analysis to ensure informed expansion decisions.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Market Research & Analysis</li>
                                    <li>Regulatory Environment Evaluation</li>
                                    <li>Business Structure Recommendations</li>
                                    <li>Tax & Legal Framework Overview</li>
                                    <li>Timeline & Budget Planning</li>
                                    <li>Risk Assessment & Mitigation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Setup & Licensing Execution</h3>
                                <p className={styles.serviceDescription}>
                                    Complete establishment and regulatory approval, handling all aspects of company formation and licensing.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Company Formation & Registration</li>
                                    <li>License Applications & Approvals</li>
                                    <li>Registered Office Solutions</li>
                                    <li>Bank Account Facilitation</li>
                                    <li>Immigration & Work Permits</li>
                                    <li>Regulatory Compliance Setup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Business Localization Support</h3>
                                <p className={styles.serviceDescription}>
                                    Operational setup for seamless market integration, from staffing to cultural adaptation.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Local Staff Recruitment</li>
                                    <li>Office Space Identification</li>
                                    <li>Utilities & Infrastructure Setup</li>
                                    <li>Vendor & Partner Identification</li>
                                    <li>Cultural Adaptation Guidance</li>
                                    <li>Market Entry Strategy Implementation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className={styles.processSection}>
                <div className={styles.processContainer}>
                    <div className={styles.processHeader}>
                        <h2>Market Entry Process</h2>
                        <p>A proven methodology for establishing successful operations in new markets</p>
                    </div>
                    
                    <div className={styles.processTimeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepTitle}>Assessment</div>
                            <div className={styles.stepDescription}>
                                Comprehensive market analysis, regulatory review, and feasibility assessment to validate your expansion strategy.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepTitle}>Establishment</div>
                            <div className={styles.stepDescription}>
                                Company formation, licensing, and regulatory approvals with complete documentation and compliance.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepTitle}>Localization</div>
                            <div className={styles.stepDescription}>
                                Operational setup including office, staffing, banking, and infrastructure for seamless market integration.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepTitle}>Growth</div>
                            <div className={styles.stepDescription}>
                                Ongoing support for expansion, additional licensing, and strategic partnerships to maximize success.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className={styles.whyChoose}>
                <div className={styles.whyGrid}>
                    <div className={styles.whyContent}>
                        <h2>Why Choose Al-Aman for Market Entry</h2>
                        <p className={styles.whyText}>
                            We combine local presence with international best practices, ensuring your market entry is executed efficiently while maintaining full compliance across all jurisdictions.
                        </p>
                    </div>
                    
                    <div className={styles.whyBenefits}>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Local Presence, Global Standards</div>
                                <div className={styles.benefitDescription}>
                                    Boots on the ground in all target markets with international best practices and expertise.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>RUSD Group Network</div>
                                <div className={styles.benefitDescription}>
                                    Leverage regional connections and market knowledge across the Middle East and Asia.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Shariah Compliance Expertise</div>
                                <div className={styles.benefitDescription}>
                                    Unique advantage for Islamic finance structuring and compliant market entry.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>End-to-End Support</div>
                                <div className={styles.benefitDescription}>
                                    One partner from initial assessment through operational maturity and growth.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Proven Track Record</div>
                                <div className={styles.benefitDescription}>
                                    Successful market entry launches across multiple sectors and jurisdictions.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to Expand into New Markets?</h2>
                    <p className={styles.ctaText}>
                        Let&apos;s discuss how our soft-landing services can transform your market entry ambitions into operational realities.
                    </p>
                    
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.btnPrimary}>Schedule Market Entry Consultation</Link>
                        <Link href="/services" className={styles.btnSecondary}>Explore All Services</Link>
                    </div>
                    
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Email</div>
                            <div className={styles.contactValue}>info@alamantrust.com</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Phone</div>
                            <div className={styles.contactValue} style={{ fontSize: '0.9rem' }}>+60 87 599800 / +60 87 452100</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Location</div>
                            <div className={styles.contactValue}>
                                <a href="https://www.google.com/maps/search/?api=1&query=Kensington+Gardens,+No.+U1317,+Lot+7616,+Jalan+Jumidar+Buyong,+87000+Federal+Territory+of+Labuan,+Malaysia" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>
                                    Labuan IBFC, Malaysia
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
