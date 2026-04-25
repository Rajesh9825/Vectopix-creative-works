import { motion } from "framer-motion";
import { ArrowLeft, Megaphone, TrendingUp, Target, BarChart, CheckCircle2, Sparkles, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DigitalMarketingStrategy = () => {
  const navigate = useNavigate();

  const strategies = [
    { title: "SEO & SEM", icon: Search, desc: "Dominating search results through organic optimization and targeted paid search." },
    { title: "Social Media Management", icon: Megaphone, desc: "Building communities and brand loyalty across all major social platforms." },
    { title: "Paid Ad Campaigns", icon: Target, desc: "High-ROI advertising on Meta, Google, and LinkedIn tailored to your goals." },
    { title: "Digital Strategy", icon: BarChart, desc: "Comprehensive roadmaps that align your creative assets with business growth." },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      
      {/* 1. DATA-INSPIRED HERO */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        {/* Subtle moving lines background to represent "Growth/Data" */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-white/40 hover:text-brand-yellow font-bold mb-12 transition-colors"
          >
            <ArrowLeft size={20} /> BACK TO STUDIO
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 rounded-full text-brand-yellow text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Growth Engineering
            </span>
            <h1 className="text-6xl md:text-[7rem] font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              Marketing & <br /><span className="text-brand-blue">Strategy.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl">
              We don't just post content; we engineer growth. Data-driven strategies designed to scale your brand's digital footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE STRATEGY GRID */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
            <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Precision Targeting</h2>
            <h3 className="text-5xl font-black text-brand-dark uppercase leading-none mb-8">Creative <br /> Meets <span className="text-brand-yellow">ROI.</span></h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Marketing is only as good as the results it generates. We combine VectoPix's world-class creative output with analytical precision to ensure every campaign converts.
            </p>
            <div className="space-y-4">
              {["Audience Segmentation", "Conversion Tracking", "A/B Content Testing", "Quarterly Growth Audits"].map((item) => (
                <div key={item} className="flex items-center gap-3 font-bold text-brand-dark/80">
                  <CheckCircle2 className="text-brand-blue" size={20} /> {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {strategies.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-10 bg-brand-dark/5 rounded-[2.5rem] border border-brand-dark/5 flex flex-col md:flex-row gap-8 items-start hover:bg-brand-dark hover:text-white transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 group-hover:bg-brand-yellow transition-colors shadow-sm">
                  <item.icon className="text-brand-dark" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase tracking-tight mb-3">{item.title}</h4>
                  <p className="text-muted-foreground group-hover:text-white/60 transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE STATS BLOCK */}
      <section className="pb-32 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 bg-brand-dark p-12 rounded-[4rem] text-center">
            <div>
                <p className="text-brand-yellow text-5xl font-black mb-2 uppercase">2x</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Average ROI Increase</p>
            </div>
            <div className="border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
                <p className="text-brand-blue text-5xl font-black mb-2 uppercase">1M+</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Audience Reach</p>
            </div>
            <div>
                <p className="text-white text-5xl font-black mb-2 uppercase">100%</p>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Data Transparency</p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingStrategy;