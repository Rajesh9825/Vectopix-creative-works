import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Play, Monitor, Plus, X, ChevronDown } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import React, { forwardRef } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const mainCategories = [
  { name: "Design & Print", icon: FileText, color: "bg-brand-yellow", hoverColor: "group-hover:bg-brand-yellow/20", textColor: "text-brand-dark" },
  { name: "Motion & Ads", icon: Play, color: "bg-brand-dark", hoverColor: "group-hover:bg-brand-dark/20", textColor: "text-white" },
  { name: "Video Production", icon: Monitor, color: "bg-brand-blue", hoverColor: "group-hover:bg-brand-blue/20", textColor: "text-white" }
];

const subCategories: Record<string, string[]> = {
  "Design & Print": ["Logo Design", "Visiting Cards", "Flyers", "Brochures", "Branding", "Social Media","Packaging","Posters","ID Cards","Invitation Cards", "Merchandise"],
  "Motion & Ads": ["Logo Animation",  "Social Media & Ads", "Invitations"],
    // "Motion & Ads": ["Logo Animation",  "Social Media & Ads", "Invitations", "Explainer Videos", "2D Animation", "3D Animation"],
  "Video Production": ["Film Promotions", "Brand Promotions", "Promotional Videos"]
  // "Video Production": ["Film Promotions", "Brand Promotions", "Promotional Videos". Corporate Films", "Social Media Campaigns", "Product Videos"]
};

const getYoutubeId = (url: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const PortfolioSection = () => {
  const [mainTab, setMainTab] = useState("Design & Print");
  const [subTab, setSubTab] = useState(subCategories["Design & Print"][0]);
  const [index, setIndex] = useState(-1);
  const [activeVideo, setActiveVideo] = useState<{url: string, isVertical: boolean} | null>(null);
  
  const [visibleCount, setVisibleCount] = useState(6);

  const currentCat = mainCategories.find(c => c.name === mainTab) || mainCategories[0];
  const allItems = portfolioData?.[mainTab]?.[subTab] || [];
  
  const visibleItems = allItems.slice(0, visibleCount);

  const handleMainTabChange = (tab: string) => {
    setMainTab(tab);
    setSubTab(subCategories[tab][0]);
    setVisibleCount(6);
  };

  const handleSubTabChange = (sub: string) => {
    setSubTab(sub);
    setVisibleCount(6);
  };

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Archive</span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter leading-none">
            Our <span className="text-brand-yellow">Portfolio.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center p-2 bg-brand-dark/5 rounded-[2.5rem] w-fit mx-auto mb-12 relative">
          {mainCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => handleMainTabChange(cat.name)}
              className={`relative px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-colors duration-300 z-10 flex items-center gap-3 ${
                mainTab === cat.name ? cat.textColor : "text-brand-dark/40 hover:text-brand-dark"
              }`}
            >
              <cat.icon size={18} />
              {cat.name}
              {mainTab === cat.name && (
                <motion.div layoutId="activeMainTab" className={`absolute inset-0 ${cat.color} rounded-full -z-10 shadow-lg`} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {subCategories[mainTab].map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubTabChange(sub)}
                className={`relative px-6 py-4 rounded-2xl border transition-all duration-300 ${
                  subTab === sub ? "border-transparent " + currentCat.textColor : "border-brand-dark/5 bg-gray-50 text-brand-dark/60 hover:bg-gray-100"
                }`}
              >
                <span className="text-[11px] font-black uppercase tracking-wider z-10 relative">{sub}</span>
                {subTab === sub && (
                  <motion.div layoutId="activeSubTab" className={`absolute inset-0 ${currentCat.color} rounded-2xl -z-0 shadow-md`} transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item: any, idx: number) => {
               const isVertical = item.id.toLowerCase().includes('reel') || 
                                  item.id.toLowerCase().includes('inv') || 
                                  item.url?.includes('shorts');
               return (
                <PortfolioItem 
                  key={item.id} 
                  item={item} 
                  isVertical={isVertical}
                  currentCat={currentCat} 
                  onImageClick={() => setIndex(idx)}
                  onVideoClick={() => setActiveVideo({url: item.url, isVertical})}
                />
              )
            })}
          </AnimatePresence>
        </div>

        {allItems.length > visibleCount && (
          <div className="mt-16 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="group flex items-center gap-3 bg-brand-dark text-white px-10 py-5 rounded-full font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl hover:bg-brand-yellow hover:text-brand-dark transition-all"
            >
              Explore More Works
              <ChevronDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>
        )}

        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={visibleItems.filter((i:any) => i.type === 'image').map((i:any) => ({ src: i.src }))} />
        
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-brand-dark/98 flex items-center justify-center p-4 backdrop-blur-md"
            >
              <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors z-[220] bg-white/10 p-2 rounded-full">
                <X size={32} />
              </button>
              
              <div className={`w-full shadow-2xl border border-white/10 bg-black overflow-hidden rounded-3xl ${
                activeVideo.isVertical ? 'max-w-[380px] aspect-[9/16]' : 'max-w-5xl aspect-video'
              }`}>
                <iframe 
                  src={activeVideo.url.includes('cloudinary') 
                    ? activeVideo.url 
                    : `https://www.youtube.com/embed/${getYoutubeId(activeVideo.url)}?autoplay=1&rel=0`} 
                  className="w-full h-full border-0" 
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* --- SUB COMPONENT: PortfolioItem --- */

const PortfolioItem = forwardRef(({ item, isVertical, currentCat, onImageClick, onVideoClick }: any, ref: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const ytId = item.type === 'video' ? getYoutubeId(item.url) : null;
  const isCloudinary = item.url?.includes('cloudinary');

  const getThumbnail = () => {
    if (item.thumbnail) return item.thumbnail;
    if (item.type === 'image') return item.src;
    if (ytId) return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
    return "https://images.unsplash.com/photo-1626544823105-df950291f1cd?q=80&w=800&auto=format";
  };

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={item.type === 'image' ? onImageClick : onVideoClick}
      // Added transition for border-radius: Starts sharp (rounded-none), ends curved (rounded-[2rem])
      className={`group relative bg-brand-dark overflow-hidden shadow-sm cursor-pointer w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] transition-all duration-500 ease-in-out ${
        isHovered ? "rounded-[2.5rem]" : "rounded-none"
      } ${
        item.type === 'image' ? 'aspect-square' : isVertical ? 'aspect-[9/16]' : 'aspect-video'
      }`}
    >
      <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
        <img 
            src={getThumbnail()} 
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${isHovered && item.type === 'video' ? 'opacity-20 scale-110' : 'opacity-100'}`} 
            alt="VectoPix Work"
        />

        {item.type === 'video' && (
          <>
            {isHovered ? (
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <iframe 
                  src={isCloudinary 
                    ? `${item.url}&autoplay=true&muted=true` 
                    : `https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${ytId}&modestbranding=1`} 
                  className="w-full h-full border-0 scale-[1.05]" 
                />
              </div>
            ) : (
              <div className="z-10 bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20 group-hover:scale-110 transition-transform">
                 <Play className="text-white fill-white" size={24} />
              </div>
            )}
          </>
        )}
        {/* Border overlay now also follows the curvature logic */}
        <div className={`absolute inset-0 border-[0px] group-hover:border-[10px] border-white/5 transition-all duration-500 z-20 pointer-events-none ${isHovered ? "rounded-[2.5rem]" : "rounded-none"}`} />
      </div>
    </motion.div>
  );
});

PortfolioItem.displayName = "PortfolioItem";

export default PortfolioSection;