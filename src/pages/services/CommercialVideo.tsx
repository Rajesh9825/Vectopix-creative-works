import { motion } from "framer-motion";
import { ArrowLeft, Video, Zap, Share2, Clapperboard, Play, CheckCircle2, Sparkles, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CommercialVideo = () => {
  const navigate = useNavigate();

  const services = [
    { 
      title: "Corporate Video Editing", 
      icon: Clapperboard, 
      desc: "Polished, professional storytelling for brand documentaries and company profiles." 
    },
    { 
      title: "Social Media Reels & Shorts", 
      icon: Instagram, 
      desc: "High-retention, fast-paced vertical content designed to go viral." 
    },
    { 
      title: "Promotional Videos", 
      icon: Zap, 
      desc: "Action-oriented commercials designed to drive product sales and interest." 
    },
    { 
      title: "Event Highlight Reels", 
      icon: Share2, 
      desc: "Capturing the energy and key moments of your brand's live experiences." 
    }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* 1. HIGH-ENERGY HERO */}
      <section className="relative h-[85vh] flex items-center bg-brand-dark text-white overflow-hidden">
        {/* Kinetic Background Lines */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-blue to-transparent" />
          <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-yellow to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-brand-blue to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.button 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)} 
            className="flex items-center gap-3 text-white/30 hover:text-brand-yellow font-black uppercase tracking-widest mb-16 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> 
            Back
          </motion.button>

          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <Sparkles size={14} /> The Rhythm of Retention
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black mb-8 leading-[0.85] uppercase tracking-tighter">
                Commercial <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Editing.</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/50 font-medium leading-tight max-w-2xl border-l-2 border-brand-yellow pl-8">
                We don't just cut clips; we curate attention. Fast-paced, high-impact video content tailored for the modern digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITIES GRID */}
      <section className="py-32 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Post-Production Mastery</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark leading-none uppercase">
              Engineered for <br /><span className="text-brand-yellow">Engagement.</span>
            </h3>
          </div>
          <div className="p-6 bg-brand-dark text-white rounded-3xl flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                <Play className="text-brand-dark fill-brand-dark ml-1" size={20} />
            </div>
            <p className="text-sm font-bold uppercase tracking-widest">Scroll to witness the speed</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-brand-dark/5 rounded-[2.5rem] border border-brand-dark/5 transition-all group hover:bg-brand-blue"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-yellow transition-all duration-500">
                <item.icon className="text-brand-dark" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-4 uppercase tracking-tight group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/60 transition-colors text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. EDITING PROCESS BLOCK */}
      <section className="py-24 bg-brand-dark text-white rounded-[4rem] mx-4 mb-4 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <Video size={800} strokeWidth={0.5} />
         </div>
        <div className="container mx-auto px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-black uppercase mb-12 leading-tight">
                Our Editing <br /><span className="text-brand-yellow">Workflow.</span>
              </h2>
              <div className="space-y-6">
                {["Rough Cut & Pacing", "Sound Design & SFX", "Color Enhancement", "Motion Call-outs"].map((step, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <span className="text-3xl font-black text-white/10 group-hover:text-brand-yellow transition-colors italic">0{i+1}</span>
                    <span className="text-2xl font-bold uppercase tracking-tighter">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white text-brand-dark p-12 rounded-[3.5rem] shadow-2xl">
               <h4 className="text-brand-blue font-black uppercase tracking-widest mb-6">Retention Tip</h4>
               <p className="text-2xl font-bold leading-tight mb-8">
                 In social video, the first 3 seconds are everything. We design hooks that stop the scroll and keep them watching until the CTA.
               </p>
               <button 
                onClick={() => {
                    navigate('/');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}
                className="w-full py-5 bg-brand-dark text-brand-yellow rounded-full font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-colors"
               >
                  Edit My Project
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialVideo;