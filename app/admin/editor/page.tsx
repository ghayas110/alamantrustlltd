"use client";
import { useState, useEffect, useRef } from "react";
import { updateCMSContent, getCMSContent } from "@/app/actions/cms";
import { Save, Image as ImageIcon, Plus, Trash2, Eye, UploadCloud, Loader2 } from "lucide-react";

// Helper Uploader Component to standardize the image UI
function ImageUploader({ value, onChange, label }: { value: string, onChange: (url: string) => void, label: string }) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) onChange(data.url);
    } catch (err) {
      alert("Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="!m-0 !p-0 text-left !space-y-2">
      <label className="!block !text-[11px] !font-bold !text-gray-500 !uppercase !tracking-widest flex items-center gap-2">
        <ImageIcon className="!w-3 !h-3" /> {label}
      </label>
      <div className="!flex !items-center !gap-4">
        {value && <img src={value} alt="Preview" className="!w-16 !h-16 !object-cover !rounded-lg !border !border-gray-200" />}
        <input 
          type="file" 
          accept="image/*" 
          className="!hidden" 
          ref={fileInputRef} 
          onChange={handleUpload} 
        />
        <button 
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="!flex !items-center !gap-2 !px-4 !py-2 !bg-[#18181B] !text-white !text-[12px] !font-bold !rounded-lg hover:!bg-[#2A2A35] !transition-colors !border-none !cursor-pointer disabled:!opacity-50"
        >
          {isUploading ? <Loader2 className="!w-4 !h-4 !animate-spin" /> : <UploadCloud className="!w-4 !h-4" />}
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
        <span className="!text-[12px] !text-gray-400 !font-mono !truncate !max-w-[150px]">{value || 'No file selected'}</span>
      </div>
    </div>
  );
}

