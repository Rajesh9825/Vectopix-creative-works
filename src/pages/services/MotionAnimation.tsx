import { motion } from "framer-motion";
import { ArrowLeft, Film, Play, Sparkles, Cpu, Zap, Monitor, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MotionAnimation = () => {
  const navigate = useNavigate();

  const animationTypes = [
    { title: "2D & 3D Motion", icon: Cpu, desc: "Complex spatial animations and character movements for high-end production." },
    { title: "Logo Animations", icon: Zap, desc: "Bringing your brand mark to life with cinematic reveals and transitions." },
    { title: "Explainer Videos", icon: Monitor, desc: "Simplifying complex ideas through engaging visual storytelling and motion." },
    { title: "Micro-animations", icon: Smartphone, desc: "Enhancing digital products with subtle, interactive UI/UX motion cues." },
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0] 
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full" 
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-3 text-white/30 hover:text-brand-yellow font-black uppercase tracking-widest mb-16 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> 
            Back
          </button>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Sparkles size={14} /> Motion Alchemy
            </span>
            <h1 className="text-6xl md:text-[8rem] font-black mb-8 leading-[0.85] uppercase tracking-tighter">
              Motion <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-yellow">Graphics.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 font-medium leading-tight max-w-2xl">
              Static is boring. We breathe life into brands through fluid motion and cinematic storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DYNAMIC CAPABILITIES */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.4em]">The Portfolio of Movement</h2>
            <h3 className="text-5xl font-black uppercase leading-[0.9]">Visuals <br /> that <span className="text-brand-yellow">Dance.</span></h3>
            <p className="text-lg text-white/60 leading-relaxed">
              In a world of infinite scrolling, motion is the only way to stop the thumb. We create frame-by-frame masterpieces that explain, excite, and engage.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {animationTypes.map((type, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                  <type.icon className="text-brand-yellow mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-black uppercase text-xs tracking-widest mb-2">{type.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square bg-white/5 rounded-[4rem] border border-white/10 flex items-center justify-center group overflow-hidden">
             {/* This is where you'd eventually put a video player or high-end GIF */}
             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-50" />
             <div className="relative z-10 w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play className="text-brand-dark fill-brand-dark ml-1" size={32} />
             </div>
             <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20">Previewing Motion Library</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BLOCK */}
      <section className="py-24 bg-brand-yellow text-brand-dark text-center mx-6 rounded-[4rem] mb-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Ready to move <br /> your audience?</h2>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}
            className="px-12 py-6 bg-brand-dark text-white rounded-full font-black uppercase tracking-widest hover:bg-brand-blue transition-all shadow-2xl"
          >
            Let's Animate
          </button>
        </div>
      </section>
    </div>
  );
};

export default MotionAnimation;