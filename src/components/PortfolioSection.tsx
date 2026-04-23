import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Play, Monitor, Plus, X } from "lucide-react";
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
  "Design & Print": ["Logo Design", "Visiting Cards", "Flyers", "Brochures", "Social Media", "Packaging", "Merchandise"],
  "Motion & Ads": ["Logo Animation", "Animation Ads", "Motion Posts", "Explainer Videos", "2D Animation", "3D Animation"],
  "Video Production": ["Promotional Videos", "Corporate Videos", "Content Editing", "Instagram Reels"]
};

const PortfolioSection = () => {
  const [mainTab, setMainTab] = useState("Design & Print");
  const [subTab, setSubTab] = useState(subCategories["Design & Print"][0]);
  const [index, setIndex] = useState(-1);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const currentCat = mainCategories.find(c => c.name === mainTab) || mainCategories[0];
  const currentItems = portfolioData?.[mainTab]?.[subTab] || [];

  const handleMainTabChange = (tab: string) => {
    setMainTab(tab);
    setSubTab(subCategories[tab][0]);
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

        {/* FILTERS */}
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

        <div className="flex justify-center mb-16 overflow-visible">
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {subCategories[mainTab].map((sub) => (
              <button
                key={sub}
                onClick={() => setSubTab(sub)}
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

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {currentItems.length > 0 ? (
              currentItems.map((item: any, idx: number) => (
                <PortfolioItem 
                  key={item.id} 
                  item={item} 
                  currentCat={currentCat} 
                  onImageClick={() => setIndex(idx)}
                  onVideoClick={() => setActiveVideo(item.url)}
                />
              ))
            ) : (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="col-span-full py-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-[3rem]">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300"><Plus size={24} /></div>
                <h4 className="text-brand-dark font-black uppercase tracking-widest text-sm mb-2">New Projects Arriving</h4>
                <p className="text-muted-foreground text-xs italic text-center">Our latest {subTab} works are currently in post-production.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={currentItems.filter((i:any) => i.type === 'image').map((i:any) => ({ src: i.src }))} />
        
        <AnimatePresence>
          {activeVideo && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-brand-dark/98 flex items-center justify-center p-2 md:p-12"
            >
              <button onClick={() => setActiveVideo(null)} className="absolute top-6 right-6 text-white hover:text-brand-yellow transition-colors z-[220]">
                <X size={32} />
              </button>
              <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black relative">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center scale-[1.08]"> 
                  <iframe 
                    src={`${activeVideo}${activeVideo.includes('?') ? '&' : '?'}autoplay=1&controls=1&mute=0`} 
                    className="w-full h-full border-0" 
                    allow="autoplay; fullscreen"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* --- SUB COMPONENT --- */

const PortfolioItem = forwardRef(({ item, currentCat, onImageClick, onVideoClick }: any, ref: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const getThumbnail = () => {
    if (item.thumbnail) return item.thumbnail;
    return `https://images.unsplash.com/photo-1626544823105-df950291f1cd?q=80&w=800&auto=format&id=${item.id}`;
  };

  const getPreviewUrl = (url: string) => {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}autoplay=1&mute=1&muted=1&controls=0&start=5&end=12&loop=1&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3`;
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
      className="group relative aspect-video bg-brand-dark rounded-[2.5rem] overflow-hidden shadow-sm cursor-pointer"
    >
      {item.type === "image" ? (
        <>
          <img src={item.src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className={`absolute inset-0 ${currentCat.hoverColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`} />
          <div className="absolute inset-8 z-20 pointer-events-none">
            <motion.div className="absolute top-0 left-0 right-0 h-[1px] bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            <motion.div className="absolute top-0 bottom-0 left-0 w-[1px] bg-white origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
            <motion.div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
          </div>
        </>
      ) : (
        <div className="w-full h-full relative bg-brand-dark flex items-center justify-center overflow-hidden">
          <img 
              src={getThumbnail()} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-60'}`} 
              alt="preview"
          />

          {isHovered ? (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <iframe 
                src={getPreviewUrl(item.url)} 
                className="w-[120%] h-[150%] border-0 pointer-events-none scale-110" 
                allow="autoplay"
              />
            </div>
          ) : (
            <div className="z-10 bg-white/10 backdrop-blur-sm p-4 rounded-full border border-white/20">
               <Play className="text-white fill-white" size={32} />
            </div>
          )}
          <div className="absolute inset-0 z-30" />
        </div>
      )}
    </motion.div>
  );
});

PortfolioItem.displayName = "PortfolioItem";

export default PortfolioSection;