import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Bot } from "lucide-react"; // Or use your SVG logo

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Simulate progress or track actual asset loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500); // Small exit delay
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed to match your logo animation duration

    // 2. Lock scrolling during load
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center"
        >
          {/* LOGO ANIMATION */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="relative"
          >
            <div className="w-24 h-24 bg-brand-yellow rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(255,191,0,0.3)]">
              <Bot size={48} className="text-brand-dark" />
            </div>
            {/* Spinning ring around logo */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border-2 border-dashed border-brand-yellow/30 rounded-full"
            />
          </motion.div>

          {/* LOADING TEXT & PERCENTAGE */}
          <div className="mt-12 text-center">
            <h2 className="text-white font-black uppercase tracking-[0.4em] text-xs mb-2">
              VectoPix Creative Core
            </h2>
            <div className="flex items-center gap-4">
               <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-brand-yellow shadow-[0_0_15px_#ffbf00]"
                  />
               </div>
               <span className="text-brand-yellow font-mono text-xs w-8">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;