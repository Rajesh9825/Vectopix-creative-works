import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Palette, Printer, Megaphone, Film, Video, Clapperboard, 
  Plus, Minus, ArrowUpRight, X, Send, CheckCircle2, MessageSquare, Sparkles 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const services = [
  {
    slug: "branding-graphic-design",
    icon: Palette,
    title: "Branding & Graphic Design",
    desc: "The core visual identity and digital assets for modern businesses.",
    subs: ["Graphic Design Services", "Corporate Identity & Logos", "Digital Marketing Graphics", "Social Media Design"],
    color: "bg-brand-yellow/10"
  },
  {
    slug: "print-merchandise-production",
    icon: Printer,
    title: "Print & Merchandise",
    desc: "High-quality physical assets and custom branded products.",
    subs: ["Premium Printing Services", "Merchandise Design", "Packaging Design", "Brochures & Stationery"],
    color: "bg-brand-blue/10"
  },
  {
    slug: "digital-marketing-strategy",
    icon: Megaphone,
    title: "Marketing & Strategy",
    desc: "Data-driven campaigns to grow your brand's online presence.",
    subs: ["SEO / SEM", "Social Media Management", "Paid Ad Campaigns", "Digital Strategy"],
    color: "bg-brand-yellow/10"
  },
  {
    slug: "motion-graphics-animation",
    icon: Film,
    title: "Motion & Animation",
    desc: "Dynamic visual storytelling for digital and social platforms.",
    subs: ["2D & 3D Motion Graphics", "Logo Animations", "Explainer Videos", "UI/UX Micro-animations"],
    color: "bg-brand-blue/10"
  },
  {
    slug: "commercial-video-editing",
    icon: Video,
    title: "Commercial Video Editing",
    desc: "Engaging, fast-paced video content for brands and businesses.",
    subs: ["Corporate Video Editing", "Social Media Reels & Shorts", "Promotional Videos", "Event Highlight Reels"],
    color: "bg-brand-yellow/10"
  },
  {
    slug: "cinematic-post-production",
    icon: Clapperboard,
    title: "Cinematic Post-Production",
    desc: "High-end finishing, grading, and editorial for films and web series.",
    subs: ["Movie Post-Production", "Cinematic Color Grading", "Title Sequence Design", "Audio Mixing & Subtitling"],
    color: "bg-brand-blue/10"
  }
];

// --- CONSULTATION MODAL ---
const ConsultationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "Free Consultation Request", message: "" });

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
    const msg = `Hello VectoPix, My name is ${formData.name}. I'd like a Free Consultation regarding: ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" />
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl">
            <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-brand-yellow transition-colors z-10"><X size={20} /></button>
            {!submitted ? (
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="text-xs font-black text-brand-blue uppercase tracking-widest flex items-center gap-2 mb-2"><Sparkles size={14} /> Direct Access</span>
                  <h3 className="text-3xl font-black text-brand-dark leading-tight">Start Your <span className="text-brand-yellow">Consultation.</span></h3>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="subject" value={formData.subject} />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Your Name" />
                    <input required name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Phone Number" />
                  </div>
                  <input required name="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Email Address" />
                  <textarea required name="message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all resize-none" placeholder="Briefly tell us about your requirements..." />
                  <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-dark text-brand-yellow rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-xl disabled:opacity-50">
                    {isSubmitting ? "SENDING..." : "SUBMIT REQUEST"} <Send size={18} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle2 size={40} className="text-brand-yellow" /></div>
                <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase">Request Sent!</h3>
                <p className="text-muted-foreground mb-8">Connect with us on WhatsApp immediately.</p>
                <div className="flex flex-col gap-3">
                    <button onClick={handleWhatsApp} className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-brand-yellow rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg">
                        <MessageSquare size={20} /> CHAT ON WHATSAPP
                    </button>
                    <button onClick={onClose} className="w-full py-4 text-brand-dark/40 font-bold hover:text-brand-dark transition-colors">I'll wait for email</button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- UPDATED SERVICE CARD COMPONENT ---
const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const Icon = service.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ delay: index * 0.1, duration: 0.5 }} 
      className="group"
    >
      <div className={`p-8 rounded-[2rem] border border-border bg-card transition-all duration-500 hover:shadow-elevated flex flex-col ${isOpen ? 'ring-2 ring-brand-yellow' : ''}`}>
        <div className="flex justify-between items-start mb-6">
          <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center transition-colors group-hover:bg-brand-dark group-hover:text-white`}>
            <Icon className="w-7 h-7" />
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-brand-yellow transition-colors">
            {isOpen ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        </div>
        
        <h3 className="text-2xl font-black text-brand-dark mb-3 tracking-tight">{service.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
              <div className="pt-4 border-t border-border flex flex-wrap gap-2 mb-6">
                {service.subs.map((sub: string) => (
                  <span key={sub} className="px-3 py-1 rounded-lg bg-muted text-xs font-bold text-brand-dark/70 uppercase tracking-wider">{sub}</span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <button onClick={() => navigate(`/services/${service.slug}`)} className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-black text-brand-blue hover:text-brand-dark transition-colors uppercase tracking-widest group/btn">
          Explore Category <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button> */}
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-dark/5" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
          <h2 className="fluid-heading font-black text-brand-dark mb-6">Creative Solutions for <br /><span className="text-brand-yellow">Modern Brands.</span></h2>
          <p className="text-lg text-muted-foreground">We provide a full suite of creative services designed to build identity, spark motion, and create lasting market impact.</p>
        </motion.div>

        {/* FIX: added items-start so cards don't grow to match taller neighbors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="mt-20 p-10 rounded-[3rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Ready to start a project?</h4>
            <p className="text-white/60">Let’s discuss how we can bring your vision to life.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-black hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-lg">
            GET A FREE CONSULTATION
          </button>
        </motion.div>
      </div>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ServicesSection;