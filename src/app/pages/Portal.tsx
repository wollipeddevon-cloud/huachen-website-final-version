import React, { useState } from 'react';
import { Lock } from 'lucide-react';

export const Portal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert("This is a demo portal. Backend integration required.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 py-20 px-6">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full border-t-4 border-[#cd7f32]">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#003366] text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-[#003366]">Distributor Portal</h1>
          <p className="text-slate-500 mt-2">Access stock levels, order tracking, and marketing assets.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none"
              placeholder="partner@company.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-[#cd7f32] text-white font-bold py-3 rounded-lg hover:bg-[#b06a2e] transition-colors">
            Secure Login
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-slate-500 hover:text-[#003366]">Forgot password?</a>
          <span className="mx-2 text-slate-300">|</span>
          <a href="/contact" className="text-sm text-slate-500 hover:text-[#003366]">Request Access</a>
        </div>
      </div>
    </div>
  );
};
