import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Services | Al Aman Trust',
};

export default function Services() {
    return (
        <section className="section">
            <div className="section-header">
                <Reveal>
                    <span className="gold" style={{ textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Expertise</span>
                    <h2 className="serif">Our specialized <span className="gold">solutions</span></h2>
                    <p>Whether you are a startup or an established entity, our approach focuses on maximizing your growth potential while ensuring compliance with ethical standards.</p>
                </Reveal>
            </div>

            <div className="services-vertical">
                <Reveal>
                    <div className="service-row">
                        <div className="service-content">
                            <h3 className="serif gold">Corporate Solutions</h3>
                            <p>We recognize the challenges of today’s dynamic business environment and deliver customized solutions to address your unique needs. From incorporation to ongoing compliance, we are your partner in success.</p>
                            <ul className="service-list">
                                <li>Company Formation</li>
                                <li>Regulatory Compliance</li>
                                <li>Strategic Consulting</li>
                            </ul>
                        </div>
                        <div className="service-image-container">
                            <img src="/images/service-1.png" alt="Corporate Solutions" className="service-img" />
                            <div className="img-overlay"></div>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="service-row reverse">
                        <div className="service-content">
                            <h3 className="serif gold">Fund Services</h3>
                            <p>Rest assured that you are with a team that has deep expertise across a wide range of fund structures, with experience spanning fund setup, closings, investments, and realizations.</p>
                            <ul className="service-list">
                                <li>Fund Setup & Structuring</li>
                                <li>Investment Realization</li>
                                <li>Shariah Board Coordination</li>
                            </ul>
                        </div>
                        <div className="service-image-container">
                            <img src="/images/service-2.png" alt="Fund Services" className="service-img" />
                            <div className="img-overlay"></div>
                        </div>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="service-row">
                        <div className="service-content">
                            <h3 className="serif gold">Private Client Advisory</h3>
                            <p>Personalized support and insights that make managing your wealth not only compliant but also effective. We help you secure your family's legacy for generations to come.</p>
                            <ul className="service-list">
                                <li>Succession Planning</li>
                                <li>Wealth Preservation</li>
                                <li>Ethical Philanthropy</li>
                            </ul>
                        </div>
                        <div className="service-image-container">
                            <img src="/images/service-3.png" alt="Private Client Advisory" className="service-img" />
                            <div className="img-overlay"></div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
