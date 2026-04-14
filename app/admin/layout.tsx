"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <div className="!min-h-screen !flex !font-sans !absolute !inset-0 !z-[100] !m-0 !p-0 !overflow-hidden !bg-gray-50" style={{ fontFamily: 'sans-serif' }}>
      
      {/* Collapsible Sidebar */}
      <AdminSidebar />

      {/* Main Dynamic View */}
      <main className="!flex-1 !h-full !overflow-y-auto !bg-gray-50 !relative">
        {children}
      </main>

    </div>
  );
}
