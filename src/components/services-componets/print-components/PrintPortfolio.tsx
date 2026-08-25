import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

const PrintPortfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const portfolioItems = [
    { id: 1, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776934814/KS_Business_Card_Mockup_cioagj.jpg" },
    { id: 2, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1777031500/ID_1.jpg_z8utsd.jpg" },
    { id: 3, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772874148/Irani_Maha_Cafe_Standee_black_back_3_x_6_1_Qty_h7jury.jpg" },
    { id: 4, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1777030211/SS2.jpg_l8xv6f.jpg" },
    { id: 5, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772873815/brochure6_cqmq8u.jpg" },
    { id: 6, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776956692/Flyer_3.jpg_l0vsdi.jpg" },
    { id: 7, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772874285/Label3_c6bg4w.jpg" },
    { id: 8, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772873969/Invitation_3_mqfjll.jpg" },
    { id: 9, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776944180/Bhavki.jpg_gtrljv.jpg" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="print-portfolio" className="py-0 bg-gray-50/50 text-brand-dark scroll-mt-20 relative w-full select-none">
      <div className="w-full mx-auto px-6 max-w-[1600px]">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest block">
            OUR BRAND SHOWCASE
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            Our Print & <span className="text-brand-blue">Merchandise</span> Gallery
          </h2>
        </div>

        {/* --- SLIDER TRACK CONTAINER --- */}
        <div className="relative w-full group">
          
          {/* Left Arrow Trigger */}
          <button 
            onClick={() => handleScroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 border border-gray-200 text-brand-dark flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-yellow hover:text-brand-dark"
          >
            <ArrowLeft size={18} className="stroke-[2.5]" />
          </button>

          {/* Right Arrow Trigger */}
          <button 
            onClick={() => handleScroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 border border-gray-200 text-brand-dark flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand-yellow hover:text-brand-dark"
          >
            <ArrowRight size={18} className="stroke-[2.5]" />
          </button>

          {/* Horizontal Scroller */}
          <div 
            ref={scrollContainerRef}
            className="w-full overflow-x-auto flex gap-6 pb-8 pt-2 scrollbar-none snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImg(item.img)}
                className="flex-shrink-0 w-[280px] sm:w-[320px] xl:w-[350px] snap-start h-96 bg-white rounded-[2rem] border border-gray-150 overflow-hidden relative group cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-brand-blue/20"
              >
                {/* Image Component — Smooth scale zoom animation without distracting messy overlaps */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- LIGHTBOX VIEW MODAL --- */}
      {lightboxImg && (
        <div className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 hover:bg-brand-yellow hover:text-brand-dark transition-colors"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
          <motion.img 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={lightboxImg} 
            alt="Enlarged Portfolio View" 
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/5"
          />
        </div>
      )}
    </section>
  );
};

export default PrintPortfolio;