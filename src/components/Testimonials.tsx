import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const testimonials = [
  { id: 1, name: "Nitin Vaidhya Productions", role: "Production House", content: "Vectopix Creative Works has been our trusted creative partner since 2021. From concept poster design and graphic design to title sequences, opening and closing credits, title animations, and subtitle spotting — they have handled it all across 16+ films with remarkable consistency and cinematic precision. Their deep understanding of film aesthetics and attention to detail makes every project feel elevated. They are an indispensable part of our production process.", rating: 5 },
  { id: 2, name: "Satish Gejage", role: "Actor & Producer", content: "Vectopix Creative Works has been an exceptional creative partner for my film projects. From striking poster designs and title sequences to endscrolls and motion graphics — their work reflects a true understanding of cinematic storytelling. The quality and creativity they bring to every frame is remarkable.", rating: 5 },
  { id: 3, name: "Sneha", role: "Financial Adviser", content: "Vectopix Creative Works did an excellent job designing our social media ad creatives and visiting cards. The designs were sharp, professional, and perfectly suited for our financial brand. Their printing quality was equally impressive.", rating: 5 },
  { id: 4, name: "Ganesh Kurapati", role: "GK Creatives", content: "We started with just a logo, and soon discovered that Vectopix Creative Works offers so much more. From wedding and pre-wedding video editing to invitation card designs and motion invitation videos for our clients — they handle it all with exceptional quality.", rating: 5 },
  { id: 5, name: "Prathamesh Shelke", role: "Lightline Design Studio", content: "Vectopix Creative Works designed our logo, brochure, and company profile with exceptional attention to detail. Every client who sees our profile is impressed — truly a creative partner you can trust.", rating: 5 }
];

const TestimonialViewer = ({ activeId, onClose }: { activeId: number | null, onClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (activeId !== null) {
      const foundIndex = testimonials.findIndex(t => t.id === activeId);
      setCurrentIndex(foundIndex);
    }
  }, [activeId]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <AnimatePresence>
      {activeId !== null && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[600] flex items-center justify-center bg-brand-dark/95 backdrop-blur-2xl p-4 overflow-hidden"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-6 right-6 z-[750] p-3 rounded-full bg-white/10 text-white hover:bg-brand-yellow hover:text-brand-dark transition-all active:scale-90 shadow-2xl">
            <X size={24} />
          </button>

          {/* MOBILE & DESKTOP SIDE NAVIGATION (Low Opacity) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-10 z-[700] pointer-events-none w-full">
            <button 
              onClick={prev} 
              className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all opacity-30 hover:opacity-100 active:scale-90"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={next} 
              className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all opacity-30 hover:opacity-100 active:scale-90"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="relative w-full max-w-4xl h-full flex flex-col items-center justify-center z-[650]">
            
            <div className="relative w-full flex items-center justify-center h-[500px] md:h-[600px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.8, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 260 }}
                  className="absolute w-full max-w-[90vw] md:max-w-2xl bg-white rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 shadow-[0_40px_80px_rgba(0,0,0,0.4)] flex flex-col items-center text-center overflow-hidden"
                >
                    <Quote className="text-brand-blue/10 mb-6 md:mb-8" size={60} />
                    
                    <div className="flex gap-1 mb-6">
                        {[...Array(current.rating)].map((_, i) => <Star key={i} size={18} className="fill-brand-yellow text-brand-yellow" />)}
                    </div>

                    <div className="overflow-y-auto max-h-[250px] md:max-h-[300px] custom-scrollbar pr-2 mb-8 w-full">
                        <p className="text-brand-dark font-bold text-lg md:text-3xl leading-snug italic">
                            "{current.content}"
                        </p>
                    </div>

                    <div className="mt-auto border-t border-brand-dark/5 pt-6 w-full">
                        <h4 className="font-black text-brand-dark uppercase tracking-tight text-lg md:text-2xl truncate">{current.name}</h4>
                        <p className="text-xs md:text-sm font-black text-brand-blue uppercase tracking-[0.3em]">{current.role}</p>
                    </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* PROGRESS INDICATOR */}
            <div className="flex gap-2 mt-4 md:mt-8">
                {testimonials.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 md:w-10 bg-brand-yellow' : 'w-1.5 md:w-2 bg-white/20'}`}
                    />
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TestimonialCard = ({ item, onOpen }: { item: typeof testimonials[0], onOpen: (id: number) => void }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="w-[280px] md:w-[450px] h-[350px] md:h-[420px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-brand-dark/5 shadow-xl flex flex-col justify-between mx-4 relative group overflow-hidden cursor-default"
  >
    <div className="relative">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-1">
            {[...Array(item.rating)].map((_, i) => <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />)}
        </div>
        <Quote className="text-brand-blue/5" size={40} />
      </div>
      <div className="relative h-[160px] overflow-hidden">
        <p className="text-brand-dark/60 font-bold leading-relaxed italic text-sm md:text-lg line-clamp-6">
            "{item.content}"
        </p>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>
    </div>

    <div className="flex items-center gap-4 border-t border-brand-dark/5 pt-6 relative z-20 bg-white">
      <div className="w-12 h-12 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-yellow font-black text-xl">
        {item.name[0]}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-black text-brand-dark uppercase tracking-tight text-xs md:text-base truncate">{item.name}</h4>
        <p className="text-[8px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] truncate">{item.role}</p>
      </div>
      <button 
        onClick={() => onOpen(item.id)}
        className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg"
      >
        <ArrowRight size={22} className="text-brand-dark" />
      </button>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 relative z-10 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-brand-blue font-black uppercase tracking-[0.4em] text-[10px] mb-4 px-4 py-1.5 bg-brand-blue/5 rounded-full inline-flex items-center gap-2">
            <Sparkles size={14} /> Success Stories
        </motion.span>
        <h2 className="text-4xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter leading-none mt-4">
            The Proof is in <br /> <span className="text-brand-yellow">The Impact.</span>
        </h2>
      </div>

      <div 
        className="relative flex overflow-hidden py-10 md:py-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <motion.div
          animate={isPaused ? {} : { x: [0, -2800] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
          className="flex flex-nowrap"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={`${index}-${item.id}`} item={item} onOpen={setSelectedId} />
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none" />
      </div>

      <TestimonialViewer activeId={selectedId} onClose={() => setSelectedId(null)} />
    </section>
  );
};

export default Testimonials;