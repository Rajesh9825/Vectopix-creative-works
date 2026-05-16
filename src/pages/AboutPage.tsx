import { motion, AnimatePresence, useSpring, useTransform, useInView } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Palette, MoveRight, CheckCircle2, 
  Target, Rocket, Layout, Clapperboard, Monitor, Printer,
  Globe, ShieldCheck, Zap, Award, Briefcase, 
  Stethoscope, Building2, ShoppingCart, Cpu, Utensils, Heart, X, Send, MessageSquare, Sparkles
} from "lucide-react";
import emailjs from "@emailjs/browser";

// About Page - Our Story & Philosophy
// This page serves as the narrative core of our brand, sharing the story behind Vectopix Creative Works, our design philosophy, and the values that drive us. It provides visitors with a deeper understanding of who we are, what we stand for, and how we approach creativity and client partnerships. Through compelling storytelling and engaging visuals, we aim to connect with our audience on a more personal level, building trust and inspiring potential clients to embark on their creative journey with us. 
useEffect(() => {
  document.title = "About Us | VectoPix Creative Works";
  
  // Dynamically configure description tag for indexation crawlers
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", "Discover the story behind Vectopix Creative Works. Built on precision vectors and vivid pixels, our Pune studio crafts human-centric brand strategies.");
  }
}, []);


// --- COUNTER COMPONENT FOR STATS ---
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "250+" -> 250)
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const spring = useSpring(0, { mass: 1, stiffness: 100, damping: 30 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {value.includes("+") && "+"}
      {value.includes("%") && "%"}
    </span>
  );
};




