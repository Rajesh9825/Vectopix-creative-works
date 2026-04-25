import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Quote, Star, ArrowRight, X, ChevronLeft, ChevronRight, Sparkles, Globe2, ShieldCheck, Zap } from "lucide-react";

const testimonials = [
  { id: 1, name: "Nitin Vaidhya Productions", role: "Production House", content: "Vectopix Creative Works has been our trusted creative partner since 2021. From concept poster design and graphic design to title sequences, opening and closing credits, title animations, and subtitle spotting — they have handled it all with remarkable consistency and cinematic precision. Their deep understanding of aesthetics and attention to detail makes every project feel elevated.", rating: 5 },
  { id: 2, name: "Satish Gejage", role: "Actor & Producer", content: "Vectopix Creative Works has been an exceptional creative partner for my projects. From striking designs and motion graphics — their work reflects a true understanding of storytelling. The quality and creativity they bring to every frame is remarkable. We look forward to more exciting projects together!", rating: 5 },
  { id: 3, name: "Sneha", role: "Financial Adviser", content: "Vectopix Creative Works did an excellent job designing our social media ad creatives and visiting cards. The designs were sharp, professional, and perfectly suited for our financial brand. Their printing quality was equally impressive. A one-stop creative solution we highly recommend!", rating: 5 },
  { id: 4, name: "Ganesh Kurapati", role: "GK Creatives", content: "We started with just a logo, and soon discovered that Vectopix Creative Works offers so much more. From video editing to invitation card designs and motion videos for our clients — they handle it all with exceptional quality and consistency. They are a creative backbone we truly depend on.", rating: 5 },
  { id: 5, name: "Prathamesh Shelke", role: "Lightline Design Studio", content: "Vectopix Creative Works designed our logo, brochure, and company profile with exceptional attention to detail. The designs perfectly reflect the elegance our brand stands for. Every client who sees our profile is impressed — truly a creative partner you can trust.", rating: 5 }
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

  const getVisibleItems = () => {
    const pIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nIdx = (currentIndex + 1) % testimonials.length;
    return { prevItem: testimonials[pIdx], currentItem: testimonials[currentIndex], nextItem: testimonials[nIdx] };
  };

  const { prevItem, currentItem, nextItem } = getVisibleItems();

  return (
    <AnimatePresence>
      {activeId !== null && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[600] flex items-center justify-center bg-brand-dark/98 backdrop-blur-2xl p-4 md:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-blue/20 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-brand-yellow/10 blur-[150px] rounded-full animate-pulse" />
          </div>

          <button onClick={onClose} className="absolute top-6 right-6 md:top-10 md:right-10 z-50 p-4 rounded-full bg-white/5 hover:bg-brand-yellow text-white hover:text-brand-dark transition-all border border-white/10">
            <X size={28} />
          </button>

          <div className="relative w-full max-w-7xl flex items-center justify-center gap-6 lg:gap-12">
            <motion.div 
              key={`prev-${prevItem.id}`} initial={{ opacity: 0, x: -100, rotateY: 25 }} animate={{ opacity: 0.15, x: 0, rotateY: 25, scale: 0.85 }}
              className="hidden lg:block w-[350px] p-10 rounded-[3rem] bg-white/5 border border-white/10 blur-[4px] pointer-events-none"
            >
              <p className="text-white/40 line-clamp-6 italic text-lg">"{prevItem.content}"</p>
            </motion.div>

            <motion.div
              key={currentItem.id} initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="relative w-full max-w-2xl p-8 md:p-16 rounded-[3rem] md:rounded-[5rem] bg-white shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue" />
                <Quote className="text-brand-blue/5 absolute top-10 right-10" size={120} />
                <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(currentItem.rating)].map((_, i) => <Star key={i} size={22} className="fill-brand-yellow text-brand-yellow" />)}
                </div>
                <div className="max-h-[40vh] md:max-h-none overflow-y-auto pr-2 relative z-10">
                    <p className="text-brand-dark font-bold text-xl md:text-3xl leading-tight md:leading-relaxed italic mb-10 md:mb-16">"{currentItem.content}"</p>
                </div>
                <div className="flex items-center gap-6 border-t border-brand-dark/5 pt-8 md:pt-12 relative z-10">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl bg-brand-dark flex items-center justify-center text-brand-yellow font-black text-3xl md:text-5xl transform -rotate-3">{currentItem.name[0]}</div>
                    <div>
                        <h4 className="font-black text-brand-dark uppercase tracking-tight text-xl md:text-3xl">{currentItem.name}</h4>
                        <p className="text-xs md:text-base font-black text-brand-blue uppercase tracking-[0.3em]">{currentItem.role}</p>
                    </div>
                </div>
                <div className="flex lg:hidden justify-between mt-8 gap-4">
                    <button onClick={prev} className="p-4 bg-gray-100 rounded-2xl flex-1 flex justify-center"><ChevronLeft /></button>
                    <button onClick={next} className="p-4 bg-gray-100 rounded-2xl flex-1 flex justify-center"><ChevronRight /></button>
                </div>
            </motion.div>

            <motion.div 
              key={`next-${nextItem.id}`} initial={{ opacity: 0, x: 100, rotateY: -25 }} animate={{ opacity: 0.15, x: 0, rotateY: -25, scale: 0.85 }}
              className="hidden lg:block w-[350px] p-10 rounded-[3rem] bg-white/5 border border-white/10 blur-[4px] pointer-events-none"
            >
              <p className="text-white/40 line-clamp-6 italic text-lg">"{nextItem.content}"</p>
            </motion.div>

            <div className="absolute top-1/2 -translate-y-1/2 w-full hidden lg:flex justify-between px-4 pointer-events-none">
                <button onClick={prev} className="pointer-events-auto w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all -translate-x-36 shadow-2xl"><ChevronLeft size={40} /></button>
                <button onClick={next} className="pointer-events-auto w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all translate-x-36 shadow-2xl"><ChevronRight size={40} /></button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const TestimonialCard = ({ item, onOpen }: { item: typeof testimonials[0], onOpen: (id: number) => void }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="w-[300px] md:w-[450px] h-[360px] md:h-[420px] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border border-brand-dark/5 shadow-2xl flex flex-col justify-between mx-4 md:mx-6 relative group overflow-hidden"
  >
    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative">
      <div className="flex justify-between items-start mb-4 md:mb-6">
        <div className="flex gap-1">
            {[...Array(item.rating)].map((_, i) => <Star key={i} size={12} className="fill-brand-yellow text-brand-yellow" />)}
        </div>
        <Quote className="text-brand-blue/5" size={40} />
      </div>
      <div className="relative h-[160px] md:h-[180px] overflow-hidden">
        <p className="text-brand-dark/60 font-bold leading-relaxed italic text-sm md:text-lg line-clamp-6">"{item.content}"</p>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>
    </div>
    <div className="flex items-center gap-4 md:gap-5 border-t border-brand-dark/5 pt-6 md:pt-8 relative z-20 bg-white">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-dark flex items-center justify-center text-brand-yellow font-black text-lg md:text-xl transform -rotate-3 group-hover:rotate-0 transition-transform">{item.name[0]}</div>
      <div className="flex-1 min-w-0">
        <h4 className="font-black text-brand-dark uppercase tracking-tight text-xs md:text-base truncate">{item.name}</h4>
        <p className="text-[8px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] truncate">{item.role}</p>
      </div>
      <button onClick={() => onOpen(item.id)} className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center shadow-xl">
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 mb-16 md:mb-20 relative z-10 text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-brand-blue font-black uppercase tracking-[0.4em] text-[10px] mb-4 px-4 py-1.5 bg-brand-blue/5 rounded-full inline-flex items-center gap-2">
            <Sparkles size={14} /> Global Proof
        </motion.span>
        <h2 className="text-4xl md:text-8xl font-black text-brand-dark uppercase tracking-tighter leading-none mt-4">
            The Proof is in <br /> <span className="text-brand-yellow">The Impact.</span>
        </h2>
      </div>

      <div className="relative flex overflow-hidden py-10 md:py-12" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
        <motion.div animate={isPaused ? {} : { x: [0, -2800] }} transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }} className="flex flex-nowrap">
          {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard key={`${index}-${item.id}`} item={item} onOpen={setSelectedId} />
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-30 pointer-events-none" />
      </div>

      {/* NEW NEUTRAL PROOF BAR */}
      <div className="mt-16 md:mt-24 text-center relative z-10 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} 
            className="inline-flex flex-wrap justify-center gap-8 md:gap-16 px-10 py-8 bg-brand-dark rounded-[2.5rem] md:rounded-full text-white shadow-2xl border border-white/5"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                <Globe2 size={20} />
            </div>
            <div className="text-left">
                <p className="text-sm font-black uppercase tracking-widest text-brand-yellow">Creative Partner</p>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Across Multiple Industries</p>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                <Zap size={20} />
            </div>
            
            <div className="text-left">
                <p className="text-sm font-black uppercase tracking-widest text-brand-yellow">Global Client Base</p>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Delivering Excellence Worldwide</p>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden md:block" />

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                <ShieldCheck size={20} />
            </div>
            <div className="text-left">
                <p className="text-sm font-black uppercase tracking-widest text-brand-yellow">Verified Impact</p>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">100% Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>

      <TestimonialViewer activeId={selectedId} onClose={() => setSelectedId(null)} />
    </section>
  );
};

export default Testimonials;