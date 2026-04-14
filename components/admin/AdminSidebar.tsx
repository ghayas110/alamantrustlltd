"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, LayoutTemplate, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const links = [
    { name: "Clients CRM", href: "/admin/clients", icon: Users },
    { name: "Visual CMS", href: "/admin/editor", icon: LayoutTemplate },
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold text-white tracking-wider">Alaman Trust</h1>
        <p className="text-xs text-gray-400 mt-1">Admin Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-blue-600/10 text-blue-500"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex w-full items-center space-x-3 px-4 py-3 text-red-400 rounded-lg transition-colors hover:bg-red-500/10"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
