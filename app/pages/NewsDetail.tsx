import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import { newsItems, ContentBlock } from '../data/news';

/* ── Lightbox ─────────────────────────────────────────────── */
const Lightbox = ({
  images,
  startIndex,
  onClose,
}: {
  images: { src: string; caption?: string }[];
  startIndex: number;
  onClose: () => void;
}) => {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length);
      if (e.key === 'ArrowLeft') setIdx(i => (i - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
        style={{ fontSize: '28px' }}
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length); }}
            className="absolute left-4 md:left-8 text-white/60 hover:text-white z-50"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length); }}
            className="absolute right-4 md:right-8 text-white/60 hover:text-white z-50"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </>
      )}

      <div className="max-w-5xl w-full" onClick={e => e.stopPropagation()}>
        <img
          src={images[idx].src}
          alt={images[idx].caption || ''}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        {images[idx].caption && (
          <p className="text-white/70 text-center mt-4" style={{ fontSize: '14px', lineHeight: 1.6 }}>{images[idx].caption}</p>
        )}
      </div>
    </motion.div>
  );
};

/* ── Block Renderer ───────────────────────────────────────── */
const BlockRenderer = ({
  block,
  index,
  onImageClick,
}: {
  block: ContentBlock;
  index: number;
  onImageClick: (src: string, caption?: string) => void;
}) => {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.5, delay: 0.04 * (index % 4) },
  };

  switch (block.type) {
    case 'text':
      return (
        <motion.div
          {...fadeUp}
          className="prose prose-slate max-w-none
            prose-p:text-slate-600 prose-p:my-4
            prose-h3:text-[#003366] prose-h3:mt-10 prose-h3:mb-4
            prose-h4:text-[#003366] prose-h4:mt-8 prose-h4:mb-3
            prose-li:text-slate-600 prose-li:my-1
            prose-ul:my-3 prose-ul:pl-5
            prose-a:text-[#cd7f32] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-slate-700"
          style={{
            fontFamily: "'Inter', sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case 'image':
      return (
        <motion.figure {...fadeUp} className="my-10">
          <div
            className="overflow-hidden rounded-lg cursor-zoom-in group"
            onClick={() => onImageClick(block.src, block.caption)}
          >
            <img
              src={block.src}
              alt={block.caption || ''}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-slate-400 text-center" style={{ fontSize: '13px', lineHeight: 1.6, fontStyle: 'italic' }}>
              {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );

    case 'imagePair':
      return (
        <motion.div {...fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {block.images.map((img, i) => (
            <figure key={i}>
              <div
                className="overflow-hidden rounded-lg cursor-zoom-in group"
                onClick={() => onImageClick(img.src, img.caption)}
              >
                <img
                  src={img.src}
                  alt={img.caption || ''}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-3 text-slate-400 text-center" style={{ fontSize: '13px', lineHeight: 1.6, fontStyle: 'italic' }}>
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </motion.div>
      );

    case 'video':
      return (
        <motion.figure {...fadeUp} className="my-10">
          <div className="relative rounded-lg overflow-hidden bg-slate-900 aspect-video shadow-lg">
            <iframe
              src={block.src}
              title={block.caption || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-slate-400 text-center flex items-center justify-center gap-2" style={{ fontSize: '13px', lineHeight: 1.6, fontStyle: 'italic' }}>
              <Play className="w-3 h-3 flex-shrink-0" /> {block.caption}
            </figcaption>
          )}
        </motion.figure>
      );

    case 'quote':
      return (
        <motion.blockquote
          {...fadeUp}
          className="relative my-10 border-l-4 border-[#cd7f32] bg-[#faf7f2] px-8 py-7 rounded-r-lg"
        >
          <Quote className="w-7 h-7 text-[#cd7f32]/20 absolute top-5 right-6" />
          <p className="text-slate-600 mb-4" style={{ fontSize: '17px', lineHeight: 1.75, fontStyle: 'italic' }}>
            "{block.text}"
          </p>
          {block.author && (
            <footer className="text-slate-500" style={{ fontSize: '14px', lineHeight: 1.5 }}>
              — <span className="text-[#003366]" style={{ fontWeight: 600 }}>{block.author}</span>
              {block.role && <span className="text-slate-400">, {block.role}</span>}
            </footer>
          )}
        </motion.blockquote>
      );

    default:
      return null;
  }
};

/* ── Collect all images for lightbox ──────────────────────── */
const collectImages = (blocks: ContentBlock[]) => {
  const imgs: { src: string; caption?: string }[] = [];
  blocks.forEach(b => {
    if (b.type === 'image') imgs.push({ src: b.src, caption: b.caption });
    if (b.type === 'imagePair') b.images.forEach(img => imgs.push(img));
  });
  return imgs;
};

/* ── Page ─────────────────────────────────────────────────── */
export const NewsDetail = () => {
  const { slug } = useParams();
  const news = newsItems.find(item => item.slug === slug);

  const [lightbox, setLightbox] = useState<{ images: { src: string; caption?: string }[]; startIndex: number } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        <h1 className="text-slate-800 mb-4" style={{ fontSize: '28px', fontWeight: 600 }}>Article Not Found</h1>
        <Link to="/news" className="text-[#cd7f32] hover:underline flex items-center gap-2" style={{ fontSize: '15px' }}>
          <ArrowLeft className="w-4 h-4" /> Back to News
        </Link>
      </div>
    );
  }

  const allImages = collectImages(news.contentBlocks);

  const handleImageClick = (src: string, caption?: string) => {
    const idx = allImages.findIndex(img => img.src === src);
    setLightbox({ images: allImages, startIndex: idx >= 0 ? idx : 0 });
  };

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.startIndex}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden" style={{ height: '520px' }}>
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full px-6 pb-12 md:pb-14 text-white">
          <div className="mx-auto" style={{ maxWidth: '720px' }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-3 mb-5"
            >
              <span
                className="bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-[#cd7f32] flex items-center gap-1.5"
                style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}
              >
                <Tag className="w-3 h-3" /> {news.category}
              </span>
              <span className="text-white/70 flex items-center gap-1.5" style={{ fontSize: '13px' }}>
                <Calendar className="w-3 h-3" /> {news.date}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(28px, 5vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {news.title}
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 py-12 md:py-16" style={{ maxWidth: '960px' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#cd7f32] transition-colors mb-12"
            style={{ fontSize: '14px', fontWeight: 500 }}
          >
            <ArrowLeft className="w-4 h-4" /> Back to All News
          </Link>

          {/* Article Body */}
          <article>
            {news.contentBlocks.map((block, i) => (
              <BlockRenderer
                key={i}
                block={block}
                index={i}
                onImageClick={handleImageClick}
              />
            ))}
          </article>

          {/* Bottom Navigation */}
          <div className="mt-20 pt-8 border-t border-slate-100 flex justify-center">
            <Link
              to="/news"
              className="text-[#003366] hover:text-[#cd7f32] transition-colors flex items-center gap-2"
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              <ArrowLeft className="w-4 h-4" /> View All News
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};