export default function EditorClient() {
  const [activeTab, setActiveTab] = useState("homeHero");
  const [iframeKey, setIframeKey] = useState(0); 
  const [content, setContent] = useState<any>({
    homeHero: { slides: [{ title: "", subtitle: "", bgImage: "" }] },
    homeServices: { items: [], expertiseTitle: "", expertiseSubtitle: "" },
    aboutUs: { 
        hero: { mainTitle: "", details: "", targetImage: "" },
        heritage: { title: "", text: "", image: "" },
        principles: [],
        whyChoose: []
    },
    contactInfo: { address: "", email: "", phone: "" }
  });
  const [isSaving, setIsSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    async function loadData() {
      const hero = await getCMSContent("home", "hero", { 
        slides: [
          { title: 'Where Compliance Meets Operational <span class="gold-light">Excellence</span>', subtitle: 'We Handle Operations. You Drive Returns.', bgImage: '/images/banner2.png' },
          { title: 'Building Trust Through <span class="gold-light">Integrity</span>', subtitle: 'Corporate Governance. Wealth Management. Fund Services.', bgImage: '/images/hero.png' }
        ]
      });
      // Migrate old single-slide format to array
      const heroData = hero.slides ? hero : { slides: [{ title: hero.title || '', subtitle: hero.subtitle || '', bgImage: hero.bgImage || '' }] };
      const defaultServices = { 
        expertiseTitle: "Our Expertise",
        expertiseSubtitle: "Tailored Solutions for Your Business & Wealth",
        expertiseContextLabel: "Your Trusted Corporate Partner",
        expertiseContextBody: "Al Aman Trust Services specializes in Shariah-compliant corporate services that uphold ethical standards while driving growth. We serve a diverse clientele—from emerging ventures to established enterprises—with tailored expertise in corporate governance, private wealth management, fund services, and strategic market entry across Malaysia, Saudi Arabia, and the UAE. Partner with us to navigate your corporate journey with integrity and precision.",
        items: [
            { title: "Corporate Services", src: "/images/service-1.png", description: "Tailored Strategies That Reflect Your Vision. Your trusted corporate partner." },
            { title: "Private Client Services", src: "/images/service-3.png", description: "Wealth solutions in line with your faith and ethics." },
            { title: "Fund Services", src: "/images/service-2.png", description: "Where Compliance Meets Operational Excellence. We Handle Operations. You Drive Returns." },
            { title: "Business Support & Soft-Landing", src: "/images/business-soft-landing-home.png", description: "Your Bridge to the Gulf & ASEAN. We Handle Entry. You Focus on Growth." }
        ]
      };
      const rawServices = await getCMSContent("home", "services", defaultServices);
      
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
      const rawAbout = await getCMSContent("about", "us", defaultAbout);
      
      const contact = await getCMSContent("contact", "info", { address: "Kensington Gardens, Malaysia", email: "info@alamantrust.com", phone: "+60 87 599800" });
      
      setContent({ 
        homeHero: heroData, 
        homeServices: {
           ...defaultServices,
           ...rawServices,
           items: rawServices.items && rawServices.items.length > 0 ? rawServices.items.map((it: any, i: number) => ({
               ...(defaultServices.items[i] || { title: "", src: "", description: "" }),
               ...it,
               description: it.description || it.desc || defaultServices.items[i]?.description || ""
           })) : defaultServices.items
        }, 
        aboutUs: {
           ...defaultAbout,
           ...rawAbout,
           hero: { ...defaultAbout.hero, ...(rawAbout.hero || {}) },
           heritage: { ...defaultAbout.heritage, ...(rawAbout.heritage || {}) },
           principles: rawAbout.principles && rawAbout.principles.length > 2 ? rawAbout.principles : defaultAbout.principles,
           whyChoose: rawAbout.whyChoose && rawAbout.whyChoose.length > 2 ? rawAbout.whyChoose : defaultAbout.whyChoose
        }, 
        contactInfo: contact 
      });
    }
    loadData();
  }, []);

  const handleChange = (section: string, field: string, value: string) => {
    setContent((prev: any) => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  };

  const handleDeepChange = (section: string, block: string, field: string, value: string) => {
    setContent((prev: any) => ({ 
        ...prev, 
        [section]: { 
            ...prev[section], 
            [block]: { ...prev[section][block], [field]: value } 
        } 
    }));
  };

  const handleArrayChange = (section: string, arrayName: string, index: number, field: string, value: string) => {
    const updated = [...content[section][arrayName]];
    updated[index] = { ...updated[index], [field]: value };
    setContent((prev: any) => ({ ...prev, [section]: { ...prev[section], [arrayName]: updated } }));
  };

  const addItem = (section: string, arrayName: string, template: any) => {
    const updated = [...content[section][arrayName], template];
    setContent((prev: any) => ({ ...prev, [section]: { ...prev[section], [arrayName]: updated } }));
  };

  const removeItem = (section: string, arrayName: string, index: number) => {
    const updated = [...content[section][arrayName]];
    updated.splice(index, 1);
    setContent((prev: any) => ({ ...prev, [section]: { ...prev[section], [arrayName]: updated } }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatusMsg("");
    try {
      if (activeTab === "homeHero") await updateCMSContent("home", "hero", content.homeHero);
      if (activeTab === "homeServices") await updateCMSContent("home", "services", content.homeServices);
      if (activeTab === "aboutUs") await updateCMSContent("about", "us", content.aboutUs);
      if (activeTab === "contactInfo") await updateCMSContent("contact", "info", content.contactInfo);
      
      setStatusMsg("Published! Reloading Preview...");
      setIframeKey(k => k + 1);
      setTimeout(() => setStatusMsg(""), 3000);
    } catch (e) {
      setStatusMsg("Failed to save changes.");
    } finally {
      setIsSaving(false);
    }
  };

  const previewUrl = activeTab === "aboutUs" ? "/about" : activeTab === "contactInfo" ? "/contact" : "/";

  return (
    <div className="!flex !w-full !h-full !overflow-hidden !m-0 !p-0 !bg-[#18181B]">
      
      {/* Elementor Side Panel */}
      <div className="!w-[600px] !h-full !flex-shrink-0 !bg-white !border-r !border-gray-200 !flex !flex-col !z-20 !shadow-2xl">
        
        {/* Editor Header */}
        <div className="!p-6 !border-b !border-gray-100 !bg-gray-50/50">
          <h1 className="!text-[22px] !font-extrabold !text-[#18181B] !mb-1 !tracking-tight !m-0 !p-0 !flex !items-center !gap-3">
            <img src="/logo.png" alt="Al-Aman Trust" className="!w-8 !h-8 !object-contain" />
            Al-Aman Trust
          </h1>
          <p className="!text-[13px] !text-gray-500 !m-0 !p-0 !font-medium">Visual Content Management System</p>
        </div>

        {/* Tab Selection */}
        <div className="!flex !px-4 !pt-4 !gap-2 !overflow-x-auto !hide-scrollbar !border-b !border-gray-100 !flex-shrink-0">
          {["homeHero", "homeServices", "aboutUs", "contactInfo"].map(t => (
            <button 
              key={t} onClick={() => setActiveTab(t)}
              className={`!whitespace-nowrap !px-4 !py-3 !text-[13px] !font-bold !border-b-2 !transition-all !bg-transparent !m-0 ${activeTab === t ? "!border-[#C5A473] !text-[#C5A473]" : "!border-transparent !text-gray-500 hover:!text-gray-900"}`}
            >
              {t === "homeHero" && "Banners"}
              {t === "homeServices" && "Services"}
              {t === "aboutUs" && "About Platform"}
              {t === "contactInfo" && "Global Contact"}
            </button>
          ))}
        </div>

        {/* Content Configuration Form */}
        <div className="!flex-1 !overflow-y-auto !p-6 !custom-scrollbar">
          
          {/* ======== Home Hero ======== */}
          {activeTab === "homeHero" && (
            <div className="!space-y-6 !animate-in !fade-in">
              <div className="!flex !items-center !justify-between !m-0 !p-0">
                <div>
                  <h3 className="!text-[14px] !font-bold !text-gray-900 !m-0 !uppercase !tracking-wide">Banner Slides</h3>
                  <p className="!text-[11px] !text-gray-400 !m-0 !mt-1">Wrap text in <span className="!font-mono !bg-gray-100 !px-1.5 !py-0.5 !rounded !text-[#C5A473] !font-bold">&quot;double quotes&quot;</span> to apply gold highlight</p>
                </div>
                <button 
                  onClick={() => {
                    const updated = [...(content.homeHero.slides || []), { title: '', subtitle: '', bgImage: '' }];
                    setContent((prev: any) => ({ ...prev, homeHero: { ...prev.homeHero, slides: updated } }));
                  }}
                  className="!flex !items-center !gap-2 !px-4 !py-2 !bg-[#C5A473] !text-white !text-[12px] !font-bold !rounded-lg hover:!bg-[#b59567] !transition-colors !border-none !cursor-pointer"
                >
                  <Plus className="!w-4 !h-4" /> Add Slide
                </button>
              </div>

              {(content.homeHero.slides || []).map((slide: any, idx: number) => (
                <div key={idx} className="!p-5 !bg-gray-50 !rounded-xl !border-[1.5px] !border-gray-200 !space-y-4 !relative">
                  <div className="!flex !items-center !justify-between !m-0">
                    <span className="!text-[12px] !font-bold !text-[#C5A473] !uppercase !tracking-widest">Slide {idx + 1}</span>
                    {(content.homeHero.slides || []).length > 1 && (
                      <button 
                        onClick={() => {
                          const updated = [...content.homeHero.slides];
                          updated.splice(idx, 1);
                          setContent((prev: any) => ({ ...prev, homeHero: { ...prev.homeHero, slides: updated } }));
                        }}
                        className="!p-1.5 !text-red-400 hover:!text-red-600 hover:!bg-red-50 !rounded-lg !transition-colors !border-none !bg-transparent !cursor-pointer"
                      >
                        <Trash2 className="!w-4 !h-4" />
                      </button>
                    )}
                  </div>
                  
                  <div className="!m-0 !p-0 text-left">
                    <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-2 !uppercase !tracking-widest">Headline Title (HTML OK)</label>
                    <textarea 
                      value={slide.title}
                      onChange={(e) => {
                        const updated = [...content.homeHero.slides];
                        updated[idx] = { ...updated[idx], title: e.target.value };
                        setContent((prev: any) => ({ ...prev, homeHero: { ...prev.homeHero, slides: updated } }));
                      }}
                      className="!w-full !p-4 !rounded-xl !border-[1.5px] !border-gray-200 focus:!outline-none focus:!border-[#C5A473] !text-[13px] !font-mono !bg-white !shadow-sm"
                      rows={3} style={{ boxSizing: 'border-box' }}
                    />
                  </div>
                  <div className="!m-0 !p-0 text-left">
                    <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-2 !uppercase !tracking-widest">Subtitle Text</label>
                    <input 
                      type="text" value={slide.subtitle} 
                      onChange={(e) => {
                        const updated = [...content.homeHero.slides];
                        updated[idx] = { ...updated[idx], subtitle: e.target.value };
                        setContent((prev: any) => ({ ...prev, homeHero: { ...prev.homeHero, slides: updated } }));
                      }}
                      className="!w-full !px-4 !py-3.5 !rounded-xl !border-[1.5px] !border-gray-200 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !bg-white !shadow-sm"
                      style={{ boxSizing: 'border-box' }}
                    />
                  </div>
                  <ImageUploader 
                    label="Slide Background Image" 
                    value={slide.bgImage} 
                    onChange={(url) => {
                      const updated = [...content.homeHero.slides];
                      updated[idx] = { ...updated[idx], bgImage: url };
                      setContent((prev: any) => ({ ...prev, homeHero: { ...prev.homeHero, slides: updated } }));
                    }} 
                  />
                </div>
              ))}
            </div>
          )}

          {/* ======== Home Services ======== */}
          {activeTab === "homeServices" && (
            <div className="!space-y-8 !animate-in !fade-in text-left">
              <div className="!space-y-4 !p-5 !bg-gray-50 !rounded-xl !border-[1.5px] !border-gray-200">
                <h3 className="!text-[14px] !font-bold !text-gray-900 !m-0 !uppercase !tracking-wide">Expertise Section Headers</h3>
                <div className="!grid !grid-cols-2 !gap-4">
                  <div>
                    <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Primary Title</label>
                    <input type="text" value={content.homeServices.expertiseTitle} onChange={(e) => handleChange("homeServices", "expertiseTitle", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px]" style={{ boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Context Label</label>
                    <input type="text" value={content.homeServices.expertiseContextLabel} onChange={(e) => handleChange("homeServices", "expertiseContextLabel", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px]" style={{ boxSizing: 'border-box' }} placeholder="Your Trusted Corporate Partner" />
                  </div>
                </div>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Subtitle Pitch</label>
                  <textarea value={content.homeServices.expertiseSubtitle} onChange={(e) => handleChange("homeServices", "expertiseSubtitle", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px]" rows={2} style={{ boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Context Description Block</label>
                  <textarea value={content.homeServices.expertiseContextBody} onChange={(e) => handleChange("homeServices", "expertiseContextBody", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px] !leading-relaxed" rows={4} style={{ boxSizing: 'border-box' }} placeholder="Al Aman Trust Services specializes in..." />
                </div>
              </div>

              <div>
                <button onClick={() => addItem("homeServices", "items", { title: "New Module", src: "", description: "" })} className="!w-full !flex !items-center !justify-center !gap-2 !py-3 !rounded-xl !border-2 !border-dashed !border-gray-300 !text-[13px] !font-bold !text-gray-500 hover:!border-[#C5A473] hover:!text-[#C5A473] !transition-colors !bg-transparent !m-0">
                  <Plus className="!w-4 !h-4" strokeWidth={2.5} /> Add Service Tile
                </button>
                {content.homeServices.items.map((svc: any, idx: number) => (
                  <div key={idx} className="!p-4 !border-[1.5px] !border-gray-200 !rounded-xl !bg-gray-50/50 !relative !group !mt-4 !space-y-3">
                    <button onClick={() => removeItem("homeServices", "items", idx)} className="!absolute !-top-3 !-right-3 !bg-white !p-2 !rounded-full !shadow-md !border !border-gray-200 !text-red-500 hover:!bg-red-50 !transition-colors !opacity-0 group-hover:!opacity-100 !flex"><Trash2 className="!w-3.5 !h-3.5" /></button>
                    <div>
                      <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Title</label>
                      <input type="text" value={svc.title} onChange={(e) => handleArrayChange("homeServices", "items", idx, "title", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px]" style={{ boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Description text</label>
                      <textarea value={svc.description || svc.desc} onChange={(e) => handleArrayChange("homeServices", "items", idx, "description", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px]" rows={2} style={{ boxSizing: 'border-box' }} />
                    </div>
                    <ImageUploader label="Tile Icon" value={svc.src} onChange={(url) => handleArrayChange("homeServices", "items", idx, "src", url)} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ======== About Us ======== */}
          {activeTab === "aboutUs" && (
            <div className="!space-y-8 !animate-in !fade-in !pb-10">
              
              {/* Who We Are Schema */}
              <div className="!space-y-4 !p-5 !bg-gray-50 !rounded-xl !border-[1.5px] !border-gray-200">
                <h3 className="!text-[14px] !font-bold !text-[#C5A473] !m-0 !uppercase !tracking-widest">Global "Who We Are" Header</h3>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Main Catchphrase</label>
                  <input type="text" value={content.aboutUs.hero.mainTitle} onChange={(e) => handleDeepChange("aboutUs", "hero", "mainTitle", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !font-bold" style={{ boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Detailed Paragraph</label>
                  <textarea value={content.aboutUs.hero.details} onChange={(e) => handleDeepChange("aboutUs", "hero", "details", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px] !leading-relaxed" rows={5} style={{ boxSizing: 'border-box' }} />
                </div>
                <ImageUploader label="Hero Frame Imagery" value={content.aboutUs.hero.targetImage} onChange={(url) => handleDeepChange("aboutUs", "hero", "targetImage", url)} />
              </div>

              {/* Heritage Schema */}
              <div className="!space-y-4 !p-5 !bg-gray-50 !rounded-xl !border-[1.5px] !border-gray-200">
                <h3 className="!text-[14px] !font-bold !text-[#C5A473] !m-0 !uppercase !tracking-widest">Our Heritage Block</h3>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Heritage Title</label>
                  <input type="text" value={content.aboutUs.heritage.title} onChange={(e) => handleDeepChange("aboutUs", "heritage", "title", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px]" style={{ boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-1.5 !uppercase">Historical Text</label>
                  <textarea value={content.aboutUs.heritage.text} onChange={(e) => handleDeepChange("aboutUs", "heritage", "text", e.target.value)} className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px] !leading-relaxed" rows={4} style={{ boxSizing: 'border-box' }} />
                </div>
                <ImageUploader label="Historical Context Photo" value={content.aboutUs.heritage.image} onChange={(url) => handleDeepChange("aboutUs", "heritage", "image", url)} />
              </div>

              {/* Principles Array */}
              <div className="!space-y-4 text-left">
                <h3 className="!text-[14px] !font-bold !text-gray-900 !m-0 !uppercase !tracking-widest !pb-2 !border-b !border-gray-100">Dynamic Principles Matrix</h3>
                {content.aboutUs.principles.map((pr: any, idx: number) => (
                  <div key={idx} className="!p-4 !border-[1.5px] !border-gray-200 !rounded-xl !bg-white !relative !group">
                    <button onClick={() => removeItem("aboutUs", "principles", idx)} className="!absolute !-top-3 !-right-3 !bg-white !p-2 !rounded-full !shadow-md !border !border-gray-200 !text-red-500 hover:!bg-red-50 !transition-colors !opacity-0 group-hover:!opacity-100 !flex"><Trash2 className="!w-3.5 !h-3.5" /></button>
                    <input type="text" value={pr.title} onChange={(e) => handleArrayChange("aboutUs", "principles", idx, "title", e.target.value)} placeholder="Principle Title..." className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !mb-3 !font-bold" style={{ boxSizing: 'border-box' }} />
                    <textarea value={pr.desc} onChange={(e) => handleArrayChange("aboutUs", "principles", idx, "desc", e.target.value)} placeholder="Description..." className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px]" rows={2} style={{ boxSizing: 'border-box' }} />
                  </div>
                ))}
                <button onClick={() => addItem("aboutUs", "principles", { title: "New Principle", desc: "" })} className="!w-full !flex !items-center !justify-center !gap-2 !py-2.5 !rounded-lg !border-2 !border-dashed !border-[#C5A473]/50 !text-[#C5A473] !text-[13px] !font-bold hover:!bg-[#C5A473]/10 !transition-colors !bg-transparent !m-0"><Plus className="!w-4 !h-4" strokeWidth={2.5} /> Add Principle Card</button>
              </div>

              {/* Why Choose Us Array */}
              <div className="!space-y-4 text-left">
                <h3 className="!text-[14px] !font-bold !text-gray-900 !m-0 !uppercase !tracking-widest !pb-2 !border-b !border-gray-100">Why Choose Platform Features</h3>
                {content.aboutUs.whyChoose.map((wc: any, idx: number) => (
                  <div key={idx} className="!p-4 !border-[1.5px] !border-gray-200 !rounded-xl !bg-white !relative !group !flex !gap-4">
                    <button onClick={() => removeItem("aboutUs", "whyChoose", idx)} className="!absolute !-top-3 !-right-3 !bg-white !p-2 !rounded-full !shadow-md !border !border-gray-200 !text-red-500 hover:!bg-red-50 !transition-colors !opacity-0 group-hover:!opacity-100 !flex"><Trash2 className="!w-3.5 !h-3.5" /></button>
                    <div className="!font-mono !text-[#C5A473] !font-bold !pt-2">#{idx + 1}</div>
                    <div className="!flex-1 !space-y-3">
                        <input type="text" value={wc.title} onChange={(e) => handleArrayChange("aboutUs", "whyChoose", idx, "title", e.target.value)} placeholder="Title..." className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !font-bold" style={{ boxSizing: 'border-box' }} />
                        <textarea value={wc.desc} onChange={(e) => handleArrayChange("aboutUs", "whyChoose", idx, "desc", e.target.value)} placeholder="Description..." className="!w-full !px-3 !py-2.5 !rounded-lg !border !border-gray-300 focus:!outline-none focus:!border-[#C5A473] !text-[13px]" rows={2} style={{ boxSizing: 'border-box' }} />
                    </div>
                  </div>
                ))}
                <button onClick={() => addItem("aboutUs", "whyChoose", { title: "New Feature", desc: "" })} className="!w-full !flex !items-center !justify-center !gap-2 !py-2.5 !rounded-lg !border-2 !border-dashed !border-gray-300 !text-gray-500 !text-[13px] !font-bold hover:!border-gray-500 hover:!bg-gray-50 !transition-colors !bg-transparent !m-0"><Plus className="!w-4 !h-4" strokeWidth={2.5} /> Add "Why Choose" Line</button>
              </div>

            </div>
          )}

          {/* ======== Contact Info ======== */}
          {activeTab === "contactInfo" && (
            <div className="!space-y-6 !animate-in !fade-in">
              <div className="!m-0 !p-0 text-left">
                <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-2 !uppercase !tracking-widest">Global HQ Address</label>
                <textarea 
                  value={content.contactInfo.address}
                  onChange={(e) => handleChange("contactInfo", "address", e.target.value)}
                  className="!w-full !p-4 !rounded-xl !border-[1.5px] !border-gray-200 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !bg-gray-50"
                  rows={4} style={{ boxSizing: 'border-box' }}
                />
              </div>
              <div className="!m-0 !p-0 text-left">
                <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-2 !uppercase !tracking-widest">Executive Support Email</label>
                <input 
                  type="email" value={content.contactInfo.email} onChange={(e) => handleChange("contactInfo", "email", e.target.value)}
                  className="!w-full !px-4 !py-3.5 !rounded-xl !border-[1.5px] !border-gray-200 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !bg-gray-50"
                  style={{ boxSizing: 'border-box' }}
                />
              </div>
              <div className="!m-0 !p-0 text-left">
                <label className="!block !text-[11px] !font-bold !text-gray-500 !mb-2 !uppercase !tracking-widest">Master Phone Network</label>
                <input 
                  type="text" value={content.contactInfo.phone} onChange={(e) => handleChange("contactInfo", "phone", e.target.value)}
                  className="!w-full !px-4 !py-3.5 !rounded-xl !border-[1.5px] !border-gray-200 focus:!outline-none focus:!border-[#C5A473] !text-[14px] !bg-gray-50"
                  style={{ boxSizing: 'border-box' }}
                />
              </div>
            </div>
          )}

        </div>

        {/* Global Editor Footer */}
        <div className="!p-6 !border-t !border-gray-100 !bg-white !shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
          {statusMsg && (
            <div className="!mb-4 !p-3 !bg-[#F0FDF4] !text-[#166534] !rounded-xl !font-bold !text-[13px] !flex !items-center">
              <div className="!w-2 !h-2 !bg-[#166534] !rounded-full !mr-2 !animate-pulse"></div>
              {statusMsg}
            </div>
          )}
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="!w-full !flex !items-center !justify-center !gap-2 !bg-[#C5A473] !text-white !px-6 !py-4 !rounded-xl !font-extrabold hover:!bg-[#b59567] !transition-all hover:!shadow-[0_8px_20px_rgba(197,164,115,0.4)] hover:!-translate-y-0.5 active:!translate-y-0 disabled:!opacity-70 disabled:hover:!translate-y-0 !text-[15px] !border-none !m-0 !cursor-pointer"
          >
            <Save strokeWidth={2.5} className="!w-5 !h-5" />
            {isSaving ? "Updating Live..." : "Publish Content"}
          </button>
        </div>
      </div>

      {/* Live Preview Canvas */}
      <div className="!flex-1 !h-full !bg-black/5 !relative !overflow-hidden !p-8 !flex !flex-col">
        <div className="!flex !justify-between !items-center !mb-4 !text-white/60">
          <div className="!flex !items-center !gap-2 !text-[14px] !font-bold">
            <Eye className="!w-4 !h-4" /> Live Engine Preview: <span className="!text-[#C5A473] !tracking-wider">alamantrust.com{previewUrl}</span>
          </div>
        </div>
        
        <div className="!w-full !flex-1 !rounded-[2rem] !overflow-hidden !border-4 !border-[#C5A473]/30 !shadow-2xl !bg-white">
          <iframe key={iframeKey} src={previewUrl} className="!w-full !h-full !border-none" title="Elementor Canvas" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.custom-scrollbar::-webkit-scrollbar { width: 4px; } .custom-scrollbar::-webkit-scrollbar-track { background: transparent; } .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #E5E7EB; border-radius: 20px; } .hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
    </div>
  );
}
