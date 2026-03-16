import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Eye, Maximize2 } from 'lucide-react';
import { products } from '../data/products';

const categories = ["All", "Sunshade", "Roman Blinds", "Roller Blinds", "Blackout Lining", "Acoustic"];
const applications = ["All", "Hospitality", "Office", "Residential"];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedApp, setSelectedApp] = useState("All");

  const filteredProducts = products.filter(p => {
    const catMatch = selectedCategory === "All" || p.category === selectedCategory;
    const appMatch = selectedApp === "All" || p.application === selectedApp;
    return catMatch && appMatch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold mb-4">Product Solutions</h1>
          <p className="text-slate-300 max-w-2xl">
            Engineered for performance, designed for elegance. Explore our range of high-performance technical textiles.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center justify-between mb-12">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Filter className="w-5 h-5" /> Filters:
          </div>
          
          <div className="flex gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cd7f32]"
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>

            <select 
              value={selectedApp} 
              onChange={(e) => setSelectedApp(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cd7f32]"
            >
              {applications.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow group"
              >
                {/* Image Area with Tactile Zoom Effect */}
                <div className="relative h-64 overflow-hidden bg-gray-100 cursor-crosshair">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 absolute inset-0 z-10" 
                  />
                  {/* Texture reveal on hover */}
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center scale-150"
                    style={{ backgroundImage: `url(${product.textureImage})` }}
                  />
                  
                  <div className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4 text-[#003366]" />
                  </div>
                  
                  <div className="absolute bottom-4 left-4 z-20">
                     <span className="bg-[#003366] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                       {product.category}
                     </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                    <span className="text-xs text-slate-500 uppercase border border-slate-200 px-2 py-1 rounded">
                      {product.application}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((f, i) => (
                      <span key={i} className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-sm">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                    <Link to={`/products/${product.slug}`} className="text-[#cd7f32] font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      View Details <Eye className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
            <div className="text-center py-20 text-slate-400">
                No products found matching these filters.
            </div>
        )}
      </div>
    </div>
  );
};