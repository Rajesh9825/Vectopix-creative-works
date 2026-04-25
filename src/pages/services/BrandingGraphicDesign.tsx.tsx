import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { 
  ArrowLeft, Palette, CheckCircle2, Sparkles, 
  Layers, PenTool, Layout, Share2 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// IMPORTANT: Import your global components here
// import Navbar from "@/components/Navbar"; 
// import Footer from "@/components/Footer";

const BrandingGraphicDesign = () => {
  const navigate = useNavigate();

  // Ensure page starts at the top when navigated
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Corporate Identity & Logos",
      icon: Layers,
      desc: "We design timeless, premium corporate-style logos and complete identity systems that serve as the strong foundation of your brand's visual presence.",
      accent: "border-brand-blue"
    },
    {
      title: "Graphic Design Services",
      icon: PenTool,
      desc: "Clean and highly professional visual solutions for all your business needs, ensuring every piece of communication aligns perfectly with your brand guidelines.",
      accent: "border-brand-dark"
    },
    {
      title: "Digital Marketing Graphics",
      icon: Layout,
      desc: "Strategic, eye-catching visual assets engineered specifically for digital ad campaigns, newsletters, and web banners to maximize click-through rates.",
      accent: "border-brand-blue"
    },
    {
      title: "Social Media Design",
      icon: Share2,
      desc: "Engaging, minimalist graphics tailored for platforms like LinkedIn, Instagram, and Facebook to keep your daily audience engaged.",
      accent: "border-brand-dark"
    }
  ];

  const portfolio = [
    {
      title: "Lightline Design Studio",
      tags: "Interior Design Branding",
      desc: "Complete visual identity crafted for a premium interior design firm based in Pune."
    },
    {
      title: "Prashant Bandi Financial",
      tags: "Corporate Stationery",
      desc: "Premium wealth management mockup including business cards and envelopes."
    },
    {
      title: "Corporate Tech Rebrand",
      tags: "B2B Software",
      desc: "Minimalist visual overhaul featuring a modernized logo and digital marketing assets."
    }
  ];

  const scrollToContact = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* 1. Add your Navbar here if it's not global */}
      {/* <Navbar /> */}

      <div className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
        
        {/* 1. HERO SECTION (Solid Yellow Theme) */}
        <section className="relative py-32 bg-brand-yellow overflow-hidden">
          {/* Subtle design texture */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-brand-dark/40 hover:text-brand-dark font-black uppercase tracking-widest mb-16 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> BACK
            </button>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-dark text-brand-yellow text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                <Sparkles size={14} /> The VectoPix Standard
              </span>
              <h1 className="text-5xl md:text-8xl font-black text-brand-dark mb-6 leading-[0.9] uppercase tracking-tighter">
                Branding & <br /><span className="text-brand-blue">Graphic Design.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-dark/70 font-medium leading-relaxed mb-10 max-w-2xl">
                Crafting clean, minimalist, and corporate visual identities that command attention and drive business growth.
              </p>
              <button 
                onClick={scrollToContact}
                className="px-10 py-5 bg-brand-dark text-brand-yellow font-black rounded-full hover:bg-brand-blue hover:text-white transition-all shadow-xl"
              >
                START YOUR DESIGN PROJECT
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. WHY IT MATTERS (White Background) */}
        <section className="py-24 container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-6">Strategic Vision</h2>
            <p className="text-2xl md:text-4xl font-bold text-brand-dark leading-tight mb-8">
              In today’s competitive market, your brand needs to <span className="text-brand-blue">communicate authority</span> at a single glance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in premium, minimalist design aesthetics that strip away the clutter. From the foundational logo to your daily digital output, we build cohesive corporate identities that position your business as an industry leader.
            </p>
          </div>
        </section>

        {/* 3. SERVICE BREAKDOWN (Light Blue Tint) */}
        <section className="py-24 bg-brand-blue/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className={`p-10 bg-white rounded-[2.5rem] shadow-sm border-b-4 ${s.accent} hover:shadow-xl transition-all group`}>
                  <s.icon className="text-brand-blue mb-6 group-hover:scale-110 transition-transform" size={40} />
                  <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. FEATURED WORK (Black Cards for Mockups) */}
        <section className="py-24 container mx-auto px-6">
          <h2 className="text-4xl font-black text-brand-dark mb-16 uppercase tracking-tighter">Featured Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((p, i) => (
              <div key={i} className="group">
                <div className="aspect-square bg-brand-dark rounded-[2.5rem] mb-6 overflow-hidden flex items-center justify-center p-12 border-4 border-transparent group-hover:border-brand-yellow transition-all">
                   <div className="w-full h-full bg-white/5 border border-white/10 rounded-xl flex items-center justify-center italic text-white/20 font-black">
                      MOCKUP
                   </div>
                </div>
                <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-2">{p.tags}</p>
                <h4 className="font-bold text-brand-dark mb-2">{p.title}</h4>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PROCESS (Dark Section for Contrast) */}
        <section className="py-24 bg-brand-dark text-white rounded-[3rem] mx-4 mb-4">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-4xl font-black mb-16 uppercase tracking-tighter text-brand-yellow">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { t: "Strategy", d: "Discovery & positioning." },
                { t: "Concept", d: "Minimalist corporate drafts." },
                { t: "Refinement", d: "Polishing chosen concepts." },
                { t: "Delivery", d: "Final high-res packages." }
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-brand-blue text-white rounded-2xl flex items-center justify-center mx-auto text-xl font-black">0{i+1}</div>
                  <h4 className="font-black uppercase text-xs tracking-widest">{step.t}</h4>
                  <p className="text-white/40 text-[10px]">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA (Solid Blue) */}
        <section className="py-24 text-center bg-brand-blue text-white rounded-[3rem] mx-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter">
            Ready to elevate your <br /> brand’s visual identity?
          </h2>
          <button 
            onClick={scrollToContact}
            className="px-12 py-6 bg-brand-yellow text-brand-dark rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
          >
            Let’s Discuss Your Project
          </button>
        </section>

      </div>

      {/* 2. Add your Footer here if it's not global */}
      {/* <Footer /> */}
    </>
  );
};

export default BrandingGraphicDesign;