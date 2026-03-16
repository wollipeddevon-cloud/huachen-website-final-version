import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Microscope, Layers, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColourfulText from '../components/ui/colourful-text';
import { newsItems } from '../data/news';

const susieSunImg = "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const Hero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-slate-900">
      <motion.div 
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0.4 }}
        className="absolute inset-0 z-0"
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1763773203934-7c071b99fcc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGJsdWUlMjBtYXRlcmlhbCUyMHNjaWVuY2UlMjB0ZXh0dXJlfGVufDF8fHx8MTc3MjM2MjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          <source src="https://res.cloudinary.com/dyf7vdifi/video/upload/v1772363205/landing_page_background_video_v6h5e4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-[#003366]/60 to-transparent mix-blend-multiply" />
      </motion.div>

            <div className="relative z-10 text-center w-full max-w-[90rem] px-6">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight relative min-h-[3.5em] flex items-center justify-center"
        >
          {[
            "The Science of Masterful Engineering",
            "The Defense of Thermal Safety",
            "The Barrier of Absolute Dryness",
            "The Physics of Perfect Shading"
          ].map((text, i) => {
             // Split text into "The X of" and "Y"
             const parts = text.split(" of ");
             const firstPart = parts[0] + " of";
             const secondPart = parts[1];
             
             // Define animation timing (Total cycle: 32s, 8s per item)
             // Each item visible for 7s, 1s crossfade
             
             let animateOpacity, animateTimes;
             if (i === 0) {
                // Item 1: Visible 0-7s, Fade out 7-8s, Fade in 31-32s
                animateOpacity = [1, 1, 0, 0, 0, 1];
                animateTimes = [0, 0.21875, 0.25, 0.96875, 0.96875, 1]; 
             } else if (i === 1) {
                // Item 2: Fade in 7-8s, Visible 8-15s, Fade out 15-16s
                animateOpacity = [0, 0, 1, 1, 0, 0];
                animateTimes = [0, 0.21875, 0.25, 0.46875, 0.5, 1];
             } else if (i === 2) {
                // Item 3: Fade in 15-16s, Visible 16-23s, Fade out 23-24s
                animateOpacity = [0, 0, 1, 1, 0, 0];
                animateTimes = [0, 0.46875, 0.5, 0.71875, 0.75, 1];
             } else {
                // Item 4: Fade in 23-24s, Visible 24-31s, Fade out 31-32s
                animateOpacity = [0, 0, 1, 1, 0];
                animateTimes = [0, 0.71875, 0.75, 0.96875, 1];
             }

             return (
               <motion.span
                 key={i}
                 className="absolute inset-x-0 top-0 text-center w-full"
                 animate={{ opacity: animateOpacity }}
                 transition={{ duration: 32, repeat: Infinity, times: animateTimes, ease: "linear" }}
               >
                 <span className="whitespace-nowrap inline-block">{firstPart}</span> <br/>
                 <span className="italic whitespace-nowrap inline-block"><ColourfulText text={secondPart} /></span>
               </motion.span>
             );
          })}
        </motion.h1>
        
        <div className="relative w-full max-w-6xl mx-auto min-h-[12rem] mb-10">
          {[
            "Built upon a foundation of industrial expertise and robotic precision. Our manufacturing process transforms advanced raw materials into architectural solutions through rigorous quality control and technical mastery.",
            "Engineered for extreme heat resistance and flame retardancy, exceeding global safety certifications. Our textiles combine molecular-level protection with high-performance durability to ensure safety without compromise.",
            "Designed with advanced hydrostatic pressure resistance to create an impenetrable seal. Our high-performance fabrics ensure water beads and sheds instantly, maintaining a dry and protected environment even in extreme weather.",
            "Engineered with high-density opaque fibers to achieve zero-light transmission. Our advanced blackout technology provides complete privacy and superior thermal insulation, creating a serene, light-controlled sanctuary regardless of external solar intensity."
          ].map((text, i) => {
             let animateOpacity, animateTimes;
             if (i === 0) {
                animateOpacity = [1, 1, 0, 0, 0, 1];
                animateTimes = [0, 0.21875, 0.25, 0.96875, 0.96875, 1]; 
             } else if (i === 1) {
                animateOpacity = [0, 0, 1, 1, 0, 0];
                animateTimes = [0, 0.21875, 0.25, 0.46875, 0.5, 1];
             } else if (i === 2) {
                animateOpacity = [0, 0, 1, 1, 0, 0];
                animateTimes = [0, 0.46875, 0.5, 0.71875, 0.75, 1];
             } else {
                animateOpacity = [0, 0, 1, 1, 0];
                animateTimes = [0, 0.71875, 0.75, 0.96875, 1];
             }

             return (
               <motion.p
                 key={i}
                 className="absolute inset-0 flex items-center justify-center text-center font-[Alexandria] md:text-3xl font-light tracking-wider leading-relaxed drop-shadow-lg text-slate-100 text-[24px] px-4"
                 animate={{ opacity: animateOpacity }}
                 transition={{ duration: 32, repeat: Infinity, times: animateTimes, ease: "linear" }}
               >
                 {text}
               </motion.p>
             );
          })}
        </div>
        
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/technology" className="px-8 py-4 bg-[#cd7f32] text-white font-medium hover:bg-[#b06a2e] transition-all flex items-center gap-2 group">
            Discover Our Tech
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/products" className="px-8 py-4 border border-white text-white font-medium hover:bg-white hover:text-[#003366] transition-all">
            View Solutions
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

const TrustBar = () => {
  return (
    <div className="bg-white border-b border-slate-100 py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-6">Trusted By Global Standards</p>
        <div className="w-full overflow-hidden">
          <motion.div 
            className="flex w-max items-center gap-12 md:gap-24"
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 pr-12 md:pr-24">
                 <div className="flex items-center gap-2 font-bold text-xl text-slate-700"><ShieldCheck className="w-8 h-8"/> ISO 9001</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-[#DA291C]">DOW</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-green-600">OEKO-TEX</div>
                 <div className="flex items-center gap-2 font-bold text-xl text-green-700">GREENGUARD</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const CorePillars = () => {
  const pillars = [
    {
      icon: <Layers className="w-8 h-8 text-[#cd7f32]" />,
      title: "31-Year Heritage",
      desc: "From manual craftsmanship to automated precision since 1994.",
      link: "/corporate",
      img: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386287/why_we_lead_1_ydxqbe.jpg"
    },
    {
      icon: <Microscope className="w-8 h-8 text-[#cd7f32]" />,
      title: "The Dow Partnership",
      desc: "Joint R&D lab developing polymer science for coating durability.",
      link: "/corporate",
      img: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386287/why_we_lead_2_wjfk1h.jpg"
    },
    {
      icon: <Factory className="w-8 h-8 text-[#cd7f32]" />,
      title: "Production Power",
      desc: "40,000 sqm base with 11.4 million meter annual capacity.",
      link: "/technology",
      img: "https://res.cloudinary.com/dyf7vdifi/image/upload/v1772386285/why_we_lead_3_wr1njh.jpg"
    }
  ];

  return (
    <>
    <div id="news" className="relative w-full bg-slate-100 font-sans py-24 border-y border-slate-200 overflow-hidden">
      {/* Decorative Background Pattern - Enhanced Visibility */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#003366 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Decorative gradient blobs - Much stronger visibility */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#cd7f32]/20 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-[#003366]/15 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
      {/* Giant Watermark Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="text-[200px] font-black uppercase text-slate-900 leading-none whitespace-nowrap tracking-widest pl-10 select-none">
          HUACHEN
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div className="max-w-2xl relative pl-0 md:pl-8">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-2 bottom-2 w-1.5 bg-[#cd7f32] hidden md:block shadow-sm" />
              
              <span className="text-[#cd7f32] font-bold tracking-widest uppercase text-xs mb-3 block">Corporate Updates</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#003366] mb-6 drop-shadow-sm">Latest from Huachen</h2>
              <p className="text-slate-600 text-lg">Staying ahead of the curve with continuous innovation, strategic partnerships, and global expansion.</p>
           </div>
           <Link to="/news" className="hidden md:flex items-center gap-2 text-[#003366] font-medium hover:text-[#cd7f32] transition-colors pb-2 border-b-2 border-transparent hover:border-[#cd7f32]">
             View All News <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {newsItems.slice(0, 3).map((news, idx) => (
            <Link to={`/news/${news.slug}`} key={idx} className="group block h-full">
              <div className="bg-white h-full shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-200 flex flex-col relative overflow-hidden rounded-sm group-hover:border-[#cd7f32]/30">
                {/* Top accent line that appears on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#cd7f32] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
                
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#003366] text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm z-10 group-hover:bg-[#cd7f32] group-hover:text-white transition-colors duration-300">
                    {news.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow relative">
                  <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-medium uppercase tracking-wide">
                    <span>{news.date}</span>
                    <span className="w-1 h-1 bg-[#cd7f32] rounded-full"></span>
                    <span>Press Release</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#003366] mb-4 group-hover:text-[#cd7f32] transition-colors leading-tight">
                    {news.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 group-hover:text-slate-700 transition-colors">
                    {news.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center text-[#cd7f32] font-bold text-sm uppercase tracking-wider mt-auto group-hover:gap-3 transition-all">
                    Read Story <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
           <Link to="/news" className="inline-block bg-white border border-slate-200 px-6 py-3 text-[#003366] font-medium hover:bg-slate-50 transition-colors">
             View All News
           </Link>
        </div>
      </div>
    </div>
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#003366] mb-4">Why We Lead</h2>
          <div className="w-20 h-1 bg-[#cd7f32] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Link to={pillar.link} key={index} className="group relative overflow-hidden bg-white shadow-lg rounded-sm hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img src={pillar.img} alt={pillar.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-2">{pillar.title}</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">{pillar.desc}</p>
                <span className="text-[#cd7f32] font-medium text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

const CTA = () => (
  <section className="py-20 bg-[#003366] text-white">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
      <div className="mb-8 md:mb-0 md:max-w-xl">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to elevate your project?</h2>
        <p className="text-slate-300">Get access to our full catalog, technical specifications, and bulk pricing.</p>
      </div>
      <div className="flex gap-4">
        <Link to="/contact" className="bg-[#cd7f32] hover:bg-[#b06a2e] text-white px-8 py-3 font-medium transition-colors">
          Contact Sales
        </Link>
        <Link to="/portal" className="border border-white hover:bg-white hover:text-[#003366] px-8 py-3 font-medium transition-colors">
          Distributor Login
        </Link>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <TrustBar />
      <CorePillars />
      <CTA />
    </div>
  );
};