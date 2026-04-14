"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ArrowLeft } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      setIsLoading(false);
    } else {
      router.push("/admin/clients");
    }
  };

  return (
    <div className="absolute inset-0 z-[100] flex w-full min-h-screen bg-white m-0 p-0 overflow-hidden font-sans">
      
      {/* Back to Home Button */}
      <Link 
        href="/" 
        className="absolute top-8 left-8 z-[200] flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#C5A473]/50 transition-all font-bold backdrop-blur-md group"
      >
        <ArrowLeft className="w-5 h-5 text-[#C5A473] group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
        <span className="text-[14px] tracking-wide">Back to Home</span>
      </Link>
      
      {/* Left Panel - Brand / Visual */}
      <div className="hidden lg:flex w-[45%] relative flex-col justify-center items-center shadow-2xl z-10" style={{ backgroundColor: '#18181B' }}>
        
        {/* Subtle decorative glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-10 pointer-events-none" style={{ background: '#C5A473', filter: 'blur(120px)' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 pointer-events-none" style={{ background: '#A68B56', filter: 'blur(100px)' }}></div>

        <div className="relative z-10 p-16 max-w-xl w-full">
          <div className="p-10 rounded-[2rem] border border-white/5 backdrop-blur-md" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
            <h1 className="text-4xl font-bold text-white mb-6 tracking-tight flex items-center gap-4" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
              Alaman Trust
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 font-light opacity-90">
              Welcome to the central administrative platform. Manage your firm's assets, oversee client relationships, and publish content securely.
            </p>
            
            <div className="flex items-center gap-3 text-[#C5A473] font-medium px-6 py-4 rounded-xl border w-max" style={{ background: 'rgba(197, 164, 115, 0.1)', borderColor: 'rgba(197, 164, 115, 0.2)' }}>
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm tracking-wide uppercase">Secured Connection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-[55%] flex justify-center items-center bg-[#FAFAFA] relative z-20 px-6 py-12 overflow-y-auto">
        
        <div className="w-full max-w-[460px]">
          
          <div className="mb-14">
            <div className="lg:hidden text-center mb-10 pb-8 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-[#18181B] tracking-tight">Alaman Trust</h1>
            </div>
            
            <h2 className="text-4xl font-bold text-[#18181B] mb-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>Sign In</h2>
            <p className="text-gray-500 text-[1.1rem]">Please enter your administrative credentials.</p>
          </div>

          {error && (
            <div className="border p-4 rounded-lg mb-8 text-sm flex items-center shadow-sm" style={{ backgroundColor: '#FEF2F2', borderColor: '#FEE2E2', color: '#DC2626' }}>
              <div className="h-2 w-2 rounded-full mr-3 animate-pulse" style={{ backgroundColor: '#DC2626' }}></div>
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="space-y-8">
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ 
                    padding: '1.25rem', 
                    borderRadius: '0.75rem', 
                    border: '1px solid #E5E7EB', 
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    boxSizing: 'border-box',
                    fontSize: '1rem',
                    color: '#111827',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                  className="transition-colors focus:outline-none focus:border-[#C5A473] focus:ring-1 focus:ring-[#C5A473] m-0"
                  placeholder="admin@alamantrust.com"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 tracking-wide flex justify-between">
                  PASSWORD
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ 
                    padding: '1.25rem', 
                    borderRadius: '0.75rem', 
                    border: '1px solid #E5E7EB', 
                    backgroundColor: '#FFFFFF',
                    width: '100%',
                    boxSizing: 'border-box',
                    fontSize: '1rem',
                    color: '#111827',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                  }}
                  className="transition-colors focus:outline-none focus:border-[#C5A473] focus:ring-1 focus:ring-[#C5A473] m-0"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div style={{ marginTop: '50px', marginBottom: '30px' }}>
              <button
                type="submit"
                disabled={isLoading}
                style={{ 
                  height: '3.75rem', 
                  borderRadius: '0.75rem',
                  backgroundColor: '#C5A473',
                  color: '#FFFFFF',
                  width: '100%',
                  border: 'none',
                  cursor: isLoading ? 'wait' : 'pointer',
                  boxShadow: '0 4px 14px 0 rgba(197,164,115,0.39)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                className="flex justify-center items-center gap-3 text-lg font-bold hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(197,164,115,0.4)] active:translate-y-0 disabled:opacity-75 disabled:transform-none m-0"
              >
                <span>{isLoading ? "Authenticating..." : "Access Portal"}</span>
                {!isLoading && <ArrowRight strokeWidth={2.5} className="w-5 h-5" />}
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center text-sm font-medium" style={{ color: '#9CA3AF' }}>
            &copy; {new Date().getFullYear()} Alaman Trust Limited. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
