"use client";

import { useState } from "react";
import { updateCMSContent } from "@/app/actions/cms";
import { Save, Image as ImageIcon, Type, Link as LinkIcon, Settings2, Layout } from "lucide-react";

export default function VisualEditorClient({ initialData }: { initialData: any }) {
  const [activePage, setActivePage] = useState("home");
  const [isSaving, setIsSaving] = useState(false);

  // Local state for all editable content
  const [content, setContent] = useState(initialData);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Loop via keys and save each section
      if (activePage === "home") {
        await updateCMSContent("home", "hero", content.home.hero);
      } else if (activePage === "contact") {
        await updateCMSContent("contact", "info", content.contact.info);
      } else if (activePage === "about") {
        await updateCMSContent("about", "mission", content.about.mission);
      }
      
      alert("Page content updated successfully!");
    } catch (e) {
      alert("Error saving: " + e);
    }
    setIsSaving(false);
  };

  const updateSection = (page: string, section: string, key: string, value: any) => {
    setContent((prev: any) => ({
      ...prev,
      [page]: {
        ...prev[page],
        [section]: {
          ...prev[page][section],
          [key]: value
        }
      }
    }));
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
      
      {/* Left Sidebar - Navigation structure */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-100 flex items-center gap-2">
          <Layout className="w-5 h-5 text-indigo-600" />
          <h2 className="font-semibold text-gray-900">CMS Editor</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Pages</div>
          {["home", "about", "services", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === page ? "bg-indigo-50 text-indigo-700" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Main Canvas - Inspector Panel */}
      <div className="flex-1 bg-gray-50 flex flex-col">
        <div className="h-14 border-b border-gray-200 bg-white flex justify-between items-center px-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Settings2 className="w-4 h-4" />
            <span>Editing Template: <strong className="text-gray-900 capitalize">{activePage}</strong></span>
          </div>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-2 shadow-sm"
          >
            <Save className="w-4 h-4" />
            {isSaving ? "Saving..." : "Publish Changes"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {activePage === "home" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Type className="w-5 h-5 text-gray-400" /> Hero Section
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Headline Text</label>
                    <input 
                      type="text" 
                      value={content.home.hero.title}
                      onChange={(e) => updateSection("home", "hero", "title", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subheadline</label>
                    <textarea 
                      value={content.home.hero.subtitle}
                      onChange={(e) => updateSection("home", "hero", "subtitle", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none h-24"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Background Image URL</label>
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="/images/hero-bg.jpg"
                        value={content.home.hero.bgImage}
                        onChange={(e) => updateSection("home", "hero", "bgImage", e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                    <input 
                      type="text" 
                      value={content.home.hero.buttonText}
                      onChange={(e) => updateSection("home", "hero", "buttonText", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 font-mono text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {activePage === "contact" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <LinkIcon className="w-5 h-5 text-gray-400" /> Contact Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                    <input 
                      type="text" 
                      value={content.contact.info.address}
                      onChange={(e) => updateSection("contact", "info", "address", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      value={content.contact.info.phone}
                      onChange={(e) => updateSection("contact", "info", "phone", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      value={content.contact.info.email}
                      onChange={(e) => updateSection("contact", "info", "email", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {activePage === "about" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                  <Type className="w-5 h-5 text-gray-400" /> Mission Statement
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mission Title</label>
                    <input 
                      type="text" 
                      value={content.about.mission.title}
                      onChange={(e) => updateSection("about", "mission", "title", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mission Description</label>
                    <textarea 
                      value={content.about.mission.description}
                      onChange={(e) => updateSection("about", "mission", "description", e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none h-32"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* In a real Elementor build, we'd loop through dynamically defined blocks. 
                For this MVP CMS, these forms inject raw JSON straight to Prisma */}

          </div>
        </div>
      </div>
    </div>
  );
}
