import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Award, TrendingUp, Leaf, FlaskConical, Droplet, ShieldCheck, Factory, Globe, ScrollText, Zap } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../components/ui/3d-card';
import { CometCard } from '../components/ui/comet-card';

const machineImg = "https://images.unsplash.com/photo-1758269664127-1f744a56e06c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const isoImg = "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386787/Foundation_Technical_2_i88tet.png";
const fabricImg = "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386788/Foundation_Technical_3_h9sls1.jpg";
const globalImg = "https://images.unsplash.com/photo-1596434220574-9af8bf9a0891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const dowSigningImg = "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387245/last_picture_qa8qyq.jpg";

const timelineData = [
  {
    phase: "Phase 1: Foundation & Technical Readiness",
    period: "1997–2007",
    subtitle: "Building the \"Hard Power\" required for international competition.",
    events: [
      { 
        year: "1997", 
        month: "Mar", 
        title: "Pioneered Manufacturing", 
        desc: "Imported China’s first 3.4-meter blackout coating machine from South Korea, establishing a benchmark for export-grade fabric quality.",
        image: machineImg
      },
      { 
        year: "2002", 
        month: "May", 
        title: "ISO Certification", 
        desc: "Achieved ISO9001:2000 International Quality Management System Certification, laying the standardized groundwork.",
        image: isoImg
      },
      { 
        year: "2006", 
        title: "Wide-Width Production", 
        desc: "Introduced the 320cm wide-width multi-color flocking production line—filling a gap in the domestic market.",
        image: fabricImg
      }
    ]
  },
  {
    phase: "Phase 2: Market Entry & Compliance",
    period: "2008–2013",
    subtitle: "Moving from \"Domestic Sales\" to \"Global Compliance.\"",
    events: [
      { 
        year: "2008", 
        title: "Global Launch", 
        desc: "Established the Foreign Trade Department to transition from indirect export to direct overseas sales.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387984/Market_Entry_Compliance_1_kkrmdm.jpg"
      },
      { 
        year: "2009", 
        title: "International Debut", 
        desc: "Made our first appearance at Heimtextil Frankfurt & Canton Fair, initiating direct dialogue with European buyers.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387985/Market_Entry_Compliance_2_o3fs3b.jpg"
      },
      { 
        year: "2012", 
        title: "EU Market Breakthrough", 
        desc: "Successfully passed Oeko-Tex Standard 100 certification, removing technical trade barriers.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772388016/Market_Entry_Compliance_3_wnyl9g.png"
      }
    ]
  },
  {
    phase: "Phase 3: Accreditation & Rapid Growth",
    period: "2014–2018",
    subtitle: "Gaining trust through elite standards and scaling up.",
    events: [
      { 
        year: "2014", 
        month: "Nov", 
        title: "US Market Access", 
        desc: "Achieved GREENGUARD Certification, verifying our products meet rigorous chemical emissions standards.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387623/Accreditation_Rapid_Growth_1_ensl64.jpg"
      },
      { 
        year: "2016", 
        title: "Supply Chain Integration", 
        desc: "Recognized as a \"Top 10 Competitive Enterprise in China’s Cloth Art,\" entering Fortune 500 vendor lists.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387627/Accreditation_Rapid_Growth_2_hx4tie.jpg"
      },
      { 
        year: "2018", 
        title: "Milestone Achievement", 
        desc: "Annual foreign trade order volume surpassed $50 million USD, marking transition to strategic partner.",
        image: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772387625/Accreditation_Rapid_Growth_3_e41wfm.jpg"
      }
    ]
  },
  {
    phase: "Phase 4: Innovation & Sustainable Leadership",
    period: "2019–Present",
    subtitle: "Solidifying leadership through IP and continuous growth.",
    events: [
      { 
        year: "2019-2023", 
        title: "Omnichannel Expansion", 
        desc: "Launched independent station (DTC) operations and localized overseas service teams.",
        image: "https://lh3.googleusercontent.com/d/1Ll2zrCtvNPz1lj9Z-Y5BSwGtsZYrwmEB"
      },
      { 
        year: "2000-2026", 
        title: "IP Leadership", 
        desc: "Built a patent moat with 50+ cumulative patents, including \"Transparent Blackout Non-Dyeing Fabric\".",
        image: "https://images.unsplash.com/photo-1759866042499-d0b3e9d87ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
      },
      { 
        year: "2026", 
        title: "Future Outlook", 
        desc: "Continuing to lead with sustainable, eco-friendly textile solutions and emerging market expansion.",
        image: "https://images.unsplash.com/photo-1596456692790-2da19d2e6159?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
      }
    ]
  }
];

