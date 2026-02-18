import React from 'react';
import Link from 'next/link';
import styles from '../../styles/service-pages.module.css';

export const metadata = {
    title: 'Private Client Services | Al-Aman Trust Services',
    description: 'Bespoke private client services including wealth planning, trusts, foundations, and family office solutions.',
};

export default function PrivateClientAdvisoryPage() {
    return (
        <div className={styles.servicePage}>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/services">Services</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>Private Client Services</span>
                </div>
                
                <div className={styles.heroContent}>
                    <div className={styles.heroNumber}>02</div>
                    <div className={styles.heroText}>
                        <div className={styles.serviceCategory}>WEALTH PRESERVATION</div>
                        <h1 className={styles.pageTitle}>Private Client Services</h1>
                        <p className={styles.pageSubtitle}>
                            Wealth is more than assets—it&apos;s about values, legacy, and the future you envision for your family. Our private client services combine sophisticated structuring with Shariah-compliant principles to protect what you&apos;ve built and ensure your legacy endures across generations.
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
                                Your wealth deserves more than standard planning. At Al-Aman Trust Services, we deliver bespoke private client solutions that align with your values, protect your assets, and honor your family&apos;s legacy through generations.
                            </p>
                            <br />
                            <p>
                                From wealth planning to trust management, from private funds to multi-family office services—we provide the discretion, expertise, and Shariah-compliant frameworks you need to preserve and grow your family&apos;s prosperity.
                            </p>
                        </div>
                        
                        <div className={styles.overviewStats}>
                            <div className={styles.statTitle}>PRIVATE CLIENT EXPERTISE</div>
                            <div className={styles.statGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>6</div>
                                    <div className={styles.statLabel}>Specialized Services</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>100%</div>
                                    <div className={styles.statLabel}>Confidential</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>3+</div>
                                    <div className={styles.statLabel}>Generations Served</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>24/7</div>
                                    <div className={styles.statLabel}>Dedicated Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Private Client Services</h2>
                    <div className={styles.sectionCount}>6 WEALTH SOLUTIONS</div>
                </div>

                <div className={styles.serviceList}>
                    {/* Service 1 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>01</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Wealth Planning & Strategy</h3>
                                <p className={styles.serviceDescription}>
                                    Holistic wealth planning aligning financial structures with personal values and family objectives for sustainable multi-generational prosperity.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Comprehensive Wealth Assessment</li>
                                    <li>Asset Protection Strategies</li>
                                    <li>Tax-Efficient Structuring</li>
                                    <li>Succession Planning</li>
                                    <li>Family Governance Advisory</li>
                                    <li>Generational Wealth Transfer</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>02</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Trust & Foundation Management</h3>
                                <p className={styles.serviceDescription}>
                                    Professional establishment and administration of trusts and foundations for asset protection and seamless wealth transfer across generations.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Structure Selection & Design</li>
                                    <li>Trust Deed Drafting</li>
                                    <li>Professional Trustee Services</li>
                                    <li>Beneficiary Management</li>
                                    <li>Comprehensive Trust Accounting</li>
                                    <li>Distribution Oversight</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>03</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Private Fund Set-ups</h3>
                                <p className={styles.serviceDescription}>
                                    Bespoke private fund structures for family investment vehicles and exclusive investor groups with full regulatory compliance.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Custom Fund Design</li>
                                    <li>Formation & Licensing</li>
                                    <li>Offering Documentation</li>
                                    <li>Fund Administration</li>
                                    <li>Investor Relations</li>
                                    <li>Performance Reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>04</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Accounting for Private Clients</h3>
                                <p className={styles.serviceDescription}>
                                    Discreet, comprehensive accounting services for personal wealth management with complete confidentiality and precision.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Personal Asset Accounting</li>
                                    <li>Investment Portfolio Tracking</li>
                                    <li>Multi-Entity Reporting</li>
                                    <li>Consolidated Statements</li>
                                    <li>Tax Documentation</li>
                                    <li>Confidential Reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>05</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Universal Life Insurance Structuring</h3>
                                <p className={styles.serviceDescription}>
                                    Strategic advice on universal life insurance as a wealth preservation tool within Shariah-compliant frameworks.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Insurance Needs Assessment</li>
                                    <li>Policy Optimization</li>
                                    <li>Premium Funding Strategies</li>
                                    <li>Trust Integration</li>
                                    <li>Shariah Compliance Review</li>
                                    <li>Estate Tax Mitigation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>06</div>
                            <div className={styles.indexTotal}>/ 06</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Multi-Family Office Services</h3>
                                <p className={styles.serviceDescription}>
                                    Comprehensive family office solutions serving multiple families with shared infrastructure and dedicated expertise.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Investment Management Coordination</li>
                                    <li>Financial Consolidation</li>
                                    <li>Concierge Services</li>
                                    <li>Next-Generation Education</li>
                                    <li>Professional Network Access</li>
                                    <li>Family Governance Support</li>
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
                        <h2>Our Wealth Planning Process</h2>
                        <p>A personalized approach to preserving and growing family wealth across generations</p>
                    </div>
                    
                    <div className={styles.processTimeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepTitle}>Discovery</div>
                            <div className={styles.stepDescription}>
                                Deep understanding of your family&apos;s values, goals, wealth situation, and legacy aspirations through confidential consultation.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepTitle}>Design</div>
                            <div className={styles.stepDescription}>
                                Custom wealth structures that align with your objectives while ensuring Shariah compliance and optimal tax efficiency.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepTitle}>Implementation</div>
                            <div className={styles.stepDescription}>
                                Professional execution of trusts, foundations, and wealth vehicles with complete documentation and regulatory compliance.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepTitle}>Stewardship</div>
                            <div className={styles.stepDescription}>
                                Ongoing management, reporting, and advisory to ensure your wealth serves your family&apos;s needs across generations.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className={styles.whyChoose}>
                <div className={styles.whyGrid}>
                    <div className={styles.whyContent}>
                        <h2>Why Choose Al-Aman for Private Client Services</h2>
                        <p className={styles.whyText}>
                            We combine deep expertise in wealth preservation with an unwavering commitment to confidentiality, Shariah compliance, and your family&apos;s unique values and vision.
                        </p>
                    </div>
                    
                    <div className={styles.whyBenefits}>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Absolute Discretion</div>
                                <div className={styles.benefitDescription}>
                                    Complete confidentiality in all aspects of wealth planning and family office services.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Multi-Generational Perspective</div>
                                <div className={styles.benefitDescription}>
                                    Structures designed to preserve wealth and values across three or more generations.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Shariah-Compliant Excellence</div>
                                <div className={styles.benefitDescription}>
                                    Deep understanding of Islamic finance principles integrated into all wealth structures.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Personalized Service</div>
                                <div className={styles.benefitDescription}>
                                    Dedicated relationship managers who understand your family&apos;s unique needs and aspirations.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to Preserve Your Family Legacy?</h2>
                    <p className={styles.ctaText}>
                        Let&apos;s discuss how our private client services can protect your wealth and honor your family&apos;s values across generations.
                    </p>
                    
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.btnPrimary}>Schedule Private Consultation</Link>
                        <Link href="#" className={styles.btnSecondary}>Request Information</Link>
                    </div>
                    
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Email</div>
                            <div className={styles.contactValue}>private@alamantrust.com</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Phone</div>
                            <div className={styles.contactValue}>+60 123 456 789</div>
                        </div>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Location</div>
                            <div className={styles.contactValue}>Labuan IBFC, Malaysia</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
