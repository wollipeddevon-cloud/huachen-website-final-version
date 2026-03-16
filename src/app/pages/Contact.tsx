import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import GlobeDemo from '../components/ui/globe-demo';

const ContactForm = ({ type }: { type: 'fabricator' | 'designer' }) => (
  <form className="space-y-6 animate-in fade-in duration-500">
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none" />
      </div>
    </div>

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
      <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none" />
    </div>

    {type === 'fabricator' && (
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Estimated Monthly Volume (Meters)</label>
        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none">
          <option>&lt; 1,000</option>
          <option>1,000 - 10,000</option>
          <option>10,000 - 50,000</option>
          <option>&gt; 50,000</option>
        </select>
      </div>
    )}

    {type === 'designer' && (
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none">
          <option>Hospitality</option>
          <option>Commercial Office</option>
          <option>Residential</option>
          <option>Public Space</option>
        </select>
      </div>
    )}

    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
      <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#cd7f32] focus:outline-none"></textarea>
    </div>

    <button type="submit" className="w-full bg-[#003366] text-white font-bold py-4 rounded-lg hover:bg-[#002244] transition-colors">
      Send Inquiry
    </button>
  </form>
);

export const Contact = () => {
  const [userType, setUserType] = useState<'fabricator' | 'designer'>('fabricator');

  return (
    <div className="bg-white">
      <div className="bg-[#003366] py-20 text-center text-white">
        <h1 className="text-4xl font-serif font-bold mb-4">Connect with Huachen</h1>
        <p className="text-slate-300">Global Reach, Local Support.</p>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#003366] mb-6">Global Headquarters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#cd7f32] mt-1" />
                  <p className="text-slate-600">
                    No. 93, Miaohe Road, Yunhe Street,<br/>
                    Linping District, Hangzhou, China
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-[#cd7f32]" />
                  <p className="text-slate-600">+86 15869007713</p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-[#cd7f32]" />
                  <p className="text-slate-600">Info@hczr.com</p>
                </div>
                <a 
                   href="https://wa.me/8615869007713" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                 >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#cd7f32]">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <p className="text-slate-600">WhatsApp: +86 15869007713</p>
                </a>
              </div>
            </div>

            {/* Abstract Map Visualization */}
            <GlobeDemo />
          </div>

          {/* Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#003366] mb-2">Send an Inquiry</h2>
              <p className="text-slate-500 text-sm">Select your profile to get the most relevant information.</p>
            </div>

            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setUserType('fabricator')}
                className={`flex-1 py-3 text-center rounded-lg font-medium transition-colors ${userType === 'fabricator' ? 'bg-[#003366] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Fabricator / Distributor
              </button>
              <button 
                onClick={() => setUserType('designer')}
                className={`flex-1 py-3 text-center rounded-lg font-medium transition-colors ${userType === 'designer' ? 'bg-[#003366] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                Architect / Designer
              </button>
            </div>

            <ContactForm type={userType} />
          </div>

        </div>
      </div>
    </div>
  );
};
