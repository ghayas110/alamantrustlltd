"use client";

import { useState } from "react";
import { UserPlus, X, Mail, Phone, User } from "lucide-react";
import { createClient } from "@/app/actions/client";
import { useRouter } from "next/navigation";

export default function AddClientModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createClient(formData.firstName, formData.lastName, formData.email, formData.phone);
      setIsOpen(false);
      setFormData({ firstName: "", lastName: "", email: "", phone: "" });
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="!flex !items-center !gap-2 !bg-[#18181B] !text-white !px-5 !py-3 !rounded-xl !font-bold hover:!bg-[#2A2A35] !transition-colors !shadow-lg !shadow-gray-200 !text-sm !w-auto !border-none !m-0 !cursor-pointer"
        style={{ letterSpacing: 'normal', fontFamily: 'sans-serif' }}
      >
        <UserPlus className="!w-5 !h-5" strokeWidth={2.5} />
        Add New Client
      </button>

      {isOpen && (
        <div className="!fixed !inset-0 !z-[9999] !flex !items-center !justify-center !p-4 !overflow-hidden">
          <div className="!absolute !inset-0 !bg-black/50 !backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="!bg-white !rounded-3xl !shadow-2xl !w-full !max-w-[500px] !relative !z-10 !overflow-hidden !flex !flex-col" style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
            <div className="!px-8 !py-6 !border-b !border-gray-100 !flex !justify-between !items-center !bg-gray-50/50 !m-0">
              <div className="!m-0 !p-0 text-left">
                <h2 className="!text-[24px] !leading-none !font-bold !text-gray-900 !tracking-tight !m-0 !p-0">Register Client</h2>
                <p className="!text-[14px] !text-gray-500 !mt-2 !m-0 !p-0">Create a new corporate or individual profile.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="!p-2 hover:!bg-gray-200 !rounded-full !transition-colors !text-gray-500 !border-none !bg-transparent !m-0 !flex !items-center !justify-center"
              >
                <X className="!w-6 !h-6" strokeWidth={2.5} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="!p-8 !space-y-6 !m-0 text-left">
              <div className="!grid !grid-cols-2 !gap-6 !m-0 !p-0">
                <div className="!m-0 !p-0">
                  <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">First Name</label>
                  <div className="!relative !m-0 !p-0 !flex !items-center">
                    <User className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                    <input 
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={e => setFormData({...formData, firstName: e.target.value})}
                      className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]"
                      style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }}
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="!m-0 !p-0">
                  <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Last Name</label>
                  <input 
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                    className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]"
                    style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }}
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="!m-0 !p-0">
                <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Email Address</label>
                <div className="!relative !m-0 !p-0 !flex !items-center">
                  <Mail className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]"
                    style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }}
                    placeholder="corporate@example.com"
                  />
                </div>
              </div>

              <div className="!m-0 !p-0">
                <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Phone Number</label>
                <div className="!relative !m-0 !p-0 !flex !items-center">
                  <Phone className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                  <input 
                    type="text"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]"
                    style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }}
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div className="!pt-6 !mt-6 !border-t !border-gray-100 !flex !justify-end !gap-3 !p-0 text-right">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="!px-6 !py-2.5 !font-semibold !text-gray-600 hover:!bg-gray-100 !rounded-xl !transition-colors !text-[14px] !bg-transparent !border-none !m-0"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="!px-8 !py-3 !font-bold !text-white !bg-[#C5A473] hover:!bg-[#b59567] !rounded-xl !shadow-lg !shadow-[#C5A473]/30 !transition-all disabled:!opacity-70 !text-[14px] !border-none !m-0"
                  style={{ letterSpacing: 'normal' }}
                >
                  {isSubmitting ? "Creating..." : "Save Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
