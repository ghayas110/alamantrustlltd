export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    image: string;
}

export const services: Service[] = [
    {
        slug: 'corporate-solutions',
        title: 'Corporate Solutions',
        shortDescription: 'Customized strategies designed to empower your business growth while maintaining strict Shariah compliance.',
        fullDescription: `We recognize the challenges of today's dynamic business environment and deliver customized solutions to address your unique needs. From incorporation to ongoing compliance, we are your partner in success.

Our team of experts brings decades of experience in corporate structuring, regulatory compliance, and strategic consulting. We work closely with you to understand your business objectives and develop tailored solutions that drive growth while maintaining the highest ethical standards.

Whether you're a startup looking to establish your corporate foundation or an established enterprise seeking to optimize your operations, Al Aman Trust provides the expertise and support you need to thrive in today's competitive landscape.`,
        features: [
            'Company Formation & Structuring',
            'Regulatory Compliance Management',
            'Strategic Business Consulting',
            'Corporate Governance Advisory',
            'License & Permit Assistance',
            'Ongoing Compliance Monitoring',
        ],
        image: '/images/service-1.png',
    },
    {
        slug: 'fund-services',
        title: 'Fund Services',
        shortDescription: 'Manage your investments ethically and efficiently with our expert fund administration and compliance team.',
        fullDescription: `Rest assured that you are with a team that has deep expertise across a wide range of fund structures, with experience spanning fund setup, closings, investments, and realizations.

Our fund services team provides comprehensive support throughout the entire fund lifecycle. From initial structuring and regulatory filings to ongoing administration and investor reporting, we ensure your fund operates smoothly and in full compliance with Shariah principles.

We work with a variety of fund structures including private equity, venture capital, real estate, and Shariah-compliant investment vehicles. Our Shariah Board coordination ensures that all investment activities align with Islamic finance principles.`,
        features: [
            'Fund Setup & Structuring',
            'Investment Administration',
            'Shariah Board Coordination',
            'Investor Reporting',
            'NAV Calculation & Valuation',
            'Regulatory Filings & Compliance',
        ],
        image: '/images/service-2.png',
    },
    {
        slug: 'private-client-advisory',
        title: 'Private Client Advisory',
        shortDescription: 'Personalized guidance for your financial journey, ensuring your wealth management aligns with your values.',
        fullDescription: `Personalized support and insights that make managing your wealth not only compliant but also effective. We help you secure your family's legacy for generations to come.

Our private client team understands that wealth management is deeply personal. We take the time to understand your unique circumstances, goals, and values before crafting a comprehensive strategy that protects and grows your assets.

From succession planning and estate structuring to ethical philanthropy and family governance, we provide holistic advice that considers every aspect of your financial life. Our commitment is to serve as your trusted partner in preserving and enhancing your family's wealth across generations.`,
        features: [
            'Succession & Estate Planning',
            'Wealth Preservation Strategies',
            'Ethical Philanthropy Advisory',
            'Family Governance Structures',
            'Trust & Foundation Setup',
            'Intergenerational Wealth Transfer',
        ],
        image: '/images/service-3.png',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((service) => service.slug);
}
