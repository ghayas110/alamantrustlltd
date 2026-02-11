import React from 'react';
import Link from 'next/link';
import styles from '../../styles/service-pages.module.css';

export const metadata = {
    title: 'Corporate Services | Al Aman Trust Services',
    description: 'Comprehensive corporate services in Labuan including company formation, compliance, accounting, and soft-landing solutions.',
};

export default function CorporateSolutionsPage() {
    return (
        <div className={styles.servicePage}>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.breadcrumb}>
                    <Link href="/">Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/services">Services</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>Corporate Services</span>
                </div>
                
                <div className={styles.heroContent}>
                    <div className={styles.heroNumber}>01</div>
                    <div className={styles.heroText}>
                        <div className={styles.serviceCategory}>CORPORATE EXCELLENCE</div>
                        <h1 className={styles.pageTitle}>Corporate Services</h1>
                        <p className={styles.pageSubtitle}>
                            Navigate the complexities of international business with our comprehensive corporate services. From entity formation to ongoing compliance and day-to-day operations, we provide the infrastructure and expertise to support your success.
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
                                Your business ambitions deserve more than standard solutions. At Al Aman Trust Services, we deliver bespoke corporate strategies that reflect your values and long-term vision, all grounded in Shariah compliance and regulatory excellence.
                            </p>
                            <br />
                            <p>
                                From strategic formation to ongoing compliance, from financial management to operational support—we provide the expertise, infrastructure, and strategic guidance you need to thrive in Labuan and beyond.
                            </p>
                        </div>
                        
                        <div className={styles.overviewStats}>
                            <div className={styles.statTitle}>AT A GLANCE</div>
                            <div className={styles.statGrid}>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>7</div>
                                    <div className={styles.statLabel}>Service Categories</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>100%</div>
                                    <div className={styles.statLabel}>Compliance Rate</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>15+</div>
                                    <div className={styles.statLabel}>Years Experience</div>
                                </div>
                                <div className={styles.statItem}>
                                    <div className={styles.statNumber}>24/7</div>
                                    <div className={styles.statLabel}>Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Our Corporate Services</h2>
                    <div className={styles.sectionCount}>7 COMPREHENSIVE SOLUTIONS</div>
                </div>

                <div className={styles.serviceList}>
                    {/* Service 1 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>01</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Business Set-ups & Soft-Landing</h3>
                                <p className={styles.serviceDescription}>
                                    Strategic guidance for establishing your presence in Labuan and key markets. We handle everything from jurisdiction analysis to business banking—so you can focus on growth.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Jurisdiction Analysis & Selection</li>
                                    <li>Company Incorporation</li>
                                    <li>Licensing & Regulatory Approval</li>
                                    <li>Registered Office Facilities</li>
                                    <li>Business Banking Setup</li>
                                    <li>Market Entry Strategy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>02</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Accounting & Tax Services</h3>
                                <p className={styles.serviceDescription}>
                                    Comprehensive financial management tailored to Labuan's favorable tax regime. Delivered by professionals who understand local and international standards.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Monthly Bookkeeping</li>
                                    <li>Tax Planning & Compliance</li>
                                    <li>Management Accounts</li>
                                    <li>Audit Coordination</li>
                                    <li>Financial Reporting</li>
                                    <li>Tax Optimization Strategies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>03</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Compliance & Substance Requirements</h3>
                                <p className={styles.serviceDescription}>
                                    Ensure your entity meets Labuan's substance requirements and maintains regulatory good standing with comprehensive compliance support.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Economic Substance Compliance</li>
                                    <li>Annual Regulatory Filings</li>
                                    <li>AML/CFT Policy Implementation</li>
                                    <li>Beneficial Ownership Reporting</li>
                                    <li>Ongoing Regulatory Monitoring</li>
                                    <li>Compliance Risk Assessment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>04</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Corporate Secretarial Services</h3>
                                <p className={styles.serviceDescription}>
                                    Professional support ensuring statutory compliance and good corporate governance across all your corporate obligations.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Statutory Registers Maintenance</li>
                                    <li>AGM Organization & Minutes</li>
                                    <li>Board Resolutions Drafting</li>
                                    <li>Share Transfer Administration</li>
                                    <li>Corporate Housekeeping</li>
                                    <li>Governance Advisory Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 5 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>05</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Registered Office & Directors</h3>
                                <p className={styles.serviceDescription}>
                                    Professional registered office facilities and nominee director services meeting regulatory requirements while maintaining operational flexibility.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Prime Labuan Business Address</li>
                                    <li>Professional Mail Handling</li>
                                    <li>Meeting Room Facilities</li>
                                    <li>Nominee Director Services</li>
                                    <li>Registered Agent Services</li>
                                    <li>Administrative Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 6 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>06</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>Cash Management Services</h3>
                                <p className={styles.serviceDescription}>
                                    Treasury and cash management solutions optimizing liquidity while maintaining security and full regulatory compliance.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Bank Account Opening Assistance</li>
                                    <li>Payment Processing Services</li>
                                    <li>Cash Flow Monitoring</li>
                                    <li>Multi-Currency Management</li>
                                    <li>Treasury Solutions</li>
                                    <li>Liquidity Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Service 7 */}
                    <div className={styles.serviceItem}>
                        <div className={styles.serviceIndex}>
                            <div className={styles.indexNumber}>07</div>
                            <div className={styles.indexTotal}>/ 07</div>
                        </div>
                        <div className={styles.serviceContent}>
                            <div className={styles.serviceMain}>
                                <h3>HR & Payroll Services</h3>
                                <p className={styles.serviceDescription}>
                                    Complete human resource and payroll administration ensuring compliance with local employment regulations.
                                </p>
                                <Link href="#" className={styles.serviceLink}>LEARN MORE →</Link>
                            </div>
                            <div className={styles.serviceFeatures}>
                                <ul>
                                    <li>Payroll Processing & Administration</li>
                                    <li>Employment Contract Management</li>
                                    <li>Benefits Administration</li>
                                    <li>Work Permits & Visa Support</li>
                                    <li>HR Compliance Management</li>
                                    <li>Employee Records Management</li>
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
                        <h2>Our Process</h2>
                        <p>A streamlined approach to establishing and managing your corporate presence</p>
                    </div>
                    
                    <div className={styles.processTimeline}>
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepTitle}>Consultation</div>
                            <div className={styles.stepDescription}>
                                We begin with an in-depth consultation to understand your business objectives, structure needs, and compliance requirements.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepTitle}>Strategy</div>
                            <div className={styles.stepDescription}>
                                Our team develops a customized corporate strategy aligned with your goals and Labuan&apos;s regulatory framework.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepTitle}>Implementation</div>
                            <div className={styles.stepDescription}>
                                We handle all setup procedures, documentation, and regulatory approvals with precision and efficiency.
                            </div>
                        </div>
                        
                        <div className={styles.timelineStep}>
                            <div className={styles.stepNumber}>4</div>
                            <div className={styles.stepTitle}>Ongoing Support</div>
                            <div className={styles.stepDescription}>
                                Continuous compliance monitoring, financial management, and strategic advisory to ensure sustained success.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className={styles.whyChoose}>
                <div className={styles.whyGrid}>
                    <div className={styles.whyContent}>
                        <h2>Why Choose Al Aman for Corporate Services</h2>
                        <p className={styles.whyText}>
                            We combine deep local expertise with international best practices, ensuring your business operates efficiently while maintaining full compliance with Labuan&apos;s regulatory framework.
                        </p>
                    </div>
                    
                    <div className={styles.whyBenefits}>
                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Shariah Compliance Expertise</div>
                                <div className={styles.benefitDescription}>
                                    Deep understanding of Islamic finance principles integrated into all corporate structures and operations.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Local Knowledge, Global Standards</div>
                                <div className={styles.benefitDescription}>
                                    Boots on the ground in Labuan with international best practices and regulatory expertise.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>End-to-End Solutions</div>
                                <div className={styles.benefitDescription}>
                                    One partner for all your corporate needs, from formation through operational maturity.
                                </div>
                            </li>
                            <li className={styles.benefitItem}>
                                <div className={styles.benefitTitle}>Proactive Compliance</div>
                                <div className={styles.benefitDescription}>
                                    Stay ahead of regulatory changes with our continuous monitoring and advisory services.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Ready to Establish Your Corporate Presence?</h2>
                    <p className={styles.ctaText}>
                        Let&apos;s discuss how our corporate services can support your business objectives in Labuan and beyond.
                    </p>
                    
                    <div className={styles.ctaButtons}>
                        <Link href="/contact" className={styles.btnPrimary}>Schedule Consultation</Link>
                        <Link href="#" className={styles.btnSecondary}>Download Brochure</Link>
                    </div>
                    
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <div className={styles.contactLabel}>Email</div>
                            <div className={styles.contactValue}>corporate@alamantrust.com</div>
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