const TimelineCard = ({ event }: { event: any }) => {
  return (
    <div className="h-full w-full">
      <CardContainer className="inter-var py-0 w-full h-full">
        <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl border border-slate-200 border-t-4 border-t-[#cd7f32] shadow-sm hover:shadow-xl transition-shadow flex flex-col p-4">
          
          {/* Image Section */}
          <CardItem translateZ="50" className="w-full">
            <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-inner bg-slate-100">
              <img
                src={event.image}
                className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                alt={event.title}
                referrerPolicy="no-referrer"
              />
            </div>
          </CardItem>

          {/* Date Badge */}
          <CardItem translateZ="40" className="mt-4 w-full">
            <div className="inline-flex items-center bg-[#003366] text-white rounded-md px-3 py-1.5 text-sm shadow-sm">
              <span className="font-bold">{event.year}</span>
              {event.month && (
                <>
                  <span className="mx-2 w-px h-3 bg-white/30"></span>
                  <span className="text-[#cd7f32] font-semibold">{event.month}</span>
                </>
              )}
            </div>
          </CardItem>
          
          {/* Title */}
          <CardItem translateZ="60" className="text-xl font-bold text-[#003366] mt-4 leading-tight">
            {event.title}
          </CardItem>
          
          {/* Description */}
          <CardItem as="p" translateZ="40" className="text-slate-600 mt-3 text-sm leading-relaxed flex-grow">
            {event.desc}
          </CardItem>
          
        </CardBody>
      </CardContainer>
    </div>
  );
};

const PhaseHeader = ({ phase, subtitle, period }: { phase: string; subtitle: string; period: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center mb-12 relative z-10"
  >
    <div className="inline-block px-4 py-1 bg-[#e0f2fe] text-[#003366] text-xs font-bold uppercase tracking-widest rounded-full mb-3 border border-[#003366]/10">
      {period}
    </div>
    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#003366] mb-2">{phase.split(':')[1]}</h3>
    <p className="text-slate-500 italic max-w-xl">{subtitle}</p>
  </motion.div>
);

export const Corporate = () => {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <div className="bg-[#003366] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Corporate DNA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            From a manual workshop to a global leader in textile engineering. 
            Our journey is defined by precision, partnership, and persistence.
          </motion.p>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          
          {timelineData.map((phaseData, phaseIndex) => (
            <div key={phaseIndex} className="mb-24 relative">
              
              <PhaseHeader 
                phase={phaseData.phase} 
                subtitle={phaseData.subtitle}
                period={phaseData.period}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {phaseData.events.map((event, index) => (
                  <TimelineCard key={index} event={event} />
                ))}
              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* Dow Partnership */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#DA291C]/5 skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <span className="text-[#DA291C] font-bold tracking-widest uppercase mb-2 block">Strategic Alliance</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-6">Huachen x Dow Chemical</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our joint R&D laboratory combines Huachen's textile expertise with Dow's world-class polymer science. 
                Together, we engineer coatings that are not only durable but chemically superior.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-[#DA291C]" />
                  <span className="font-medium text-slate-700">Advanced Polymer Bonding</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#DA291C]" />
                  <span className="font-medium text-slate-700">Enhanced UV Resistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-[#DA291C]" />
                  <span className="font-medium text-slate-700">Formaldehyde-Free Formulations</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <CometCard className="w-full">
                  <div className="absolute -inset-4 bg-[#DA291C]/10 rounded-lg transform rotate-3" />
                  <img 
                    src={dowSigningImg} 
                    alt="Huachen x Dow Signing Ceremony" 
                    className="rounded-lg shadow-xl relative z-10 w-full"
                  />
                </CometCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Scale */}
      <section className="py-20 bg-[#003366] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-16">The Scale of Precision</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-[#cd7f32] mb-2">40k</div>
              <div className="text-sm uppercase tracking-wider text-slate-300">Sqm Facility</div>
            </div>
            <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-[#cd7f32] mb-2">6</div>
              <div className="text-sm uppercase tracking-wider text-slate-300">Automated Lines</div>
            </div>
            <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-[#cd7f32] mb-2">11.4M</div>
              <div className="text-sm uppercase tracking-wider text-slate-300">Meters / Year</div>
            </div>
             <div className="p-6 border border-white/10 rounded-sm hover:bg-white/5 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-[#cd7f32] mb-2">40+</div>
              <div className="text-sm uppercase tracking-wider text-slate-300">Export Countries</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#003366]">Green from the Source</h2>
            <p className="text-slate-600 mt-4">Commited to low-carbon manufacturing and safe chemistry.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
              >
                <Droplet className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Water-Based Coatings</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Eliminating volatile organic compounds (VOCs) for safer indoor air quality.</p>
             </motion.div>
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
              >
                <Leaf className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Low-Carbon Process</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Our automated lines reduce energy consumption by 25% compared to traditional methods.</p>
             </motion.div>
             <motion.div 
               whileHover={{ y: -5 }}
               className="bg-white p-8 rounded-lg shadow-sm border border-slate-100"
              >
                <ShieldCheck className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Certified Safe</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Compliant with Oeko-Tex Standard 100 and Greenguard Gold requirements.</p>
             </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
};