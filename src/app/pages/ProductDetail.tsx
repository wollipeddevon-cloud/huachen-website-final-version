import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Shield, Ruler, Weight, Sun, Flame } from 'lucide-react';
import { products } from '../data/products';

export const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Product Not Found</h1>
          <p className="text-slate-500 mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products" className="text-[#cd7f32] font-medium hover:underline">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const specItems = [
    { icon: Shield, label: 'Composition', value: product.specifications.composition },
    { icon: Ruler, label: 'Width', value: product.specifications.width },
    { icon: Weight, label: 'Weight', value: product.specifications.weight },
    { icon: Sun, label: 'Opacity', value: product.specifications.opacity },
    { icon: Flame, label: 'Flame Retardancy', value: product.specifications.flameRetardancy },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#003366] text-white py-16">
        <div className="container mx-auto px-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#cd7f32] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </span>
              <span className="border border-slate-400 text-slate-300 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {product.application}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">{product.name}</h1>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 group cursor-crosshair relative h-[400px] md:h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 absolute inset-0 z-10"
              />
              <div
                className="absolute inset-0 z-0 bg-cover bg-center scale-150"
                style={{ backgroundImage: `url(${product.textureImage})` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-3 text-center italic">
              Hover over the image to reveal fabric texture detail
            </p>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((f, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-sm text-[#003366] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#cd7f32]" />
                  {f}
                </span>
              ))}
            </div>

            {/* Description */}
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              {product.description}
            </p>

            {/* Specifications */}
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Technical Specifications</h2>
            <div className="space-y-4">
              {specItems.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg border border-slate-100"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
                    <spec.icon className="w-5 h-5 text-[#cd7f32]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider">{spec.label}</p>
                    <p className="text-slate-800 font-medium">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex gap-4">
              <Link
                to="/contact"
                className="bg-[#cd7f32] text-white px-8 py-3 rounded-md hover:bg-[#b8722d] transition-colors font-medium"
              >
                Request a Sample
              </Link>
              <Link
                to="/contact"
                className="border border-[#003366] text-[#003366] px-8 py-3 rounded-md hover:bg-[#003366] hover:text-white transition-colors font-medium"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
