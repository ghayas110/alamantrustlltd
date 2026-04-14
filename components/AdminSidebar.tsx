"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, FileText, LogOut, PanelLeftClose, PanelLeft } from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse sidebar when navigating to Visual CMS for maximum Elementor space
  useEffect(() => {
    if (pathname === "/admin/editor") {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [pathname]);

  return (
    <div className={`!flex !flex-col !h-full !bg-[#18181B] !text-white !transition-all !duration-300 !ease-in-out !relative !z-20 !shadow-2xl ${isCollapsed ? '!w-[80px]' : '!w-64'}`}>
      
      {/* Sidebar Header & Toggle */}
      <div className="!p-6 !flex !justify-between !items-center">
        {!isCollapsed && (
          <div className="!animate-in !fade-in !zoom-in-95 !duration-200 !flex !items-center !gap-3">
            <img src="/logo.png" alt="Al-Aman Trust" className="!w-10 !h-10 !object-contain !flex-shrink-0" />
            <div>
              <h2 className="!text-[18px] !font-extrabold !text-white !m-0 !p-0 !leading-tight">Al-Aman Trust</h2>
              <p className="!text-[#C5A473] !text-[10px] !font-bold !uppercase !tracking-[0.2em] !m-0 !p-0">Admin Portal</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <img src="/logo.png" alt="Al-Aman Trust" className="!w-8 !h-8 !object-contain !mx-auto" />
        )}
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`!p-2 !rounded-xl hover:!bg-white/10 !transition-colors !text-gray-400 hover:!text-white !border-none !bg-transparent !cursor-pointer ${isCollapsed ? '!mx-auto' : ''}`}
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeft className="!w-6 !h-6" /> : <PanelLeftClose className="!w-5 !h-5" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="!flex-1 !px-4 !py-8 !space-y-3">
        <Link 
          href="/admin/clients" 
          className={`!flex !items-center !gap-3 !rounded-xl !transition-all !m-0 !text-[14px] !font-bold !group ${
            pathname === "/admin/clients" 
              ? "!bg-[#C5A473] !text-white !shadow-lg !shadow-[#C5A473]/20" 
              : "!text-gray-400 hover:!bg-white/10 hover:!text-white"
          } ${isCollapsed ? '!justify-center !px-0 !py-4' : '!px-5 !py-3.5'}`}
          title="Clients & CRM"
        >
          <Users className={`!transition-colors ${pathname === "/admin/clients" ? "!text-white" : "!text-[#C5A473] group-hover:!text-white"} ${isCollapsed ? '!w-6 !h-6' : '!w-5 !h-5'}`} />
          {!isCollapsed && "Clients & CRM"}
        </Link>
        
        <Link 
          href="/admin/editor" 
          className={`!flex !items-center !gap-3 !rounded-xl !transition-all !m-0 !text-[14px] !font-bold !group ${
            pathname === "/admin/editor" 
              ? "!bg-[#C5A473] !text-white !shadow-lg !shadow-[#C5A473]/20" 
              : "!text-gray-400 hover:!bg-white/10 hover:!text-white"
          } ${isCollapsed ? '!justify-center !px-0 !py-4' : '!px-5 !py-3.5'}`}
          title="Visual CMS"
        >
          <FileText className={`!transition-colors ${pathname === "/admin/editor" ? "!text-white" : "!text-gray-400 group-hover:!text-white"} ${isCollapsed ? '!w-6 !h-6' : '!w-5 !h-5'}`} />
          {!isCollapsed && "Visual CMS"}
        </Link>
      </nav>

      {/* Footer */}
      <div className="!p-4 !border-t !border-white/10">
        <button 
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className={`!flex !items-center !gap-3 !rounded-xl !text-gray-400 !font-bold hover:!bg-red-500/20 hover:!text-red-400 !transition-colors !m-0 !text-[14px] !border-none !bg-transparent !cursor-pointer !w-full ${isCollapsed ? '!justify-center !px-0 !py-4' : '!px-5 !py-3.5'}`}
          title="Sign Out"
        >
          <LogOut className={`!transition-colors ${isCollapsed ? '!w-6 !h-6' : '!w-5 !h-5'}`} />
          {!isCollapsed && "Sign Out"}
        </button>
      </div>
    </div>
  );
}
