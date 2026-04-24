import { motion } from "framer-motion";
import logoBlack from "@/assets/logo-black.png";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  // Existing scroll helper function
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-brand-yellow lg:min-h-[calc(100svh-4rem)] lg:flex lg:items-center"
    >
      {/* 1. DYNAMIC BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-blue blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-white blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-[clamp(5.5rem,14vw,7rem)] pb-[clamp(3rem,10vw,5rem)] w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-brand-dark/10 border border-brand-dark/20">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Creative Studio • Pune</span>
            </div>

            <h1 className="fluid-display font-black text-brand-dark mb-4 sm:mb-6 leading-[0.85] tracking-tighter">
              Design<span className="text-white">.</span>
              <br />
              <span className="text-brand-blue">Motion.</span>
              <br />
              Impact<span className="text-white">.</span>
            </h1>

            <p className="text-[clamp(1rem,3.2vw,1.25rem)] text-brand-dark/70 max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed font-medium">
              We transform brands through strategic <span className="text-brand-dark font-bold underline decoration-brand-blue decoration-2 underline-offset-4">visual narratives</span> and high-end cinematic motion graphics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* UPDATED: VIEW WORK BUTTON - Now points to #portfolio */}
              <button
                onClick={() => scrollTo("#portfolio")}
                className="group px-8 py-4 rounded-2xl bg-brand-dark text-brand-yellow font-bold text-base hover:shadow-elevated transition-all flex items-center justify-center gap-2"
              >
                VIEW WORK
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <button
                onClick={() => scrollTo("#services")}
                className="px-8 py-4 rounded-2xl border-2 border-brand-dark/10 text-brand-dark font-bold text-base hover:bg-brand-dark/5 transition-all"
              >
                OUR SERVICES
              </button>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-[4rem] border-2 border-brand-blue/20 scale-110 group-hover:scale-125 transition-transform duration-1000" />
              <div className="absolute inset-0 rounded-[4rem] border border-white/40 scale-125 group-hover:scale-110 transition-transform duration-700" />

              <div className="w-72 xl:w-96 h-72 xl:h-96 rounded-[3.5rem] bg-brand-dark/5 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                <img src={logoBlack} alt="VectoPix" className="w-48 xl:w-64 h-auto drop-shadow-2xl" />
              </div>

              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-10 px-6 py-3 rounded-2xl bg-white text-brand-dark font-black text-sm shadow-elevated border border-brand-dark/5"
              >
                DESIGN
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-10 px-6 py-3 rounded-2xl bg-brand-blue text-white font-black text-sm shadow-elevated"
              >
                MOTION
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-1/2 -right-16 px-6 py-3 rounded-2xl bg-brand-dark text-brand-yellow font-black text-sm shadow-elevated"
              >
                IMPACT
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;