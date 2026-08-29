import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2
} from "lucide-react";

// Clean import from your externalized central dataset repository
import { portfolioData } from "@/data/portfolioData";

const DesignPortfolioShowcase = () => {
  const [activeFilter, setActiveTab] = useState("all");
  const [selectedWork, setSelectedWork] = useState<any | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter keys synced exactly with your external portfolioData object sub-keys
  const filterTabs = [
    { id: "all", label: "All Works" },
    { id: "Logo Design", label: "Logo Design" },
    { id: "Visiting Cards", label: "Visiting Cards" },
    { id: "Flyers", label: "Flyers" },
    { id: "Brochures", label: "Brochures" },
    { id: "Branding", label: "Brand Collateral" },
    { id: "Social Media", label: "Social Media" },
    { id: "Packaging", label: "Packaging" },
    { id: "Posters", label: "Posters" },
    { id: "ID Cards", label: "ID Cards" },
    { id: "Invitation Cards", label: "Invitation Cards" },
    { id: "Merchandise", label: "Merchandise" }
  ];

  // Logic gathering dynamic items out of target core keys safely
  const getFilteredItems = () => {
    const printCategory = portfolioData["Design & Print"] || {};

    if (activeFilter === "all") {
      return Object.keys(printCategory).reduce((acc: any[], key: string) => {
        const itemsWithMeta = printCategory[key].map((item: any) => ({
          ...item,
          sectionName: key
        }));

        return [...acc, ...itemsWithMeta];
      }, []);
    }

    return (printCategory[activeFilter] || []).map((item: any) => ({
      ...item,
      sectionName: activeFilter
    }));
  };

  const displayedItems = getFilteredItems();

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const scrollAmount = 340;

    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  // --------------------------------------------------
  // IMAGE VIEWER
  // --------------------------------------------------

  const currentIndex = selectedWork
    ? displayedItems.findIndex(
        (item: any) => item.id === selectedWork.id
      )
    : -1;

  const closeViewer = () => {
    setSelectedWork(null);
  };

  const showPrevious = () => {
    if (!displayedItems.length || currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? displayedItems.length - 1
        : currentIndex - 1;

    setSelectedWork(displayedItems[previousIndex]);
  };

  const showNext = () => {
    if (!displayedItems.length || currentIndex === -1) return;

    const nextIndex =
      currentIndex === displayedItems.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedWork(displayedItems[nextIndex]);
  };

  return (
    <>
      <section
        id="design-portfolio"
        className="w-full bg-[#0a0a0a] text-white py-24 border-t border-white/5 scroll-mt-20 selection:bg-brand-yellow selection:text-brand-dark overflow-hidden"
      >
        <div className="container mx-auto px-6 max-w-7xl">

          {/* --------------------------------------------- */}
          {/* HEADER CONTROLS */}
          {/* --------------------------------------------- */}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 w-full">
            <div className="space-y-2 text-left">
              <span className="text-xs font-mono font-bold text-[#facc15] tracking-[0.25em] uppercase block">
                OUR PORTFOLIO
              </span>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
                Designs That Speak{" "}
                <span className="text-[#facc15]">
                  For Us
                </span>
              </h2>
            </div>

            {/* Slider Layout Arrow Hooks */}
            <div className="flex gap-2 shrink-0 self-end md:self-auto">
              <button
                onClick={() => handleScroll("left")}
                className="w-11 h-12 rounded-xl border border-white/10 flex items-center justify-center text-neutral-400 hover:text-[#facc15] hover:border-[#facc15]/40 transition-all duration-300"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => handleScroll("right")}
                className="w-11 h-12 rounded-xl bg-[#facc15] text-black flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300"
                aria-label="Scroll gallery right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* FILTER NAVIGATION */}
          {/* --------------------------------------------- */}

          <div className="w-full flex justify-start items-center mb-10 overflow-x-auto scrollbar-none pb-2">
            <div className="flex items-center gap-2 bg-neutral-900/60 border border-white/5 p-1.5 rounded-2xl shrink-0 backdrop-blur-sm">

              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 outline-none whitespace-nowrap ${
                      isActive
                        ? "bg-[#facc15] text-black font-black"
                        : "text-neutral-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}

            </div>
          </div>

          {/* --------------------------------------------- */}
          {/* HORIZONTAL PORTFOLIO GALLERY */}
          {/* --------------------------------------------- */}

          <div className="relative w-full">

            <div
              ref={scrollContainerRef}
              className="flex items-center gap-6 overflow-x-auto scrollbar-none scroll-smooth w-full pb-6 pt-2 px-1"
              style={{ scrollbarWidth: "none" }}
            >

              <AnimatePresence mode="popLayout">

                {displayedItems.map((work: any) => (

                  <motion.div
                    layout
                    initial={{
                      opacity: 0,
                      scale: 0.96
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    key={work.id}
                    onClick={() => setSelectedWork(work)}
                    className="w-[290px] sm:w-[330px] aspect-[4/3] shrink-0 rounded-[2rem] overflow-hidden bg-neutral-950 border border-white/5 shadow-xl relative group cursor-pointer"
                  >

                    {/* -------------------------------- */}
                    {/* IMAGE */}
                    {/* -------------------------------- */}

                    <motion.img
                      src={work.src}
                      alt={`${work.sectionName} Showcase Asset`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      whileHover={{
                        scale: 1.07
                      }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    {/* -------------------------------- */}
                    {/* PREMIUM HOVER EFFECT */}
                    {/* -------------------------------- */}

                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                    >

                      {/* Soft dark edge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                      {/* Small view button */}
                      <motion.div
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          y: 10
                        }}
                        whileHover={{
                          opacity: 1,
                          scale: 1,
                          y: 0
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut"
                        }}
                        className="absolute bottom-5 right-5 w-10 h-10 rounded-full bg-white/95 text-black flex items-center justify-center shadow-xl backdrop-blur-sm"
                      >
                        <Maximize2 size={15} />
                      </motion.div>

                    </motion.div>

                    {/* Subtle hover border */}
                    <motion.div
                      className="absolute inset-0 rounded-[2rem] border-2 border-[#facc15] pointer-events-none"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.7 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Graphic fallback */}
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex flex-col justify-between p-6 -z-10 text-neutral-700 select-none">
                      <span className="text-[9px] font-mono tracking-widest uppercase">
                        Rendering Canvas
                      </span>
                    </div>

                  </motion.div>

                ))}

              </AnimatePresence>

            </div>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* FULL SCREEN IMAGE VIEWER */}
      {/* ================================================== */}

      <AnimatePresence>

        {selectedWork && (

          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.25
            }}
            onClick={closeViewer}
          >

            {/* -------------------------------- */}
            {/* CLOSE BUTTON */}
            {/* -------------------------------- */}

            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                closeViewer();
              }}
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-[#facc15] hover:text-black transition-all duration-300"
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                delay: 0.1
              }}
              aria-label="Close image viewer"
            >
              <X size={21} />
            </motion.button>

            {/* -------------------------------- */}
            {/* PREVIOUS */}
            {/* -------------------------------- */}

            {displayedItems.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-[#facc15] hover:text-black transition-all duration-300"
                aria-label="Previous work"
              >
                <ChevronLeft size={22} />
              </button>

            )}

            {/* -------------------------------- */}
            {/* NEXT */}
            {/* -------------------------------- */}

            {displayedItems.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/10 text-white flex items-center justify-center hover:bg-[#facc15] hover:text-black transition-all duration-300"
                aria-label="Next work"
              >
                <ChevronRight size={22} />
              </button>

            )}

            {/* -------------------------------- */}
            {/* IMAGE */}
            {/* -------------------------------- */}

            <motion.div
              key={selectedWork.id}
              initial={{
                opacity: 0,
                scale: 0.88,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.92
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selectedWork.src}
                alt={`${selectedWork.sectionName} Showcase Asset`}
                className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
};

export default DesignPortfolioShowcase;
