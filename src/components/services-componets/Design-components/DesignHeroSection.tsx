import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface DesignHeroSectionProps {
  onQuoteClick?: () => void;
}

// Compact helper sub-component to cleanly handle individual image success states
const LogoItem = ({ logo }: { logo: { id: number; src: string; alt: string } }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="h-14 w-32 shrink-0 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 relative px-2">
      {!imgFailed && (
        <img 
          src={logo.src} 
          alt={logo.alt} 
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgFailed(true)}
          className="max-h-full max-w-full object-contain relative z-10"
        />
      )}
      
      {/* Fallback text token only prints if image has genuinely broken or hasn't loaded yet */}
      {(!imgLoaded || imgFailed) && (
        <span className="text-[10px] font-bold tracking-widest text-neutral-400/70 font-mono absolute inset-0 flex items-center justify-center bg-neutral-50 rounded-lg border border-neutral-100/60 select-none">
          BRAND_{logo.id}
        </span>
      )}
    </div>
  );
};

const DesignHeroSection = ({ onQuoteClick }: DesignHeroSectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Dynamic file path mappings for your client brand logo images
  const clientLogos = [
    { id: 1, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993774/Redbell_md5rfj.png", alt: "Altair Logo" },
    { id: 2, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993773/Nitinvaidya_plhpyz.png", alt: "Wellness Studio Logo" },
    { id: 3, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993773/Metamorphic_blm9dx.png", alt: "Urban Homes Logo" },
    { id: 4, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993772/Kantilal_bfbb5v.png", alt: "FitZone Gym Logo" },
    { id: 5, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993770/Sharadatravels_ttrlgb.png", alt: "Innovate Solutions Logo" },
    { id: 6, src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993771/Mayaapple_ijo7vy.png", alt: "Partner Brand Logo" }
  ];

  // Micro avatar metrics brand image paths
  const socialProofBrands = [
    { id: "b1", src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993774/Redbell_md5rfj.png", alt: "Client Icon" },
    { id: "b2", src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993773/Nitinvaidya_plhpyz.png", alt: "Client Icon" },
    { id: "b3", src: "https://res.cloudinary.com/dep3ixqlu/image/upload/v1787993770/Sharadatravels_ttrlgb.png", alt: "Client Icon" }
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 240;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <div className="w-full bg-[#0a0a0a] text-white selection:bg-brand-yellow selection:text-brand-dark overflow-hidden">
      
      {/* --- INTEGRATED FULL-WIDTH HERO BLOCK WITH BACKGROUND IMAGE SHOWCASE --- */}
      <section 
        className="relative w-full pt-40 pb-20 bg-no-repeat bg-cover lg:bg-contain bg-center lg:bg-right-center"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dep3ixqlu/image/upload/v1787994135/Designheroimage_rsuojq.png')" 
        }}
      >
        {/* Dynamic backdrop opacity layer to maintain copy legibility across mobile displays */}
        <div className="absolute inset-0 bg-[#0a0a0a]/75 lg:bg-gradient-to-r lg:from-[#0a0a0a] lg:via-[#0a0a0a]/80 lg:to-transparent pointer-events-none z-0" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Constrained layout column mirroring the premium editorial template width */}
          <div className="max-w-3xl space-y-6 md:space-y-8 text-left">
            
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-gray-400 uppercase block">
                CREATIVE MINDS. STRONGER BRANDS.
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] uppercase">
                Graphic Design <br />
                <span className="text-[#facc15] font-extrabold">& Branding.</span>
              </h1>
            </div>

            <p className="text-sm md:text-base text-gray-400 max-w-xl font-medium leading-relaxed">
              We craft powerful visual identities that help businesses stand out, connect with the right audience, and leave a lasting impression.
            </p>

            {/* Action Toggles */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => {
                  const portfolio = document.getElementById("design-portfolio");
                  if (portfolio) portfolio.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-[#facc15] text-black font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/10 active:scale-98"
              >
                Explore Our Work <ArrowRight size={14} className="stroke-[3]" />
              </button>
              
              <button 
                onClick={() => {
                  const services = document.getElementById("design-services");
                  if (services) services.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-3.5 bg-transparent text-white border border-white/20 font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-white/5 hover:border-white/40 transition-all duration-300 active:scale-98"
              >
                Our Services <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Micro-Social Proof Avatar Brand Metrics */}
<div className="flex items-center gap-3 pt-4 border-t border-white/5 max-w-xs">
  <div className="flex -space-x-2">
    {socialProofBrands.map((avatar) => (
      <div
        key={avatar.id}
        className="w-8 h-8 rounded-full bg-white border-2 border-[#0a0a0a] overflow-hidden flex items-center justify-center shadow-sm"
      >
        <img
          src={avatar.src}
          alt={avatar.alt}
          className="w-full h-full object-contain p-1.5"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    ))}
  </div>

  <div className="text-left leading-none">
    <span className="text-xs font-black text-[#facc15] block">
      200+ Brands
    </span>
    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
      Trust VectoPix
    </span>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* --- TRUSTED INDUSTRIAL CLIENT LOGO SLIDER STRIP --- */}
      <div className="w-full bg-white text-gray-400 py-1 border-y border-gray-100 selection:bg-brand-dark selection:text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <span className="text-[12px] font-mono font-bold tracking-widest uppercase text-gray-500 shrink-0 select-none">
              TRUSTED BY BUSINESSES <br /> ACROSS INDUSTRIES
            </span>
            
            {/* Unified Slider Row Architecture */}
            <div className="w-full flex items-center gap-4 overflow-hidden relative">
              
              {/* Horizontal Scroll Track Wrapper */}
              <div 
                ref={scrollContainerRef}
                className="flex items-center gap-6 overflow-x-auto scrollbar-none w-full py-2 px-1 scroll-smooth"
                style={{ scrollbarWidth: "none" }}
              >
                {clientLogos.map((logo) => (
                  <LogoItem key={logo.id} logo={logo} />
                ))}
              </div>

              {/* Precise Slider Directional Navigation Toggles */}
              <div className="flex gap-1 shrink-0 bg-white pl-4 z-10">
                <button
                  onClick={() => handleScroll("left")}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-black transition-all"
                  aria-label="Scroll logos left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => handleScroll("right")}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-black transition-all"
                  aria-label="Scroll logos right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default DesignHeroSection;