import { motion } from "framer-motion";
import { 
  Layout, Ruler, Sticker, Box, Shirt, PartyPopper, ArrowRight,
  Layers, Cpu, Sparkles, Truck 
} from "lucide-react";

interface PrintCategoriesProps {
  onExploreClick?: () => void;
}

const PrintCategories = ({ onExploreClick }: PrintCategoriesProps) => {
  const gridServices = [
    { title: "Business Cards", icon: Layout, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745904/updated_Business_cards_n9wcyd.png" },
    { title: "Brochures & Flyers", icon: Layout, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745902/Flyers_and_Brochures_pbysxm.png" },
    { title: "ID Cards", icon: Layout, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782746220/ChatGPT_Image_Jun_29_2026_08_46_00_PM_wrqcie.png" },
    { title: "Banners & Standees", icon: Ruler, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745896/Banners_Standee_tcqoaq.png" },
    { title: "Stickers & Labels", icon: Sticker, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745897/updated_Stickets_and_labels_gkv6vt.png" },
    { title: "Packaging", icon: Box, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745902/Packaging_ahtihr.png" },
    { title: "Letterheads & Envelopes", icon: Layout, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745897/Letterhead_and_envelopes_npmgja.png" },
    { title: "Notebooks & Diaries", icon: Box, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745903/Diaries_hefhe2.png" },
    { title: "T-Shirts", icon: Shirt, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745898/Tshirts_kyxnde.png" },
    { title: "Mugs", icon: Shirt, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745895/Mugs_brdkgp.png" },
    { title: "Caps", icon: Shirt, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745903/Caps_and_Hats_opdk10.png" },
    { title: "Bags", icon: Shirt, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782746463/Bags_vwjnin.png" },
    { title: "Keychains", icon: PartyPopper, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745895/Keychains_wh0fds.png" },
    { title: "Corporate Gifts", icon: PartyPopper, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745900/Corporate_gifts_fp653b.png" },
    { title: "Custom Merch Kits", icon: Box, img: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1782745901/Custom_merchandise_kit_y0j5q3.png" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="print-categories" className="py-24 bg-white text-brand-dark scroll-mt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold text-brand-blue uppercase tracking-[0.25em] block">
            WHAT WE PRINT
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            Everything Your <span className="text-brand-blue">Brand</span> Needs
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">
            From business essentials to custom merchandise, we provide end-to-end print solutions with unmatched quality.
          </p>
        </div>

        {/* --- 15-ITEM PRODUCT GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {gridServices.map((srv, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 20px 40px -15px rgba(12, 16, 26, 0.08)" 
              }}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm"
            >
              {/* Product Thumbnail Layer — Cleaned with contain framing & light backdrop */}
              <div className="h-44 w-full overflow-hidden bg-[#f8f9fa] border-b border-gray-100/80 p-4 flex items-center justify-center relative">
                <img 
                  src={srv.img} 
                  alt={srv.title} 
                  className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Title Tray */}
              <div className="p-4 text-center bg-white flex-grow flex items-center justify-center">
                <span className="text-xs font-black uppercase tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors block">
                  {srv.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- EXPANSION LINK TRIGGER FOOTER --- */}
        <div className="mt-12 text-center">
          <button 
            onClick={onExploreClick}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-brand-blue rounded-xl text-xs font-black uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 group"
          >
            VIEW ALL SERVICES 
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform stroke-[2.5]" />
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default PrintCategories;