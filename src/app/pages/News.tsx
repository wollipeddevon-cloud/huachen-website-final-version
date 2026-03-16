import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import { newsItems } from '../data/news';

export const News = () => {

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#003366] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            News & Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Latest updates on our innovations, partnerships, and corporate milestones.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        
        {/* Search & Filter (Visual only for now) */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {['All', 'Partnership', 'Product Launch', 'Community'].map((filter, idx) => (
              <button 
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${idx === 0 ? 'bg-[#cd7f32] text-white' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:border-[#cd7f32] focus:ring-1 focus:ring-[#cd7f32]"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <CardContainer key={idx} className="inter-var w-full h-full" containerClassName="py-0 w-full h-full">
              <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-slate-200 w-full h-full rounded-xl border p-0 flex flex-col overflow-hidden">
                <CardItem
                  translateZ="50"
                  className="w-full h-56"
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={news.image}
                      className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                      alt={news.title}
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#003366] text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm flex items-center gap-2">
                      <Tag className="w-3 h-3 text-[#cd7f32]" />
                      {news.category}
                    </div>
                  </div>
                </CardItem>
                
                <div className="p-8 flex flex-col flex-grow">
                  <CardItem
                    as="div"
                    translateZ="40"
                    className="flex items-center gap-2 text-slate-400 text-xs mb-4 font-medium uppercase tracking-wide w-full"
                  >
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </CardItem>
                  
                  <CardItem
                    translateZ="60"
                    className="text-xl font-bold text-[#003366] mb-4 group-hover/card:text-[#cd7f32] transition-colors leading-tight w-full"
                  >
                    {news.title}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="50"
                    className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 w-full"
                  >
                    {news.excerpt}
                  </CardItem>
                  
                  <div className="mt-auto pt-4">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to={`/news/${news.slug}`}
                      className="inline-flex items-center text-[#cd7f32] font-bold text-sm uppercase tracking-wider group-hover/card:gap-2 transition-all"
                    >
                      Read Full Story <ArrowRight className="w-3 h-3 ml-2" />
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Pagination (Visual) */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold">1</button>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center font-bold transition-colors">2</button>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center font-bold transition-colors">3</button>
          <button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center font-bold transition-colors"><ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
};