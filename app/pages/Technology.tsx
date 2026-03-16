import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sun, VolumeX, Sparkles, MoveDown, Info, Layers } from 'lucide-react';

const ComparisonSection = () => {
  const [activeTab, setActiveTab] = useState<'knife' | 'curtain'>('curtain');

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Curtain Coating Advantage</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Why we moved beyond traditional knife coating. A physics-driven approach to uniformity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Simulation */}
          <div className="bg-slate-800 p-8 rounded-xl aspect-video relative overflow-hidden flex flex-col items-center justify-center border border-slate-700">
             <div className="absolute top-4 left-4 text-xs font-mono text-slate-500 uppercase">Process Simulation</div>
             
             {activeTab === 'knife' ? (
               <div className="w-full max-w-md relative">
                 {/* Knife Tool */}
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-12 bg-gray-400 z-20"></div>
                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-300 z-20 rounded-b-sm"></div>
                 
                 {/* Stress indicators */}
                 <motion.div 
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-red-500/50 blur-sm z-10"
                 />
                 
                 {/* Fabric Moving */}
                 <div className="h-2 bg-slate-600 w-full mt-8 relative overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-slate-500 to-transparent opacity-30"
                    />
                 </div>
                 <div className="mt-4 text-center text-red-400 text-sm font-mono">High Mechanical Stress • Uneven Coating</div>
               </div>
             ) : (
               <div className="w-full max-w-md relative">
                 {/* Curtain Head */}
                 <div className="w-full h-4 bg-blue-500/20 rounded-full mb-1 blur-sm absolute top-0"></div>
                 <div className="w-2/3 mx-auto h-2 bg-[#cd7f32] rounded-full mb-0 z-20 relative"></div>
                 
                 {/* The Curtain Fall */}
                 <motion.div 
                    className="w-2/3 mx-auto bg-gradient-to-b from-[#cd7f32]/80 to-[#cd7f32]/10 h-32 z-10 backdrop-blur-sm"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1 }}
                    style={{ originY: 0 }}
                 />
                 
                 {/* Fabric Moving */}
                 <div className="h-2 bg-slate-600 w-full -mt-2 relative z-0">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                      className="absolute top-0 left-0 w-full h-full bg-blue-500/20"
                    />
                 </div>
                 <div className="mt-4 text-center text-[#cd7f32] text-sm font-mono">Zero Contact Stress • Atomic Precision</div>
               </div>
             )}
          </div>

          {/* Controls & Data */}
          <div>
            <div className="flex space-x-4 mb-8">
              <button 
                onClick={() => setActiveTab('knife')}
                className={`px-6 py-3 rounded-lg border transition-all ${activeTab === 'knife' ? 'bg-slate-700 border-slate-600 text-white' : 'border-slate-800 text-slate-500 hover:text-white'}`}
              >
                Legacy Knife Coating
              </button>
              <button 
                onClick={() => setActiveTab('curtain')}
                className={`px-6 py-3 rounded-lg border transition-all ${activeTab === 'curtain' ? 'bg-[#cd7f32] border-[#cd7f32] text-white' : 'border-slate-800 text-slate-500 hover:text-white'}`}
              >
                Curtain Coating
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${activeTab === 'curtain' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  <MoveDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Mechanical Stress</h4>
                  <p className="text-slate-400 text-sm">
                    {activeTab === 'curtain' 
                      ? "Zero. The coating falls via gravity, preserving the fabric's structural integrity." 
                      : "High. The knife scrapes the surface, potentially damaging delicate fibers."}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${activeTab === 'curtain' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Layer Uniformity</h4>
                  <p className="text-slate-400 text-sm">
                    {activeTab === 'curtain' 
                      ? "Perfect. +/- 1 micron tolerance across the entire 3.2m width." 
                      : "Variable. Depends on blade angle and fabric tension, leading to streaks."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ScienceCard = ({ icon, title, value, desc, color }: { icon: React.ReactNode, title: string, value: string, desc: string, color: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 hover:-translate-y-2 transition-transform duration-300" style={{ borderColor: color }}>
    <div className="mb-6 inline-block p-4 rounded-full bg-slate-50" style={{ color: color }}>{icon}</div>
    <h3 className="text-2xl font-bold text-slate-800 mb-2">{title}</h3>
    <div className="text-4xl font-serif font-bold mb-4" style={{ color: color }}>{value}</div>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const Technology = () => {
  return (
    <div className="bg-slate-50">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#003366] mb-6">The Science of Silence</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            We don't just weave fabric; we engineer barriers. Barriers against heat, noise, and entropy.
          </p>
        </div>
      </div>

      <ComparisonSection />

      <section className="py-24 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 -mt-32 relative z-10">
          <ScienceCard 
            icon={<Sun className="w-8 h-8" />}
            title="Thermodynamics"
            value="5mm"
            desc="Our 3D double-layer Roman blind creates a 5mm static air insulation barrier, reducing heat transfer by up to 40%."
            color="#DA291C"
          />
          <ScienceCard 
            icon={<VolumeX className="w-8 h-8" />}
            title="Acoustics"
            value="35dB"
            desc="Effective sound absorption in the 30-8000Hz range, ideal for open-plan offices and hospitality environments."
            color="#003366"
          />
          <ScienceCard 
            icon={<Sparkles className="w-8 h-8" />}
            title="Nano-Protection"
            value="100%"
            desc="Hydrophobic and oleophobic nano-structures prevent staining and allow for self-cleaning properties."
            color="#cd7f32"
          />
        </div>
      </section>

      <section className="py-20 bg-white text-center">
         <div className="container mx-auto px-6">
           <h2 className="text-3xl font-bold text-[#003366] mb-8">Technical Specifications</h2>
           <div className="overflow-x-auto">
             <table className="w-full max-w-4xl mx-auto text-left border-collapse">
               <thead>
                 <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                   <th className="p-4 border-b">Parameter</th>
                   <th className="p-4 border-b">Standard</th>
                   <th className="p-4 border-b">Huachen Performance</th>
                 </tr>
               </thead>
               <tbody className="text-slate-700">
                 <tr>
                   <td className="p-4 border-b font-medium">Light Fastness</td>
                   <td className="p-4 border-b">ISO 105 B02</td>
                   <td className="p-4 border-b text-[#003366] font-bold">Grade 6-7</td>
                 </tr>
                 <tr>
                   <td className="p-4 border-b font-medium">Tensile Strength</td>
                   <td className="p-4 border-b">ISO 13934-1</td>
                   <td className="p-4 border-b text-[#003366] font-bold">&gt; 1200N</td>
                 </tr>
                 <tr>
                   <td className="p-4 border-b font-medium">Fire Retardancy</td>
                   <td className="p-4 border-b">NFPA 701</td>
                   <td className="p-4 border-b text-[#003366] font-bold">Pass (Class A)</td>
                 </tr>
                 <tr>
                   <td className="p-4 border-b font-medium">Formaldehyde</td>
                   <td className="p-4 border-b">JIS L 1041</td>
                   <td className="p-4 border-b text-[#003366] font-bold">Not Detected</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>
      </section>
    </div>
  );
};
