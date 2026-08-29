import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MapPin } from "lucide-react";

const DesignFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const [showSEOAreas, setShowSEOAreas] = useState(false);

  const faqs = [
    {
      question: "What does your comprehensive brand identity package include?",
      answer: "Our core corporate branding manual covers everything your business needs to establish a strong market presence. It includes a modern logo suite (primary configurations, secondary locks, and sub-marks), precise custom typography tracking, brand color guidelines, social media layout architectures, and print-ready files for corporate stationery like business cards and letterheads."
    },
    {
      question: "How do you handle the creative design process for startups?",
      answer: "We structure our workflow into five transparent phases: Brief & Competitor Audit, Design & Conceptualization, Client Review & Revisions, Final Visual Refinement, and Complete Asset Delivery. This systematic execution ensures we deliver tailored visual frameworks that mirror your goals perfectly."
    },
    {
      question: "Will I own the full copyrights to the final graphic designs?",
      answer: "Yes, absolutely. Upon final project sign-off and settlement, absolute legal ownership and intellectual property copyrights are transferred entirely to you. We deliver all primary source files (.AI, .PSD, .EPS, and high-resolution print-ready PDFs) so you retain total control over your digital and print assets."
    },
    {
      question: "Can you redesign or modernize an existing corporate logo?",
      answer: "Yes, we specialize in brand modernization and visual identity evolution. Whether your logo needs a subtle minimalist refresh for cleaner scalability on app layouts or a complete strategic overhaul to match a new market position, we adapt our concepts to elevate your footprint."
    },
    {
      question: "What is the typical lifestyle for a complete brand packaging project?",
      answer: "Standard brand identity setups and digital graphic batches take approximately 5 to 7 business days. Complex structural product packaging, premium label dies, and multi-page corporate layout catalogs require 10 to 14 business days, allowing for deep market analysis and flawless blueprint verification."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const puneAreas = [
    "Baner", "Balewadi", "Wakad", "Hinjawadi", "Kothrud", "Bavdhan", "Pashan", "Aundh", 
    "Kharadi", "Viman Nagar", "Kalyani Nagar", "Koregaon Park", "Hadapsar", "Magarpatta", 
    "Fursungi", "Katraj", "Dhanakawadi", "Swargate", "Kasba Peth", "Camp", "Kondhwa", 
    "NIBM", "Undri", "Pisoli", "Bibwewadi", "Sahakar Nagar", "Dhankawadi", "Wagholi", 
    "Chinchwad", "Pimpri", "Nigdi", "Bhosari", "Moshi", "Ravet", "Sangvi", "Yerwada"
  ];

  const targetAudiences = [
    { profile: "Corporate Employees & IT Sectors", keywords: "top corporate brand consulting agency, elite graphics styling studio, premium visual architecture assets" },
    { profile: "Tech Startups & Co-working Hubs", keywords: "best minimalist logo design company, quick custom presentation decks, modern software brand launch swag" },
    { profile: "Home Businesses & Instagram Brands", keywords: "affordable custom labels creator near me, creative social media post templates, professional product wrapper concepts" },
    { profile: "Local Businesses & Retail Outlets", keywords: "most affordable brochure designers, high resolution store banner graphics, professional vector logo transformation" }
  ];

  const highIntentSearches = [
    "Best graphic design and branding agency in Pune",
    "Best logo designer near me for startups and corporates",
    "Which is the best logo design company in Pune",
    "top graphic design studio for startups in Maharashtra",
    "no.1 graphic design and brand identity agency near me",
    "top rated branding and graphic design agency pune",
    "which is the most affordable custom package design company",
    "which is the fastest corporate brand identity kit studio near me",
    "premium visual storytelling graphic layouts maharashtra"
  ];

  return (
    <section id="design-faq" className="py-10 md:py-24 bg-white text-brand-dark scroll-mt-20 border-t border-gray-150/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 space-y-1.5 md:space-y-3">
          <span className="text-[10px] md:text-[11px] font-bold text-brand-blue uppercase tracking-[0.25em] flex items-center justify-center gap-2 block">
            <HelpCircle size={13} className="stroke-[2.5]" /> SERVICE FAQ
          </span>
          <h2 className="text-2xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            Frequently Asked <span className="text-brand-blue">Queries</span>
          </h2>
          <p className="text-[11px] md:text-sm text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">
            Have questions about branding, copyrights, files, or design workflows? We have got you covered.
          </p>
        </div>

        {/* --- ACCORDION LIST STACK --- */}
        <div className="space-y-2.5 md:space-y-4 w-full mb-10 md:mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-xl md:rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-brand-blue/30 bg-gray-50/40 shadow-sm" 
                    : "border-gray-100 bg-[#fcfbfc] hover:bg-gray-50/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-4 md:p-6 flex items-center justify-between gap-3 text-left select-none outline-none focus:outline-none"
                >
                  <span className="text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-tight text-brand-dark leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg md:rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-brand-blue text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {isOpen ? <Minus size={13} className="stroke-[2.5]" /> : <Plus size={13} className="stroke-[2.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6 pt-0 text-left border-t border-gray-100/60 mt-0.5">
                        <p className="text-[11px] md:text-xs text-muted-foreground font-medium leading-relaxed pt-3 max-w-3xl">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* --- 🌍 LOCAL SEO MATRIX DRAWER --- */}
        <div className="w-full text-center border-t border-gray-100 pt-6 md:pt-10">
          <button
            onClick={() => setShowSEOAreas(!showSEOAreas)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 text-gray-400 hover:text-brand-blue border border-gray-100 text-[9px] md:text-[10px] font-mono tracking-wider uppercase transition-all duration-300 opacity-40 hover:opacity-100"
          >
            <MapPin size={11} /> {showSEOAreas ? "Hide" : "Show"} Active Studio Regions
          </button>

          <AnimatePresence>
            {showSEOAreas && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden w-full text-left bg-gray-50/40 border border-gray-100 rounded-xl p-4 md:p-6 mt-4 md:mt-6 grid md:grid-cols-2 gap-4 md:gap-8"
              >
                {/* Pune Local SEO Regions */}
                <div className="space-y-3">
                  <div>
                    <h4 className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1">Active Service Regions Across Pune</h4>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 text-[10px] md:text-[11px] text-muted-foreground font-medium">
                      {puneAreas.map((area, i) => (
                        <span key={i} className="after:content-[','] last:after:content-['']">{area}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-200/60 pt-2.5">
                    <h4 className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1">Google Index Search Parameters</h4>
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[9px] md:text-[10px] text-gray-400 font-mono italic">
                      {highIntentSearches.map((term, i) => (
                        <span key={i} className="after:content-[';'] last:after:content-['']">"{term}"</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Targeted Corporate & Startup Design Context */}
                <div className="space-y-2">
                  <h4 className="text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-1">Creative Core Deliverables Matrix</h4>
                  <div className="flex flex-col gap-1.5 md:gap-2.5 text-[10px] md:text-[11px] text-muted-foreground font-medium">
                    {targetAudiences.map((item, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-brand-dark font-bold block">• Visual Identity Optimization for {item.profile}</span>
                        <p className="text-[9px] md:text-[10px] text-gray-400 italic font-mono pl-3 leading-tight">
                          Context: {item.keywords}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default DesignFAQ;