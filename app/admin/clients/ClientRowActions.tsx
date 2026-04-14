"use client";

import { useState, useRef } from "react";
import { Eye, Pencil, X, Mail, Phone, User, UploadCloud, Loader2, FileText, Download, Trash2 } from "lucide-react";
import { updateClient, addClientAsset, deleteClientAsset, deleteClient } from "@/app/actions/client";

export default function ClientRowActions({ client }: { client: any }) {
  const [viewOpen, setViewOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  
  // Edit State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    firstName: client.firstName, 
    lastName: client.lastName, 
    email: client.email || "", 
    phone: client.phone || "" 
  });

  const [isDeletingClient, setIsDeletingClient] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await updateClient(client.id, formData.firstName, formData.lastName, formData.email, formData.phone);
      setEditOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url) {
        await addClientAsset(client.id, file.name, data.url, file.type || "unknown");
      }
    } catch (err) {
      alert("Failed to upload document.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteAsset = async (assetId: number) => {
    await deleteClientAsset(assetId);
  };

  const executeDeleteClient = async () => {
    setIsDeletingClient(true);
    try {
      await deleteClient(client.id);
      setConfirmDeleteOpen(false);
      setEditOpen(false);
      setViewOpen(false);
    } catch (err) {
      alert("Failed to delete client.");
      setIsDeletingClient(false);
    }
  };

  return (
    <>
      <div className="!flex !items-center !justify-end !gap-2 !m-0 !p-0">
        <button 
          onClick={() => setViewOpen(true)}
          className="!p-2 !bg-gray-100 !text-gray-600 hover:!bg-blue-50 hover:!text-blue-600 !rounded-lg !transition-colors !border-none !cursor-pointer !m-0"
          title="View Client"
        >
          <Eye className="!w-4 !h-4" />
        </button>
        <button 
          onClick={() => setEditOpen(true)}
          className="!p-2 !bg-gray-100 !text-gray-600 hover:!bg-[#C5A473]/10 hover:!text-[#C5A473] !rounded-lg !transition-colors !border-none !cursor-pointer !m-0"
          title="Edit Client"
        >
          <Pencil className="!w-4 !h-4" />
        </button>
        <button 
          onClick={() => setConfirmDeleteOpen(true)}
          disabled={isDeletingClient}
          className="!p-2 !bg-gray-100 !text-gray-600 hover:!bg-red-50 hover:!text-red-500 !rounded-lg !transition-colors !border-none !cursor-pointer !m-0 disabled:!opacity-50"
          title="Delete Client"
        >
          {isDeletingClient ? <Loader2 className="!w-4 !h-4 !animate-spin" /> : <Trash2 className="!w-4 !h-4" />}
        </button>
      </div>

      {/* ================= EDIT MODAL ================= */}
      {editOpen && (
        <div className="!fixed !inset-0 !z-[9999] !flex !items-center !justify-center !p-4 !overflow-hidden">
          <div className="!absolute !inset-0 !bg-black/50 !backdrop-blur-sm" onClick={() => setEditOpen(false)}></div>
          
          <div className="!bg-white !rounded-3xl !shadow-2xl !w-full !max-w-[700px] !max-h-[90vh] !relative !z-10 !overflow-y-auto !flex !flex-col !custom-scrollbar" style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
            <div className="!px-8 !py-6 !border-b !border-gray-100 !flex !justify-between !items-center !bg-gray-50/50 !m-0 !sticky !top-0 !z-20">
              <div className="!m-0 !p-0 text-left">
                <h2 className="!text-[24px] !leading-none !font-bold !text-gray-900 !tracking-tight !m-0 !p-0">Edit Client Details</h2>
                <p className="!text-[14px] !text-gray-500 !mt-2 !m-0 !p-0">Update profile metrics and attach documents.</p>
              </div>
              <button onClick={() => setEditOpen(false)} className="!p-2 hover:!bg-gray-200 !rounded-full !transition-colors !text-gray-500 !border-none !bg-transparent !m-0 flex items-center justify-center">
                <X className="!w-6 !h-6" strokeWidth={2.5} />
              </button>
            </div>

            <div className="!p-8 !space-y-8 !m-0 text-left">
                {/* Profile Form */}
                <form onSubmit={handleEditSubmit} className="!space-y-6 !m-0">
                  <div className="!grid !grid-cols-2 !gap-6 !m-0 !p-0">
                    <div className="!m-0 !p-0">
                      <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">First Name</label>
                      <div className="!relative !m-0 !p-0 !flex !items-center">
                        <User className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                        <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]" style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                    <div className="!m-0 !p-0">
                      <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Last Name</label>
                      <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]" style={{ paddingLeft: '1rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }} />
                    </div>
                  </div>

                  <div className="!grid !grid-cols-2 !gap-6 !m-0 !p-0">
                    <div className="!m-0 !p-0">
                      <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Email Address</label>
                      <div className="!relative !m-0 !p-0 !flex !items-center">
                        <Mail className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                        <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]" style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                    <div className="!m-0 !p-0">
                      <label className="!block !text-[12px] !font-bold !text-gray-700 !uppercase !tracking-wider !mb-2 !m-0">Phone Number</label>
                      <div className="!relative !m-0 !p-0 !flex !items-center">
                        <Phone className="!absolute !left-4 !w-5 !h-5 !text-gray-400 !z-10" strokeWidth={2} />
                        <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="!w-full !m-0 !border-[1.5px] !border-gray-200 !rounded-xl focus:!ring-0 focus:!border-[#C5A473] !outline-none !transition-all !text-[15px] !bg-[#FAFAFA]" style={{ paddingLeft: '3rem', paddingRight: '1rem', paddingTop: '0.8rem', paddingBottom: '0.8rem', height: 'auto', boxSizing: 'border-box' }} />
                      </div>
                    </div>
                  </div>

                  <div className="!flex !justify-end !p-0 !m-0 !pt-2">
                    <button type="submit" disabled={isSubmitting} className="!px-6 !py-2.5 !font-bold !text-white !bg-[#C5A473] hover:!bg-[#b59567] !rounded-xl !shadow-md !shadow-[#C5A473]/20 !transition-all disabled:!opacity-70 !text-[13px] !border-none !m-0">
                      {isSubmitting ? "Saving..." : "Save Profile Updates"}
                    </button>
                  </div>
                </form>

                {/* Documents Engine */}
                <div className="!border-t !border-gray-100 !pt-6 !m-0 !p-0">
                    <h3 className="!text-[16px] !font-bold !text-gray-900 !mb-4 !flex !items-center !gap-2 !m-0"><FileText className="!w-5 !h-5 !text-[#C5A473]" /> Client Documents & Assets</h3>
                    
                    <div className="!bg-gray-50 !border-[1.5px] !border-dashed !border-gray-300 !rounded-xl !p-6 !flex !flex-col !items-center !justify-center gap-3 !mb-6 !transition-colors hover:!border-[#C5A473] hover:!bg-[#C5A473]/5">
                        <UploadCloud className="!w-8 !h-8 !text-gray-400" />
                        <div className="!text-center !m-0 !p-0">
                            <p className="!text-[14px] !font-bold !text-gray-700 !m-0 !mb-1">Upload New Document</p>
                            <p className="!text-[12px] !text-gray-500 !m-0">PDF, DOCX, PNG, JPG up to 10MB</p>
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="!hidden" />
                        <button onClick={() => fileInputRef.current?.click()} disabled={isUploading} className="!mt-2 !px-4 !py-2 !bg-white !border !border-gray-200 !rounded-lg !text-[13px] !font-bold !text-gray-700 hover:!border-[#C5A473] hover:!text-[#C5A473] !transition-all !cursor-pointer">
                            {isUploading ? <span className="!flex !items-center !gap-2"><Loader2 className="!w-4 !h-4 !animate-spin" /> Uploading to Server...</span> : "Browse Files"}
                        </button>
                    </div>

                    <div className="!space-y-3 !m-0 !p-0">
                        {client.assets.length === 0 ? (
                            <p className="!text-[13px] !text-gray-400 !italic !text-center !py-4">No documents attached to this client yet.</p>
                        ) : (
                            client.assets.map((asset: any) => (
                                <div key={asset.id} className="!flex !items-center !justify-between !p-4 !bg-white !border !border-gray-200 !rounded-xl !shadow-sm">
                                    <div className="!flex !items-center !gap-3 !overflow-hidden">
                                        <div className="!w-10 !h-10 !rounded-lg !bg-blue-50 !text-blue-600 !flex !items-center !justify-center !flex-shrink-0">
                                            <FileText className="!w-5 !h-5" />
                                        </div>
                                        <div className="!overflow-hidden">
                                            <p className="!text-[14px] !font-bold !text-gray-900 !m-0 !truncate">{asset.fileName}</p>
                                            <p className="!text-[11px] !text-gray-500 !m-0 !uppercase tracking-wider !mt-0.5">{new Date(asset.uploadedAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                    <div className="!flex !items-center !gap-2 !flex-shrink-0">
                                        <a href={asset.filePath} target="_blank" rel="noopener noreferrer" className="!p-2 !text-gray-500 hover:!bg-gray-100 hover:!text-gray-900 !rounded-lg !transition-colors !border-none !bg-transparent !cursor-pointer" title="Download Tool">
                                            <Download className="!w-4 !h-4" />
                                        </a>
                                        <button onClick={() => handleDeleteAsset(asset.id)} className="!p-2 !text-gray-400 hover:!bg-red-50 hover:!text-red-500 !rounded-lg !transition-colors !border-none !bg-transparent !cursor-pointer" title="Delete">
                                            <Trash2 className="!w-4 !h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* Danger Zone inside Edit Modal */}
                <div className="!border-t !border-red-100 !pt-6 !m-0 !p-0">
                    <div className="!bg-red-50 !border !border-red-200 !rounded-xl !p-4 !flex !items-center !justify-between">
                        <div>
                            <p className="!text-[14px] !font-bold !text-red-700 !m-0">Delete Client Profile</p>
                            <p className="!text-[12px] !text-red-500 !m-0 !mt-0.5">Permanently removes all data and attached documents.</p>
                        </div>
                        <button onClick={() => setConfirmDeleteOpen(true)} disabled={isDeletingClient} className="!flex !items-center !gap-2 !px-4 !py-2 !bg-red-600 !text-white !text-[13px] !font-bold !rounded-lg hover:!bg-red-700 !transition-colors !border-none !cursor-pointer disabled:!opacity-50">
                            {isDeletingClient ? <Loader2 className="!w-4 !h-4 !animate-spin" /> : <Trash2 className="!w-4 !h-4" />}
                            Delete Client
                        </button>
                    </div>
                </div>

            </div>
          </div>
        </div>
      )}

      {/* ================= VIEW MODAL ================= */}
      {viewOpen && (
        <div className="!fixed !inset-0 !z-[9999] !flex !items-center !justify-center !p-4 !overflow-hidden">
          <div className="!absolute !inset-0 !bg-black/50 !backdrop-blur-sm" onClick={() => setViewOpen(false)}></div>
          
          <div className="!bg-white !rounded-3xl !shadow-2xl !w-full !max-w-[700px] !max-h-[90vh] !relative !z-10 !overflow-y-auto !flex !flex-col !custom-scrollbar" style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
            <div className="!px-8 !py-6 !border-b !border-gray-100 !flex !justify-between !items-center !bg-[#18181B] !m-0 !sticky !top-0 !z-20">
              <div className="!flex !items-center !gap-4 !m-0 !p-0">
                <div className="!w-14 !h-14 !rounded-xl !bg-[#C5A473]/20 !text-[#C5A473] !flex !items-center !justify-center !font-bold !text-[24px]">
                  {(client.firstName?.charAt(0) || "U").toUpperCase()}
                </div>
                <div className="!m-0 !p-0 text-left">
                  <h2 className="!text-[24px] !leading-none !font-bold !text-white !tracking-tight !m-0 !p-0">{client.firstName} {client.lastName}</h2>
                  <p className="!text-[13px] !text-gray-400 !mt-1.5 !m-0 !p-0 !flex !items-center !gap-1.5"><User className="!w-3.5 !h-3.5"/> Client ID: #{client.id}</p>
                </div>
              </div>
              <button 
                onClick={() => setViewOpen(false)} 
                className="!p-2 hover:!bg-gray-800 !rounded-full !transition-colors !text-gray-400 hover:!text-white !border-none !bg-transparent !m-0 flex items-center justify-center"
              >
                <X className="!w-6 !h-6" strokeWidth={2.5} />
              </button>
            </div>

            <div className="!p-8 !space-y-8 !m-0 text-left">
                {/* Metrics */}
                <div className="!grid !grid-cols-2 !gap-4 !m-0">
                    <div className="!bg-gray-50 !p-4 !rounded-xl !border !border-gray-100 !flex !items-start !gap-3">
                        <Mail className="!w-5 !h-5 !text-[#C5A473] !mt-0.5" />
                        <div>
                            <p className="!text-[11px] !font-bold !text-gray-500 !uppercase !tracking-wider !mb-1 !m-0">Email</p>
                            <p className="!text-[14px] !font-bold !text-gray-900 !m-0">{client.email || 'N/A'}</p>
                        </div>
                    </div>
                    <div className="!bg-gray-50 !p-4 !rounded-xl !border !border-gray-100 !flex !items-start !gap-3">
                        <Phone className="!w-5 !h-5 !text-[#C5A473] !mt-0.5" />
                        <div>
                            <p className="!text-[11px] !font-bold !text-gray-500 !uppercase !tracking-wider !mb-1 !m-0">Phone</p>
                            <p className="!text-[14px] !font-bold !text-gray-900 !m-0">{client.phone || 'N/A'}</p>
                        </div>
                    </div>
                </div>

                {/* View Documents */}
                <div className="!m-0 !p-0">
                    <h3 className="!text-[16px] !font-bold !text-gray-900 !mb-4 !flex !items-center !gap-2 !m-0"><FileText className="!w-5 !h-5 !text-[#C5A473]" /> Attached Portfolio Assets</h3>
                    {client.assets.length === 0 ? (
                        <div className="!p-8 !text-center !bg-gray-50 !rounded-xl !border !border-gray-100 !flex !flex-col !items-center !justify-center cursor-default">
                                <FileText className="!w-10 !h-10 !text-gray-300 !mb-3" />
                                <p className="!text-[15px] !font-bold !text-gray-700 !m-0 !mb-1">No Assets Found</p>
                                <p className="!text-[13px] !text-gray-500 !m-0">This client doesn't have any attached documents.</p>
                        </div>
                    ) : (
                        <div className="!grid !grid-cols-2 !gap-4 !m-0 !p-0">
                            {client.assets.map((asset: any) => (
                                <a 
                                    key={asset.id} 
                                    href={asset.filePath} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="!group !flex !items-center !gap-3 !p-4 !bg-white !border !border-gray-200 !rounded-xl !transition-all hover:!border-[#C5A473] hover:!shadow-md !no-underline"
                                >
                                    <div className="!w-12 !h-12 !rounded-lg !bg-gray-50 group-hover:!bg-[#C5A473]/10 !text-gray-400 group-hover:!text-[#C5A473] !flex !items-center !justify-center !flex-shrink-0 !transition-colors">
                                        <FileText className="!w-6 !h-6" />
                                    </div>
                                    <div className="!overflow-hidden !flex-1">
                                        <p className="!text-[14px] !font-bold !text-gray-900 !m-0 !truncate group-hover:!text-[#C5A473] !transition-colors">{asset.fileName}</p>
                                        <p className="!text-[11px] !text-gray-500 !m-0 !uppercase tracking-wider !mt-1">View Attached Document</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* Danger Zone inside View Modal */}
                <div className="!border-t !border-red-100 !pt-6 !m-0 !p-0">
                    <div className="!bg-red-50 !border !border-red-200 !rounded-xl !p-4 !flex !items-center !justify-between">
                        <div>
                            <p className="!text-[14px] !font-bold !text-red-700 !m-0">Delete Client Profile</p>
                            <p className="!text-[12px] !text-red-500 !m-0 !mt-0.5">Permanently removes all data and attached documents.</p>
                        </div>
                        <button onClick={() => setConfirmDeleteOpen(true)} disabled={isDeletingClient} className="!flex !items-center !gap-2 !px-4 !py-2 !bg-red-600 !text-white !text-[13px] !font-bold !rounded-lg hover:!bg-red-700 !transition-colors !border-none !cursor-pointer disabled:!opacity-50">
                            {isDeletingClient ? <Loader2 className="!w-4 !h-4 !animate-spin" /> : <Trash2 className="!w-4 !h-4" />}
                            Delete Client
                        </button>
                    </div>
                </div>

            </div>
          </div>
        </div>
      )}

      {/* ================= DELETE CONFIRMATION MODAL ================= */}
      {confirmDeleteOpen && (
        <div className="!fixed !inset-0 !z-[99999] !flex !items-center !justify-center !p-4">
          <div className="!absolute !inset-0 !bg-black/60 !backdrop-blur-sm" onClick={() => setConfirmDeleteOpen(false)}></div>
          
          <div className="!bg-white !rounded-3xl !shadow-2xl !w-full !max-w-[420px] !relative !z-10 !overflow-hidden" style={{ margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
            {/* Red Header */}
            <div className="!bg-red-600 !px-8 !py-8 !text-center">
              <div className="!w-16 !h-16 !rounded-full !bg-white/20 !mx-auto !flex !items-center !justify-center !mb-4">
                <Trash2 className="!w-8 !h-8 !text-white" strokeWidth={2} />
              </div>
              <h2 className="!text-[22px] !font-extrabold !text-white !m-0 !p-0">Delete Client?</h2>
            </div>

            {/* Body */}
            <div className="!px-8 !py-6 !text-center">
              <p className="!text-[16px] !font-bold !text-gray-900 !m-0 !mb-2">{client.firstName} {client.lastName}</p>
              <p className="!text-[14px] !text-gray-600 !m-0 !leading-relaxed">
                This action is <strong className="!text-red-600">permanent and irreversible</strong>. All client data including their profile information, uploaded documents, and associated assets will be permanently deleted from the system.
              </p>
            </div>

            {/* Actions */}
            <div className="!px-8 !pb-8 !flex !gap-3">
              <button 
                onClick={() => setConfirmDeleteOpen(false)}
                className="!flex-1 !py-3 !font-bold !text-gray-700 !bg-gray-100 hover:!bg-gray-200 !rounded-xl !transition-colors !text-[14px] !border-none !cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={executeDeleteClient}
                disabled={isDeletingClient}
                className="!flex-1 !py-3.5 !px-8 !font-bold !text-white !bg-red-600 hover:!bg-red-700 !rounded-lg !transition-colors !text-[14px] !border-none !cursor-pointer !text-center disabled:!opacity-50"
              >
                {isDeletingClient ? "Deleting..." : "Yes, Delete Permanently"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
