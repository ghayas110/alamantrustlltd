export interface SubService {
    title: string;
    description: string;
}

export interface Market {
    title: string;
    description: string;
}

export interface Service {
    slug: string;
    title: string;
    subtitle?: string; // Page Subtitle
    headline: string; // "Foundations for Growth" etc. for card
    subHeadline: string; // "Structure, Compliance, and Growth" for card
    shortDescription: string; // For card on main page ("Description" in block)
    fullDescription: string; // For backward compatibility if needed, or mapped to intro
    intro?: string; // "Opening Section" text for detail page
    features: string[]; // "Key Services" for card display
    subServices?: SubService[]; // "Our Services" list
    ongoingSupport?: SubService[]; // For Soft-Landing
    markets?: Market[]; // For Soft-Landing
    whyChoose?: string[]; // For Soft-Landing
    ctaText?: string; // "Explore Corporate Services ->"
    image: string;
}

export const services: Service[] = [
    {
        slug: 'corporate-solutions',
        title: 'Corporate Services',
        subtitle: 'Building Strong Business Foundations in Labuan and Beyond',
        headline: 'Foundations for Growth',
        subHeadline: 'Structure, Compliance, and Growth',
        shortDescription: 'Comprehensive management of your business lifecycle, from tax efficiency to stringent regulatory compliance.',
        fullDescription: 'Navigate the complexities of international business with our comprehensive corporate services. From entity formation to ongoing compliance and day-to-day operations, we provide the infrastructure and expertise to support your success with precision, transparency, and Shariah compliance.',
        intro: 'Navigate the complexities of international business with our comprehensive corporate services. From entity formation to ongoing compliance and day-to-day operations, we provide the infrastructure and expertise to support your success with precision, transparency, and Shariah compliance.',
        features: [
            'Business Setup',
            'Company Secretarial',
            'Compliance & Substance',
            'Cashflow management',
            'Accounting & Tax',
        ],
        subServices: [
            {
                title: 'Business Set-ups & Soft-Landing Services',
                description: 'Strategic guidance for establishing your presence in Labuan and key markets. We handle jurisdiction analysis, incorporation, licensing, registered office facilities, and business banking—so you can focus on growth.',
            },
            {
                title: 'Accounting & Tax Services',
                description: 'Comprehensive financial management tailored to Labuan\'s favorable tax regime. Monthly bookkeeping, tax planning and compliance, management accounts, and audit coordination delivered by professionals who understand local and international standards.',
            },
            {
                title: 'Compliance & Substance Requirements',
                description: 'Ensure your entity meets Labuan\'s substance requirements and maintains regulatory good standing. Economic substance compliance, annual filings, AML/CFT policies, beneficial ownership reporting, and ongoing regulatory monitoring.',
            },
            {
                title: 'Corporate Secretarial Services',
                description: 'Professional support ensuring statutory compliance and good corporate governance. Maintenance of statutory registers, AGM organization, board resolutions, share transfers, and comprehensive corporate housekeeping.',
            },
            {
                title: 'Registered Office & Directors',
                description: 'Professional registered office facilities and nominee director services meeting regulatory requirements while maintaining operational flexibility. Prime Labuan address, mail handling, meeting facilities, and registered agent services.',
            },
            {
                title: 'Cash Management Services',
                description: 'Treasury and cash management solutions optimizing liquidity while maintaining security and compliance. Bank account opening, payment processing, cash flow monitoring, and multi-currency management support.',
            },
            {
                title: 'HR & Payroll Services',
                description: 'Complete human resource and payroll administration ensuring compliance with local employment regulations. Payroll processing, employment contracts, benefits administration, work permits, and HR compliance management.',
            },
        ],
        ctaText: 'Explore Corporate Services →',
        image: '/images/service-1.png',
    },
    {
        slug: 'private-client-advisory',
        title: 'Private Client Services',
        subtitle: 'Preserving Wealth with Wisdom and Integrity',
        headline: 'Private Client Services',
        subHeadline: 'Protecting Wealth, Preserving Legacies',
        shortDescription: 'Sophisticated wealth structuring for individuals and families. Our private client solutions safeguard your assets, honor your values, and ensure seamless wealth transfer across generations—all within Shariah-compliant frameworks.',
        fullDescription: 'Wealth is more than assets—it\'s about values, legacy, and the future you envision for your family. Our private client services combine sophisticated structuring with Shariah-compliant principles to protect what you\'ve built and ensure your legacy endures across generations.',
        intro: 'Wealth is more than assets—it\'s about values, legacy, and the future you envision for your family. Our private client services combine sophisticated structuring with Shariah-compliant principles to protect what you\'ve built and ensure your legacy endures across generations.',
        features: [
            'Wealth Planning',
            'Trust & Foundation Management',
            'Private Funds',
            'Multi-Family Office',
        ],
        subServices: [
            {
                title: 'Wealth Planning & Strategy',
                description: 'Holistic wealth planning aligning financial structures with personal values and family objectives. Comprehensive wealth assessment, asset protection strategies, tax-efficient structuring, succession planning, and family governance advisory.',
            },
            {
                title: 'Trust & Foundation Set-ups and Management',
                description: 'Professional establishment and administration of trusts and foundations for asset protection and wealth transfer. Structure selection, trust deed drafting, trustee services, beneficiary management, and comprehensive trust accounting.',
            },
            {
                title: 'Private Fund Set-ups',
                description: 'Bespoke private fund structures for family investment vehicles and exclusive investor groups. Fund design, formation and licensing, offering documentation, fund administration, and investor relations.',
            },
            {
                title: 'Accounting for Private Clients',
                description: 'Discreet, comprehensive accounting services for personal wealth management. Personal asset accounting, investment portfolio tracking, multi-entity reporting, and confidential reporting to clients and advisors.',
            },
            {
                title: 'Universal Life Insurance Structuring',
                description: 'Strategic advice on universal life insurance as a wealth preservation tool within Shariah-compliant frameworks. Insurance needs assessment, policy optimization, premium funding strategies, and trust integration.',
            },
            {
                title: 'Multi-Family Office Services',
                description: 'Comprehensive family office solutions serving multiple families with shared infrastructure. Investment management coordination, financial consolidation, concierge services, next-generation education, and professional network access.',
            },
        ],
        ctaText: 'Explore Private Client Services →',
        image: '/images/service-3.png',
    },
    {
        slug: 'fund-services',
        title: 'Fund Services',
        subtitle: 'Professional Fund Administration for Institutional Excellence',
        headline: 'Precision in Administration',
        subHeadline: 'Professional Fund Administration Excellence',
        shortDescription: 'Launch and manage investment vehicles with precision. Our fund services combine technical expertise with regulatory knowledge to deliver seamless administration for private and public funds in compliance-focused jurisdictions.',
        fullDescription: 'Launch and operate investment funds with confidence. Our fund services deliver the technical precision, regulatory knowledge, and operational infrastructure required for successful fund management—allowing you to focus on investment performance while we ensure operational excellence.',
        intro: 'Launch and operate investment funds with confidence. Our fund services deliver the technical precision, regulatory knowledge, and operational infrastructure required for successful fund management—allowing you to focus on investment performance while we ensure operational excellence.',
        features: [
            'Fund Setup',
            'Fund Administration',
            'Client Onboarding',
            'Fund Secretarial',
        ],
        subServices: [
            {
                title: 'Private and Public Fund Set-up',
                description: 'End-to-end fund establishment covering structure selection, regulatory approval, and operational readiness. Fund structure advisory, licensing applications, offering memorandum drafting, service provider coordination, and launch project management.',
            },
            {
                title: 'Fund Administration',
                description: 'Comprehensive middle and back-office services ensuring accurate fund accounting, valuation, and reporting. Daily fund accounting, NAV calculation and verification, financial statement preparation, regulatory reporting, and investor capital account management.',
            },
            {
                title: 'Client Onboarding & Compliance Services',
                description: 'Robust investor onboarding, KYC/AML compliance, and ongoing monitoring aligned with international standards. Investor due diligence, AML/CFT screening, subscription processing, beneficial ownership identification, and compliance reviews.',
            },
            {
                title: 'Company Secretary for Funds',
                description: 'Professional company secretarial services for fund vehicles ensuring corporate governance and regulatory compliance. Statutory register maintenance, board meeting coordination, resolution preparation, annual filings, and governance advisory.',
            },
        ],
        ctaText: 'Explore Fund Services →',
        image: '/images/service-2.png',
    },
    {
        slug: 'business-soft-landing',
        title: 'Business Support & Soft-Landing Services',
        subtitle: 'Your Strategic Partner for Market Entry and Expansion',
        headline: 'Seamless Market Entry',
        subHeadline: 'Your Gateway to High-Growth Markets',
        shortDescription: 'Turn ambitious expansion plans into operational realities. Expand into Saudi Arabia, UAE, and Malaysia with confidence. Our soft-landing services transform market entry ambitions into operational realities, providing comprehensive support from licensing to localization.',
        fullDescription: 'Expanding into new markets demands local expertise, regulatory knowledge, and operational support. Our soft-landing services transform your market entry plans into compliant, operational realities across three of Asia and the Middle East\'s most dynamic markets: Saudi Arabia, UAE, and Malaysia.',
        intro: 'Expanding into new markets demands local expertise, regulatory knowledge, and operational support. Our soft-landing services transform your market entry plans into compliant, operational realities across three of Asia and the Middle East\'s most dynamic markets: Saudi Arabia, UAE, and Malaysia.',
        features: [
            'Market Entry Strategy',
            'Setup & Licensing',
            'Business Localization',
            'Regulatory Navigation',
        ],
        subServices: [
            {
                title: 'Strategic Market Entry Assessment',
                description: 'Market opportunity assessment and feasibility analysis. Market research, regulatory evaluation, business structure recommendations, tax and legal framework overview, and timeline planning.',
            },
            {
                title: 'Setup & Licensing Execution',
                description: 'Complete establishment and regulatory approval. Company formation, license applications, registered office solutions, bank account facilitation, and immigration assistance.',
            },
            {
                title: 'Business Localization Support',
                description: 'Operational setup for seamless market integration. Local staff recruitment, office space identification, utilities setup, vendor identification, and cultural adaptation guidance.',
            },
        ],
        markets: [
            {
                title: 'Saudi Arabia',
                description: 'Vision 2030 is transforming the Kingdom into a global business hub with massive infrastructure investment and economic diversification.',
            },
            {
                title: 'United Arab Emirates',
                description: 'A strategic gateway between East and West, offering world-class infrastructure, favorable tax regimes, and regional market access.',
            },
            {
                title: 'Malaysia (including Labuan IBFC)',
                description: 'ASEAN\'s financial hub with strong Islamic finance leadership, political stability, and competitive business costs.',
            },
        ],
        ongoingSupport: [
            {
                title: 'Compliance & Corporate Services',
                description: 'Annual compliance, accounting and bookkeeping, tax filing, corporate secretarial services, and regulatory liaison.',
            },
            {
                title: 'Growth & Expansion',
                description: 'Additional licensing, branch establishment, strategic partnerships, and market expansion advisory.',
            },
        ],
        whyChoose: [
            'Local Presence, Global Standards – Boots on the ground with international best practices',
            'RUSD Group Network – Leverage regional connections and market knowledge',
            'Shariah Compliance Expertise – Unique advantage for Islamic finance structuring',
            'End-to-End Support – One partner from assessment through operational maturity',
            'Proven Track Record – Successful launches across multiple sectors',
        ],
        ctaText: 'Explore Soft-Landing Services →',
        image: '/images/business-soft-landing-home.png',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
    return services.map((service) => service.slug);
}