// --- CONSULTATION MODAL COMPONENT ---
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "About Page Journey Request", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const msg = `Hello VectoPix, My name is ${formData.name}. I'd like to start a journey regarding: ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-brand-yellow transition-colors z-10 text-brand-dark"><X size={20} /></button>
            {!submitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-blue uppercase tracking-widest flex items-center gap-2 mb-2"><Sparkles size={14} /> Direct Access</span>
                  <h3 className="text-3xl font-black text-brand-dark leading-tight text-left">Start Your <span className="text-brand-yellow">Journey.</span></h3>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="subject" value={formData.subject} />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Your Name" />
                    <input required name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Phone Number" />
                  </div>
                  <input required name="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Email Address" />
                  <textarea required name="message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all resize-none" placeholder="Briefly tell us about your vision..." />
                  <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-dark text-brand-yellow rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-xl disabled:opacity-50 uppercase tracking-widest">
                    {isSubmitting ? "SENDING..." : "SUBMIT REQUEST"} <Send size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-brand-yellow" /></div>
                <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase">Request Sent!</h3>
                <p className="text-muted-foreground mb-8 text-sm">Connect with us on WhatsApp immediately for faster response.</p>
                <div className="flex flex-col gap-3">
                    <button onClick={handleWhatsApp} className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-brand-yellow rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg text-sm uppercase tracking-widest">
                        <MessageSquare size={20} /> CHAT ON WHATSAPP
                    </button>
                    <button onClick={onClose} className="w-full py-4 text-brand-dark/40 font-bold hover:text-brand-dark transition-colors text-xs uppercase tracking-widest">Close Window</button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Projects Delivered", value: "250+", icon: Briefcase },
    { label: "Years Experience", value: "04+", icon: Award },
    { label: "Service Categories", value: "06", icon: Layout },
    { label: "Client Satisfaction", value: "99%", icon: ShieldCheck }
  ];

  const industries = [
    { name: "Real Estate", icon: Building2 },
    { name: "Healthcare", icon: Stethoscope },
    { name: "E-Commerce", icon: ShoppingCart },
    { name: "Technology", icon: Cpu },
    { name: "Hospitality", icon: Utensils },
    { name: "Startups", icon: Rocket },
  ];

  return (
    <div className="bg-white selection:bg-brand-yellow selection:text-brand-dark overflow-x-hidden">
      
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#FFBF00_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-brand-yellow" />
            <span className="text-xs font-black uppercase tracking-[0.5em] text-brand-yellow">About Us</span>
            <span className="h-px w-12 bg-brand-yellow" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
            We Are <br /> <span className="text-brand-yellow">Vectopix</span> Creative Works
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} transition={{ delay: 0.2 }} className="max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed px-4">
            At Vectopix Creative Works, we transform ideas into meaningful visual experiences that help brands grow, connect, and stand out in a competitive world.
          </motion.p>
        </div>
      </section>

      {/* --- STATISTICAL NUMBERS (ANIMATED) --- */}
      <section className="py-12 bg-brand-yellow border-y border-brand-dark/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <motion.div key={i} className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center shrink-0">
                  <stat.icon className="text-brand-yellow" size={20} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-brand-dark leading-none">
                    <AnimatedNumber value={stat.value} />
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/60 mt-1">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INTRO BLOCK --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed text-left">
              <p> We are a full-service creative agency specializing in branding, graphic design, video production, web development, digital creatives, and premium printing solutions — all designed to help businesses create a powerful and lasting identity.</p>
              <p> We believe that every business has a unique story, and our mission is to bring that story to life through strategic creativity, modern design, and impactful communication. Whether you are a startup building your first identity, a growing business scaling your presence, or an established company redefining your brand, we create solutions that are visually compelling, professionally crafted, and purpose-driven.</p>
              </div>
            <div className="bg-brand-blue/5 p-8 md:p-12 rounded-[3rem] border border-brand-blue/10 relative text-left">
               <div className="absolute top-4 left-6 opacity-10 font-serif text-6xl md:text-8xl text-brand-blue">“</div>
              <p className="text-xl md:text-2xl font-bold text-brand-dark italic leading-relaxed relative z-10">
                "Our approach combines creativity with functionality. We do not simply design attractive visuals — we create brand experiences that build trust, improve recognition, and drive real business impact."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE METHODOLOGY --- */}
            <section className="py-32 bg-brand-dark text-white overflow-hidden relative border-y border-white/5">
              {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 -skew-x-12 translate-x-1/2 pointer-events-none" /> */}
          
                <div className="container mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <h2 className="text-sm font-black text-brand-yellow uppercase tracking-[0.6em] mb-6">Our Core Methodology</h2>
                    <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">Design <span className="text-brand-yellow">•</span> Motion <span className="text-brand-yellow">•</span> Impact</h3>
                </div>
                   <p className="max-w-xs text-white/40 font-bold uppercase tracking-widest text-[10px] leading-relaxed">
                    These principles shape every project we take on — from a simple business card to a complete brand identity.
                   </p>
                </div>
               </div>
      
                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 relative z-10">
                {[
       { 
                    title: "Design", 
                    icon: Palette, 
                    color: "text-brand-yellow",
                    content: "We believe design is more than aesthetics. Great design communicates, builds trust, and creates emotional connections. Every visual we craft reflects clarity while maintaining a professional approach." 
                     },
                  { 
                    title: "Motion", 
                    icon: Clapperboard, 
                    color: "text-blue-400",
                    content: "Through motion graphics, animation, and dynamic storytelling, we help brands capture attention and communicate ideas in a more memorbale way in this fast-moving digital world." 
                  },
                  { 
                    title: "Impact", 
                    icon: Target, 
                     color: "text-green-400",
                    content: "Creativity should deliver results. Our goal is to create meaningful impact through branding and digital experiences that helps businesses stand out in competitive markets." 
                 }
                ].map((item, idx) => (
                 <motion.div 
                  key={idx}
                  whileHover={{ y: -15 }}
                  className="group p-12 rounded-[3.5rem] bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
                   >
                   <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform ${item.color}`}>
                     <item.icon size={32} />
                     </div>
                      <h4 className="text-3xl font-black uppercase mb-6 tracking-tight">{item.title}</h4>
                     <p className="text-white/40 text-md leading-relaxed group-hover:text-white/70 transition-colors">{item.content}</p>
                  </motion.div>
                ))}
              </div>
            </section>
      

      {/* --- SERVICES GRID --- */}
      <section className="py-32 bg-white text-center">
        <h2 className="text-5xl md:text-7xl font-black text-brand-dark uppercase tracking-tighter mb-20 leading-none">Our Services</h2>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 text-left">
          {[
            {
                          title: "Branding & Graphic Design",
                          icon: Layout,
                          desc: "Your brand identity is the foundation of your business. At Vectopix Creative Works, we create visually strong and strategically designed branding solutions.",
                          items: ["Logo Design & Brand Identity", "Corporate Branding Solutions", "Business Cards & Stationery", "Packaging & Custom Merchandise"]
                        },
                        {
                          title: "Video & Motion Graphics",
                          icon: Clapperboard,
                          desc: "We help businesses communicate their message effectively through high-quality video production and creative motion design.",
                          items: ["Promotional & Brand Intro Videos", "Explainer Animations", "Social Media Reels & Shorts", "Corporate Presentations"]
                        },
                        {
                          title: "Web Design & Development",
                          icon: Monitor,
                          desc: "A website is more than just an online presence — it is your digital identity. We design and develop modern, responsive websites.",
                          items: ["Business & Portfolio Websites", "Landing Pages & UI/UX Design", "SEO & Performance Optimization", "Custom Web Solutions"]
                        },
                        {
                          title: "Printing & Production",
                          icon: Printer,
                          desc: "We provide professional printing and production services that help businesses maintain a premium and consistent offline brand presence.",
                          items: ["Visiting Cards & Brochures", "Posters & Banners", "Packaging Materials", "Event Branding Assets"]
                        }  
          ].map((service, idx) => (
            <div key={idx} className="p-12 rounded-[4rem] bg-gray-50 hover:bg-brand-blue hover:text-white transition-all duration-700 group overflow-hidden relative border border-transparent hover:border-brand-blue/20">
              <service.icon className="mb-8 text-brand-blue group-hover:text-brand-yellow transition-colors relative z-10" size={48} />
              <h4 className="text-4xl font-black uppercase mb-4 tracking-tighter relative z-10">{service.title}</h4>
              <p className="mb-8 opacity-70 leading-relaxed relative z-10">{service.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                {service.items.map((li, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 size={14} className="text-brand-yellow" /> {li}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      {/* --- EXPERTISE SECTION (INDUSTRIES - MOVED & BLUE BG) --- */}
            <section className="py-24 bg-brand-blue text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,_#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
 
              <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-xs font-black text-brand-yellow uppercase tracking-[0.5em] mb-4">Market Verticals</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">Industries We Empower</h3>
              </div>
    
              <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {industries.map((industry, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="p-8 rounded-[2rem] border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 group backdrop-blur-sm"
                   >
                    <industry.icon className="text-brand-yellow group-hover:scale-110 transition-transform" size={32} />
                    <span className="font-black uppercase text-[10px] tracking-widest text-white/80 group-hover:text-white transition-colors">{industry.name}</span>
                  </motion.div>
                 ))}
               </div>
           </section>

        

      {/* --- WHY CHOOSE US --- */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-6 mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">Why Choose Us?</h2>
        </div>
        <div className="container mx-auto px-6 space-y-12 relative z-10">
          {[
            { title: "Complete Creative Solutions Under One Roof", desc: "We simplify the creative process by offering branding, digital, video, web, and print services in one place. This ensures consistency and saves time." },
            { title: "Strategic & Client-Focused Approach", desc: "Every project begins with listening to your goals, understanding your audience, and identifying the best creative direction." },
            { title: "Quality-Driven Execution", desc: "From the smallest design detail to the final delivery, quality remains at the center of everything we do." },
            { title: "Scalable Solutions", desc: "Whether you are an entrepreneur, startup, or corporate brand, we provide customized creative solutions tailored to your needs." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 items-start border-b border-white/10 pb-12 last:border-0 group">
              <span className="text-brand-yellow font-black text-5xl md:text-6xl opacity-20 group-hover:opacity-100 transition-opacity duration-500">0{idx + 1}</span>
              <div className="text-left">
                <h4 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-brand-yellow transition-colors">{item.title}</h4>
                <p className="text-white/50 max-w-3xl leading-relaxed text-base md:text-lg font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- VISION & MISSION --- */}
      <section className="py-32 bg-white px-4">
        <div className="container mx-auto px-0 md:px-6 grid md:grid-cols-2 gap-8">
          <div className="group p-10 md:p-16 rounded-[4rem] bg-[#1a1a1a] text-white overflow-hidden relative shadow-xl text-left">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-blue/20 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-10 text-brand-yellow relative z-10">Our Vision</h3>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight relative z-10">To become a trusted creative partner for businesses looking to build meaningful and impactful brands through innovative design.</p>
          </div>
          <div className="group p-10 md:p-16 rounded-[4rem] bg-brand-yellow text-brand-dark overflow-hidden relative shadow-xl text-left">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/30 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
            <h3 className="text-xs font-black uppercase tracking-[0.5em] mb-10 opacity-40 relative z-10">Our Mission</h3>
            <p className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight relative z-10">Empowering businesses to stand out with confidence through design, technology, and strategic storytelling.</p>
          </div>
        </div>
      </section>

      {/* --- UPDATED OUR STORY SECTION --- */}
            <section className="py-32 bg-gray-50 overflow-hidden relative border-y border-gray-100">
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl">
               <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.5em] mb-12">Our Story</h2>

                  <div className="space-y-12">
                    <div className="space-y-6">
                      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-tight">
                      The name <span className="text-brand-blue italic">Vectopix</span> comes from two words closest to every creative's heart — <span className="text-brand-blue">Vector</span> and <span className="text-brand-blue">Pixel</span>. 
                      </motion.p>
                      <p className="text-lg md:text-xl text-brand-dark/70 font-medium leading-relaxed max-w-3xl">
                       Vectors bring precision and scalability to design. Pixels bring digital life to every screen. Together, they represent exactly what we stand for — where sharp design meets real impact.
                     </p>
                    </div>
      
                    <div className="space-y-6 border-l-4 border-brand-yellow pl-8">
                      <p className="text-lg md:text-xl text-brand-dark/80 font-bold leading-relaxed">
                        Founded in 2026 and rooted in Pune, India, Vectopix Creative Works didn't start from a boardroom — it started from years of real, ground-level experience.
                      </p>
 
                    </div>
      
                    <div className="space-y-6 text-lg text-brand-dark/70 leading-relaxed font-medium">
                     <p className="text-lg text-brand-dark/60 leading-relaxed font-medium">
                      Before building Vectopix, I worked across the real estate, events, advertising, film, and printing industries as a graphic designer, video editor, and motion graphics designer — with deep hands-on knowledge in print production.
                      </p>
                      <p>
                       And across every industry, I kept seeing the same pain points — inconsistent design quality, poor print results, weak advertising creatives, and video work that missed the mark. Businesses were struggling, not because of a lack of vision, but a lack of the right creative partner.
                       </p>
                       <p className="text-2xl font-black text-brand-dark uppercase tracking-tighter">
                        That's exactly why I built <span className="text-brand-blue underline decoration-brand-yellow underline-offset-8">Vectopix.</span>
                      </p>
                      </div>
      
                    <div className="space-y-8 bg-brand-dark p-12 rounded-[3rem] text-white">
                     <p className="text-lg font-medium opacity-80">
                      We follow a simple but powerful philosophy — <span className="text-brand-yellow font-black uppercase tracking-widest">Design → Motion → Impact</span>.
                       </p>
                     <p className="text-lg md:text-xl font-bold leading-relaxed">
                        From branding and corporate stationery to printing, websites, motion graphics, and film post-production — everything is handled under one roof, to one standard of excellence.
                    </p>
                     <div className="pt-8 border-t border-white/10">
                      <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic text-brand-yellow">
                          "Because your business deserves creative work that actually moves people."
                       </p>
                     <div className="mt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                       <p className="text-sm font-black uppercase tracking-[0.4em] text-white/40">
                          — Founder, Vectopix Creative Works
                         </p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-brand-yellow">
                             Pune, India | Est. 2026
                         </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
      

      {/* --- RESPONSIVE FINAL INTERACTIVE CTA --- */}
      <section className="py-24 md:py-40 bg-white px-4">
        <div className="container mx-auto px-0 md:px-6">
          <motion.div 
            whileInView={{ scale: [0.98, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            className="bg-brand-dark rounded-[3rem] md:rounded-[5rem] p-8 sm:p-16 md:p-32 text-center text-white relative overflow-hidden shadow-2xl flex flex-col items-center justify-center"
          >
             <div className="relative z-10 w-full flex flex-col items-center">
                {/* FIXED: Text Alignment and Mobile Sizing */}
                <h2 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 md:mb-16 leading-[1] md:leading-[0.85] text-center w-full px-2">
                  Let’s Build Something <br /> 
                  <span className="text-brand-yellow italic block md:inline text-center">Extraordinary</span> Together
                </h2>
                
                <motion.button 
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 md:px-16 py-6 md:py-8 bg-brand-yellow text-brand-dark rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-6 group shadow-2xl transition-all"
                >
                  Start Your Journey <MoveRight className="group-hover:translate-x-2 transition-transform shrink-0" />
                </motion.button>

                <div className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-white/5 w-full">
                   <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] opacity-30 text-center">
                    Designing Brands. Creating Experiences. Delivering Impact.
                  </p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;