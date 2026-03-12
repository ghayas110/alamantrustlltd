import React from 'react';
import Link from 'next/link';
import styles from '../../styles/service-pages.module.css';

export const metadata = {
    title: 'Fund Services | Al-Aman Trust Services',
    description: 'Professional fund administration services in Labuan including fund setup, NAV calculation, and compliance.',
};

export default function FundServicesPage() {
    return (
        <div className={styles.servicePage}>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/services">Services</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>Fund Services</span>
                </div>
                
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <div className={styles.serviceCategory}>INVESTMENT EXCELLENCE</div>
                        <h1 className={styles.pageTitle}>Fund Services</h1>
                        <p className={styles.pageSubtitle}>
                            Launch and operate investment funds with confidence. Our fund services deliver the technical precision, regulatory knowledge, and operational infrastructure required for successful fund management—allowing you to focus on investment performance while we ensure operational excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className={styles.overview}>
                <div className={styles.container}>
                    <div className={styles.overviewGrid}>
                        <div className={styles.overviewText}>
                            <p>
                                Your investment strategy deserves exceptional operational support. At Al-Aman Trust Services, we deliver comprehensive fund administration that combines technical expertise with regulatory precision.
                            </p>
                            <br />
                            <p>
                                From fund setup to daily administration, from investor onboarding to secretarial services—we provide the infrastructure and expertise to support seamless fund operations in compliance-focused jurisdictions.
                            </p>
                        </div>
                        
                        <div className={styles.overviewStats}>
                            <div className={styles.statTitle}>FUND ADMINISTRATION</div>
                            <div className={styles.statGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>4</div>
                                    <div className={styles.statLabel}>Core Services</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>100%</div>
                                    <div className={styles.statLabel}>Accuracy Rate</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>Daily</div>
                                    <div className={styles.statLabel}>NAV Calculations</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Service Categories</h2>
                </div>

                <div className={styles.serviceList}>
                    {/* Service 1 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Private and Public Fund Set-up</h3>
                                <p className={styles.serviceDescription}>
                                    End-to-end fund establishment covering structure selection, regulatory approval, and operational readiness for both private and public investment vehicles.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Fund Structure Advisory</li>
                                    <li>Licensing Applications</li>
                                    <li>Offering Memorandum Drafting</li>
                                    <li>Service Provider Coordination</li>
                                    <li>Launch Project Management</li>
                                    <li>Regulatory Compliance Setup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Fund Administration</h3>
                                <p className={styles.serviceDescription}>
                                    Comprehensive middle and back-office services ensuring accurate fund accounting, valuation, and reporting to the highest professional standards.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Daily Fund Accounting</li>
                                    <li>NAV Calculation & Verification</li>
                                    <li>Financial Statement Preparation</li>
                                    <li>Regulatory Reporting</li>
                                    <li>Investor Capital Account Management</li>
                                    <li>Performance Attribution</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Client Onboarding & Compliance</h3>
                                <p className={styles.serviceDescription}>
                                    Robust investor onboarding, KYC/AML compliance, and ongoing monitoring aligned with international standards and regulatory requirements.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Investor Due Diligence</li>
                                    <li>AML/CFT Screening</li>
                                    <li>Subscription Processing</li>
                                    <li>Beneficial Ownership Identification</li>
                                    <li>Ongoing Compliance Reviews</li>
                                    <li>Regulatory Updates & Training</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Company Secretary for Funds</h3>
                                <p className={styles.serviceDescription}>
                                    Professional company secretarial services for fund vehicles ensuring corporate governance and full regulatory compliance.
                                </p>

                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Statutory Register Maintenance</li>
                                    <li>Board Meeting Coordination</li>
                                    <li>Resolution Preparation</li>
                                    <li>Annual Regulatory Filings</li>
                                    <li>Corporate Governance Advisory</li>
                                    <li>Document Management</li>
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
                        <h2>Fund Launch Process</h2>
                        <p>A proven methodology for establishing and operating successful investment funds</p>
                    </div>
                    
                    <div className={styles.processTimeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepTitle}>Structuring</div>
                            <div className={styles.stepDescription}>
                                Strategic fund design aligned with investment strategy, target investors, and regulatory requirements.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepTitle}>Documentation</div>
                            <div className={styles.stepDescription}>
                                Comprehensive preparation of offering documents, agreements, and regulatory submissions.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepTitle}>Launch</div>
                            <div className={styles.stepDescription}>
                                Coordinated execution of licensing, operational setup, and investor onboarding processes.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepTitle}>Operations</div>
                            <div className={styles.stepDescription}>
                                Daily administration, reporting, and compliance management supporting long-term fund success.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className={styles.whyChoose}>
                <div className={styles.whyGrid}>
                    <div className={styles.whyContent}>
                        <h2>Why Choose Al-Aman for Fund Services</h2>
                        <p className={styles.whyText}>
                            We combine technical fund administration expertise with deep regulatory knowledge and Shariah compliance capabilities, delivering operational excellence for institutional fund managers.
                        </p>
                    </div>
                    
                    <div className={styles.whyBenefits}>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Technical Precision</div>
                                <div className={styles.benefitDescription}>
                                    Daily NAV calculations, portfolio accounting, and financial reporting to institutional standards.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Regulatory Excellence</div>
                                <div className={styles.benefitDescription}>
                                    Deep knowledge of Labuan IBFC regulations and international compliance requirements.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Shariah Compliance</div>
                                <div className={styles.benefitDescription}>
                                    Specialized expertise in Islamic fund structures and ongoing Shariah compliance monitoring.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Scalable Infrastructure</div>
                                <div className={styles.benefitDescription}>
                                    Technology and processes designed to support fund growth from launch through maturity.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to Launch Your Fund?</h2>
                    <p className={styles.ctaText}>
                        Lets discuss how our fund administration services can support your investment strategy and operational needs.
                    </p>
                    
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.btnPrimary}>Schedule Consultation</Link>
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
