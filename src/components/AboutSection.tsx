import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Palette, Clapperboard, Sparkles, ArrowUpRight, CheckCircle2, ChevronDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom"; // Assumes you are using react-router-dom

const values = [
  { 
    icon: Palette, 
    title: "Design", 
    desc: "Crafting visual identities that communicate, captivate, and convert.",
    accent: "bg-brand-yellow/10 text-brand-dark"
  },
  { 
    icon: Clapperboard, 
    title: "Motion", 
    desc: "Bringing brands to life through dynamic animation and cinematic video.",
    accent: "bg-brand-blue/10 text-brand-blue"
  },
  { 
    icon: Sparkles, 
    title: "Impact", 
    desc: "Delivering strategic results that drive growth and leave lasting impressions.",
    accent: "bg-brand-dark/5 text-brand-dark"
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understanding your brand goals and audience." },
  { title: "Strategy", desc: "Mapping out the creative path for maximum impact." },
  { title: "Execution", desc: "Bringing high-end design and motion to life." },
  { title: "Delivery", desc: "Refining and launching your visual story." }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showProcess, setShowProcess] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: Content & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-[2px] w-12 bg-brand-yellow" />
              <span className="text-sm font-bold text-brand-dark/50 uppercase tracking-[0.3em]">Our Essence</span>
            </div>

            <h2 className="fluid-heading font-black text-brand-dark mb-8 leading-[1.1]">
              We Bridge the Gap Between <br />
              <span className="text-brand-blue italic">Vision</span> and <span className="text-brand-yellow">Reality.</span>
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl mb-10">
              <p>
                VectoPix Creative Works is a premium graphic design and motion studio based in Pune, India. We don’t just create visuals; we engineer brand experiences that resonate on a global scale.
              </p>
              <p className="border-l-4 border-brand-blue pl-6 italic font-medium text-brand-dark/80">
                From ambitious startups to established corporates, we deliver design solutions strategically crafted to drive business growth.
              </p>
            </div>

            {/* BUTTON GROUP: Process Toggle & Full About Page Link */}
            <div className="relative flex flex-wrap items-center gap-8">
              {/* Toggle Process Button */}
              <motion.button 
                onClick={() => setShowProcess(!showProcess)}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 font-black text-brand-dark hover:text-brand-blue transition-all group"
              >
                OUR PROCESS 
                <motion.div
                  animate={{ rotate: showProcess ? 180 : 0 }}
                  className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                   {showProcess ? <ChevronDown size={20} className="text-brand-dark" /> : <ArrowUpRight size={20} className="text-brand-dark transition-transform group-hover:rotate-45" />}
                </motion.div>
              </motion.button>

              {/* NEW: Link to separate About Page */}
              <Link to="/about">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 font-black text-brand-dark/40 hover:text-brand-blue transition-all group"
                >
                  WHO WE ARE
                  <div className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <ExternalLink size={18} />
                  </div>
                </motion.div>
              </Link>

              {/* PROCESS REVEAL CONTENT */}
              <AnimatePresence>
                {showProcess && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden mt-8 w-full"
                  >
                    <div className="grid sm:grid-cols-2 gap-4 bg-brand-dark/5 p-6 rounded-3xl border border-brand-dark/5">
                      {processSteps.map((step, idx) => (
                        <div key={idx} className="flex gap-3">
                          <CheckCircle2 className="text-brand-blue flex-shrink-0 w-5 h-5 mt-1" />
                          <div>
                            <h4 className="font-bold text-brand-dark text-sm">{step.title}</h4>
                            <p className="text-xs text-muted-foreground leading-snug">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* RIGHT: Values Grid */}
          <div className="grid gap-6 w-full">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group flex gap-6 p-8 rounded-3xl bg-white border border-brand-dark/5 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${item.accent} flex items-center justify-center transition-colors group-hover:bg-brand-dark group-hover:text-white`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <div className="pt-1">
                  <h3 className="text-2xl font-black text-brand-dark mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;