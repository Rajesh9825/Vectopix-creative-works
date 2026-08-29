import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";
import { useEffect, useState } from "react";

const DesignIntroIdentity = () => {
  // ==========================================
  // RIGHT SIDE HIGHLIGHTS
  // ==========================================
  const highlights = [
    {
      icon: Compass,
      title: "Purpose Driven Designs",
      desc: "Every stroke and color palette is strategically aligned with your brand values.",
    },
    {
      icon: ShieldCheck,
      title: "Unique & Memorable",
      desc: "We skip generic templates to craft original marks that give you total ownership.",
    },
    {
      icon: Users,
      title: "Audience Connection",
      desc: "Engineered to instantly resonate with your target demographics and industry verticals.",
    },
    {
      icon: BarChart3,
      title: "Business Impact",
      desc: "Design built to scale your perceived authority, driving conversions and brand loyalty.",
    },
  ];

  // ==========================================
  // LEFT SIDE PORTFOLIO SHOWCASE
  // ==========================================
  const showcaseItems = [
    {
      service: "Logo Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772873723/LL_DS_qk4t4n.jpg",
      theme: "yellow",
    },
    {
      service: "Brochure Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776957257/Indian_Bank_Brochure.jpg_kmlgxn.jpg",
      theme: "blue",
    },
    {
      service: "Flyer Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776956675/Flyer_6.jpg_spqwus.jpg",
      theme: "yellow",
    },
    {
      service: "Menu Card Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772873976/menucard3_xcgpuu.jpg",
      theme: "blue",
    },
    {
      service: "Product Label & Packaging",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772874285/Label3_c6bg4w.jpg",
      theme: "yellow",
    },
    {
      service: "Poster Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776944180/Bhavki.jpg_gtrljv.jpg",
      theme: "blue",
    },
    {
      service: "Social Media Design",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1772874353/SM3_yn0o24.jpg",
      theme: "yellow",
    },
    {
      service: "Premium Business Card",
      image:
        "https://res.cloudinary.com/dep3ixqlu/image/upload/v1776934814/KS_Business_Card_Mockup_cioagj.jpg",
      theme: "blue",
    },
  ];

  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);

  // ==========================================
  // ANIMATION CONTROLLER
  // ==========================================
  useEffect(() => {
    // Start every service with title screen
    setShowImage(false);

    // Keep title on screen longer
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 2300);

    // Move to next service after image has been shown
    const nextTimer = setTimeout(() => {
      setShowcaseIndex(
        (prev) => (prev + 1) % showcaseItems.length
      );
    }, 6000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(nextTimer);
    };
  }, [showcaseIndex, showcaseItems.length]);

  const currentShowcase = showcaseItems[showcaseIndex];

  return (
    <section className="w-full bg-white text-brand-dark py-6 md:py-12 lg:py-14 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        <div className="grid lg:grid-cols-12 gap-4 md:gap-8 lg:gap-10 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN — ANIMATED SERVICE + PORTFOLIO SHOWCASE */}
          {/* ========================================================= */}

          <div className="lg:col-span-5 relative order-2 lg:order-1 w-full max-w-xs sm:max-w-md mx-auto">

            <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-transparent border border-gray-200 shadow-lg">
              <AnimatePresence initial={false}>

                {/* ================================================= */}
                {/* SERVICE TITLE SCREEN */}
                {/* ================================================ */}

                {!showImage ? (
                  <motion.div
                    key={`service-${showcaseIndex}`}
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`absolute inset-0 flex flex-col items-center justify-center p-6 md:p-10 text-center ${
                      currentShowcase.theme === "yellow"
                        ? "bg-[#facc15]"
                        : "bg-brand-blue"
                    }`}
                  >

                    {/* ----------------------------------------- */}
                    {/* SMALL TOP LABEL */}
                    {/* ----------------------------------------- */}

                    <motion.span
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.35,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      className={`text-[9px] md:text-[10px] font-mono tracking-[0.3em] uppercase mb-5 ${
                        currentShowcase.theme === "yellow"
                          ? "text-black/45"
                          : "text-white/55"
                      }`}
                    >
                      VectoPix Creative Works
                    </motion.span>

                    {/* ----------------------------------------- */}
                    {/* SERVICE TITLE */}
                    {/* ----------------------------------------- */}

                    <motion.h3
                      initial={{
                        opacity: 0,
                        scale: 0.88,
                        y: 18,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25,
                        duration: 1.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] ${
                        currentShowcase.theme === "yellow"
                          ? "text-black"
                          : "text-white"
                      }`}
                    >
                      {currentShowcase.service}
                    </motion.h3>

                    {/* ----------------------------------------- */}
                    {/* UNDERLINE */}
                    {/* ----------------------------------------- */}

                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      animate={{
                        width: 65,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.8,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className={`h-1 rounded-full mt-6 ${
                        currentShowcase.theme === "yellow"
                          ? "bg-black"
                          : "bg-[#facc15]"
                      }`}
                    />

                    {/* ----------------------------------------- */}
                    {/* SELECTED PORTFOLIO */}
                    {/* ----------------------------------------- */}

                    <motion.p
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 1,
                        duration: 0.7,
                      }}
                      className={`text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-mono mt-5 ${
                        currentShowcase.theme === "yellow"
                          ? "text-black/50"
                          : "text-white/55"
                      }`}
                    >
                      {/* Selected Portfolio */}
                    </motion.p>

                    {/* ----------------------------------------- */}
                    {/* COUNTER */}
                    {/* ----------------------------------------- */}

                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay: 1.1,
                        duration: 0.6,
                      }}
                      className={`absolute bottom-5 right-6 text-[10px] font-mono ${
                        currentShowcase.theme === "yellow"
                          ? "text-black/40"
                          : "text-white/45"
                      }`}
                    >
                      {String(showcaseIndex + 1).padStart(2, "0")} /{" "}
                      {String(showcaseItems.length).padStart(2, "0")}
                    </motion.div>

                  </motion.div>
                ) : (

                  /* ================================================= */
                  /* PORTFOLIO IMAGE SCREEN */
                  /* ================================================= */

                  <motion.div
                    key={`image-${showcaseIndex}`}
                    initial={{
                      opacity: 0,
                      scale: 1.08,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >

                    {/* Portfolio image */}
                    <img
                      src={currentShowcase.image}
                      alt={`${currentShowcase.service} portfolio`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Image gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

                    {/* ----------------------------------------- */}
                    {/* IMAGE LABEL */}
                    {/* ----------------------------------------- */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.45,
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute bottom-6 left-5 right-5"
                    >

                      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-mono text-[#facc15]">
                        Featured Work
                      </span>

                      <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight mt-1">
                        {currentShowcase.service}
                      </h3>

                    </motion.div>

                    {/* ----------------------------------------- */}
                    {/* IMAGE COUNTER */}
                    {/* ----------------------------------------- */}

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
                      <span className="text-[9px] font-mono text-white">
                        {String(showcaseIndex + 1).padStart(2, "0")} /{" "}
                        {String(showcaseItems.length).padStart(2, "0")}
                      </span>
                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

              {/* ================================================= */}
              {/* PROGRESS INDICATORS */}
              {/* ================================================= */}

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">

                {showcaseItems.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      width:
                        index === showcaseIndex ? 22 : 5,
                      opacity:
                        index === showcaseIndex ? 1 : 0.3,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className={`h-1 rounded-full ${
                      currentShowcase.theme === "yellow"
                        ? "bg-black"
                        : "bg-[#facc15]"
                    }`}
                  />
                ))}

              </div>

            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN — COPYWRITING & PILLAR HIGHLIGHTS */}
          {/* ========================================================= */}

          <div className="lg:col-span-7 text-left space-y-2.5 md:space-y-4 order-1 lg:order-2">

            <div className="space-y-1 md:space-y-2">

              <span className="text-[10px] md:text-xs font-mono font-bold text-brand-blue uppercase tracking-widest block">
                DESIGN THAT DEFINES YOU
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark uppercase tracking-tight leading-tight">
                More Than Just Design — <br />
                It's Your{" "}
                <span className="text-[#facc15] drop-shadow-sm">
                  Brand Identity
                </span>
              </h2>

              <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed max-w-2xl">
                A strong brand is more than a logo. It's the way your
                business is perceived, remembered, and recommended. We
                create visual identities that communicate your purpose,
                values, and vision.
              </p>

            </div>

            {/* ===================================================== */}
            {/* FOUR PILLAR FEATURES */}
            {/* ===================================================== */}

            <div className="grid grid-cols-2 gap-2.5 md:gap-4 pt-1 md:pt-2">

              {highlights.map((item, idx) => {

                const Icon = item.icon;

                return (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row gap-1.5 sm:gap-3 items-start group"
                  >

                    <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg md:rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-brand-dark group-hover:bg-[#facc15] group-hover:border-[#facc15] group-hover:text-black transition-colors duration-300">

                      <Icon
                        size={14}
                        className="stroke-[2] md:w-[16px] md:h-[16px]"
                      />

                    </div>

                    <div className="space-y-0.5">

                      <h4 className="text-xs md:text-sm font-bold uppercase tracking-tight text-brand-dark">
                        {item.title}
                      </h4>

                      <p className="text-[10px] md:text-xs text-muted-foreground font-medium leading-tight sm:leading-normal">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default DesignIntroIdentity;