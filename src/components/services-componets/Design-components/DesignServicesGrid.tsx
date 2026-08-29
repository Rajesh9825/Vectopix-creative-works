import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Palette, ShieldAlert, FileText, Share2, 
  Box, Presentation, PenTool 
} from "lucide-react";

const DesignServicesGrid = () => {
  const capabilities = [
    { icon: Palette, title: "Logo Design", desc: "Unique logos that represent your brand perfectly." },
    { icon: ShieldAlert, title: "Brand Identity", desc: "Complete brand identity systems that build recognition." },
    { icon: FileText, title: "Marketing Collateral", desc: "Brochures, flyers, posters, banners & more." },
    { icon: Share2, title: "Social Media Design", desc: "Engaging posts, ads & creatives that boost your presence." },
    { icon: Box, title: "Packaging Design", desc: "Creative packaging that attracts and sells." },
    { icon: Presentation, title: "Presentation Design", desc: "Professional slides that communicate with impact." },
    { icon: PenTool, title: "Illustrations & Icons", desc: "Custom illustrations and icons for digital & print." }
  ];

  // Duplicated for seamless infinite desktop scroll
  const marqueeItems = [...capabilities, ...capabilities];

  return (
    <section id="design-services" className="w-full bg-[#0a0a0a] text-white py-12 md:py-24 border-t border-white/5 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold text-[#facc15] tracking-[0.25em] uppercase block">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none">
            Graphic Design & Branding <span className="text-[#facc15]">Services</span>
          </h2>
        </div>
      </div>

      {/* --- DESKTOP: INFINITE MARQUEE --- */}
      <div className="hidden md:block w-full">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="w-[300px] shrink-0 p-8 bg-gradient-to-b from-neutral-900/40 to-neutral-950/60 border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-[#facc15] mb-6">
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2">{item.title}</h3>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* --- MOBILE: STACKED CARD SCROLL ANIMATION --- */}
      <div className="md:hidden flex flex-col gap-4 px-6">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-neutral-900/40 border border-white/5 rounded-2xl flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-[#facc15] shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase text-white mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};

export default DesignServicesGrid;