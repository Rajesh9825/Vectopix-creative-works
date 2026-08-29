import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MapPin } from "lucide-react";

const PrintFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const [showSEOAreas, setShowSEOAreas] = useState(false);

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ) for custom merchandise?",
      answer: "Our minimum order quantities vary depending on the product category. For items like standard corporate stationery (business cards, letterheads), the MOQ is typically 100 units. For premium apparel like custom t-shirts or specialized merchandise kits, we accommodate bulk production starting from 25-50 units to ensure premium quality control."
    },
    {
      question: "Can I provide my own artwork designs, or do you handle it?",
      answer: "Both options are fully welcome! If you already have a finalized vector asset, you can share it directly in high-resolution formats (.AI, .EPS, or print-ready PDF). Alternatively, our in-house creative design team can work closely alongside you to build concepts that bring your rough ideas to life at no extra asset cost."
    },
    {
      question: "What printing technologies do you use for apparel and mugs?",
      answer: "We employ industry-leading advanced printing technology customized to match the material. For custom t-shirts and hoodies, we use high-density screen printing, Direct-to-Garment (DTG), and premium embroidery. For drinkware like mugs and vacuum flasks, we utilize crisp sublimation and laser-marking systems for lifelong durability."
    },
    {
      question: "Do you offer physical print samples before starting bulk production?",
      answer: "Yes, absolutely. To maintain complete quality assurance and ensure you receive exactly what you expect, we share digital high-fidelity mockups for every single project order. For large-scale merchandise operations or custom packaging contracts, physical pre-production proofing samples can be dispatched upon request."
    },
    {
      question: "What is the typical turnaround timeline and delivery setup across India?",
      answer: "Our standard turnaround time spans between 5 to 7 business days for design validation and print execution following your formal artwork approval. We provide reliable nationwide delivery across India, shipping straight to your corporate doorstep with complete real-time tracking parameters."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Comprehensive Pune regions array for search crawlers index maps
  const puneAreas = [
    "Baner", "Balewadi", "Wakad", "Hinjawadi", "Kothrud", "Bavdhan", "Pashan", "Aundh", 
    "Kharadi", "Viman Nagar", "Kalyani Nagar", "Koregaon Park", "Hadapsar", "Magarpatta", 
    "Fursungi", "Katraj", "Dhanakawadi", "Swargate", "Kasba Peth", "Camp", "Kondhwa", 
    "NIBM", "Undri", "Pisoli", "Bibwewadi", "Sahakar Nagar", "Dhankawadi", "Wagholi", 
    "Chinchwad", "Pimpri", "Nigdi", "Bhosari", "Moshi", "Ravet", "Sangvi", "Yerwada"
  ];

  const targetAudiences = [
    { profile: "Corporate Employees & IT Sectors", keywords: "which is the top corporate printing setup, premium office customized materials, best bulk merchandise production" },
    { profile: "Tech Startups & Co-working Hubs", keywords: "most affordable brand swag kits, custom print and merchandise design studio, premium uniform creators" },
    { profile: "Home Businesses & Instagram Brands", keywords: "low MOQ sticker labels, custom boxes packagers, which is the best customized mug printing" },
    { profile: "Local Businesses & Retail Outlets", keywords: "fastest printing shop nearby, high resolution flyers distribution, premium quality business cards shop" }
  ];

  const highIntentSearches = [
    "which is the best printing service in pune",
    "Printing and merchandise service near me",
    "Best printing and branding service providers in pune",
    "Best printing and merchandise service providers in Dhanakwadi, Baner, Wakad, Kothrud, Kharadi",
    "custom corporate merchandise suppliers in pune",
    "which is the best printing and branding company - Vectopix",
    "top rated customized corporate merchandise providers",
    "which is the most affordable printing and branding company",
    "which is the fastest print service with quick door delivery near me",
    "premium custom merch kits suppliers in maharashtra"
  ];

  return (
    <section id="print-faq" className="pt-24 pb-16 bg-white text-brand-dark scroll-mt-20 border-t border-gray-150/40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* --- HEADER BLOCK --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold text-brand-blue uppercase tracking-[0.25em] flex items-center justify-center gap-2 block">
            <HelpCircle size={14} className="stroke-[2.5]" /> HAVE QUESTIONS?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            Frequently Asked <span className="text-brand-blue">Queries</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">
            Got questions about file formats, order quantities, or turnaround timelines? We have got you covered.
          </p>
        </div>

        {/* --- ACCORDION LIST STACK --- */}
        <div className="space-y-4 w-full mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen 
                    ? "border-brand-blue/30 bg-gray-50/40 shadow-sm" 
                    : "border-gray-100 bg-[#fcfbfc] hover:bg-gray-50/50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left select-none outline-none focus:outline-none"
                >
                  <span className="text-xs md:text-sm font-black uppercase tracking-tight text-brand-dark leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-brand-blue text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                  }`}>
                    {isOpen ? <Minus size={15} className="stroke-[2.5]" /> : <Plus size={15} className="stroke-[2.5]" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-left border-t border-gray-100/60 mt-1">
                        <p className="text-[11px] md:text-xs text-muted-foreground font-medium leading-relaxed pt-4 max-w-3xl">
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

        {/* --- 🌍 HIDDEN LOCAL SEO MATRIX DRAWER (Unobtrusive lower opacity trigger layout) --- */}
        <div className="w-full text-center border-t border-gray-100 pt-10">
          <button
            onClick={() => setShowSEOAreas(!showSEOAreas)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-50 text-gray-400 hover:text-brand-blue border border-gray-100 text-[10px] font-mono tracking-wider uppercase transition-all duration-300 opacity-30 hover:opacity-100"
          >
            <MapPin size={12} /> {showSEOAreas ? "Hide" : "Show"} Supported Delivery Areas
          </button>

          <AnimatePresence>
            {showSEOAreas && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden w-full text-left bg-gray-50/40 border border-gray-100 rounded-2xl p-6 mt-6 grid md:grid-cols-2 gap-8"
              >
                {/* Pune Regions Structural Index Container */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-2">Operational Regions Across Pune</h4>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-muted-foreground font-medium">
                      {puneAreas.map((area, i) => (
                        <span key={i} className="after:content-[','] last:after:content-['']">{area}</span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-200/60 pt-3">
                    <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-2">Search Query Index Intent</h4>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-gray-400 font-mono italic">
                      {highIntentSearches.map((term, i) => (
                        <span key={i} className="after:content-[';'] last:after:content-['']">"{term}"</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Targeted Profiles & High Impact Merchandise Keywords Context */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-blue mb-2">Target Client Profiles & Solutions</h4>
                  <div className="flex flex-col gap-2.5 text-[11px] text-muted-foreground font-medium">
                    {targetAudiences.map((item, i) => (
                      <div key={i} className="space-y-0.5">
                        <span className="text-brand-dark font-bold block">• Optimized Print & Merchandise for {item.profile}</span>
                        <p className="text-[10px] text-gray-400 italic font-mono pl-3 leading-snug">
                          Keywords: {item.keywords}
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

export default PrintFAQ;