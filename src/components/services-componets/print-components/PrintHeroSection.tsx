import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, ShieldCheck, Timer, Tag, Truck, X, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import emailjs from "@emailjs/browser";

interface HeroSectionProps {
  onQuoteClick: () => void;
}

const PrintHeroSection = ({ onQuoteClick }: HeroSectionProps) => {
  // Local dialog box state architecture referencing your ConsultationModal setup
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "Print & Merchandise Quote Request", 
    message: "" 
  });

  const ribbonBadges = [
    { title: "Premium Quality", subtitle: "Materials & finishing" },
    { title: "Fast Turnaround", subtitle: "On-time delivery, always" },
    { title: "Custom Solutions", subtitle: "Tailored to your brand needs" },
    { title: "Nationwide Delivery", subtitle: "Reliable delivery across India" }
  ];

  // Form Submission handling directly integrated with your EmailJS environment mapping
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || isSubmitting) return;
    setIsSubmitting(true);
    
    try {
      // 1. Submits dataset smoothly via your configured EmailJS infrastructure variables
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      // 2. Automatically formulates standard email trigger to vectopixcreatives@gmail.com
      const emailTo = "vectopixcreatives@gmail.com";
      const emailSubject = encodeURIComponent(formData.subject);
      const emailBody = encodeURIComponent(
        `Hello Vectopix Team,\n\nI just submitted a quote request via the website form:\n\n` +
        `• Name: ${formData.name}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email}\n` +
        `• Requirements: ${formData.message}\n`
      );
      window.location.href = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

      setSubmitted(true);
    } catch (error) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Immediate WhatsApp redirection overlay controller matching your exact spec requirements
  const handleWhatsApp = () => {
    const msg = `Hello VectoPix, My name is ${formData.name}. I've just sent a Quote Request form for Print & Merchandise via email. I'd like to discuss the requirements on chat: ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSubmitted(false), 300); // Cleans up current submission states upon close exit
  };

  return (
    <div className="relative w-full overflow-hidden bg-brand-dark flex flex-col">
      
      {/* --- MAIN HERO BODY --- */}
      <section className="relative min-h-[90vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-screen pt-40 pb-24 sm:py-20 flex items-center">
        
        {/* 📱 MOBILE BACKGROUND IMAGE LAYER */}
        <div 
          className="absolute inset-0 sm:hidden bg-cover bg-[73%] opacity-20 pointer-events-none z-0"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dep3ixqlu/image/upload/v1787671060/printheroimage_lz1wzm.png')" }}
        />

        {/* 💻 DESKTOP & TABLET BACKGROUND IMAGE LAYER */}
        <div 
          className="hidden sm:block absolute inset-0 bg-cover bg-center lg:bg-[right_center] pointer-events-none z-0"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dep3ixqlu/image/upload/v1787671060/printbottomimage_bhv9yg.png')" }}
        />

        {/* Readability gradient layer overlay */}
        <div className="absolute inset-0 bg-brand-dark/40 pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 w-full gap-8">
            
            {/* ========================================================================= */}
            {/* 📱 EXCLUSIVE MOBILE ONLY SECTION                                         */}
            {/* ========================================================================= */}
            <div className="sm:hidden flex flex-col justify-center items-center text-center space-y-6 max-w-md mx-auto w-full">
              
              <div className="space-y-3 w-full">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-yellow block"
                >
                  We Design. We Print. We Deliver.
                </motion.span>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl font-black uppercase tracking-tighter leading-[1.1] text-white break-words"
                >
                  Print & <br />
                  <span className="text-brand-yellow">Merchandise</span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 w-full"
              >
                <h2 className="text-base font-bold uppercase tracking-wide text-white/90">
                  Where Great Design Meets Flawless Print
                </h2>
              </motion.div>
              
              <div className="flex flex-col gap-3 w-full pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-8 py-4 bg-brand-yellow text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl active:scale-95"
                >
                  Get Free Quote <MoveRight size={14} className="stroke-[3]" />
                </button>
                <button 
                  onClick={() => {
                    const showcaseElement = document.getElementById("print-portfolio");
                    if (showcaseElement) showcaseElement.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center active:scale-95"
                >
                  View Portfolio
                </button>
              </div>

            </div>

            {/* ========================================================================= */}
            {/* 💻 DESKTOP & TABLET CONTENT COLUMN                                       */}
            {/* ========================================================================= */}
            <div className="hidden sm:flex lg:col-span-7 flex-col justify-center items-start text-left space-y-6 md:space-y-8 w-full">
              
              <div className="space-y-3 w-full">
                <motion.span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-yellow block">
                  We Design. We Print. We Deliver.
                </motion.span>
                
                <motion.h1 className="text-6xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.95] text-white break-words">
                  Print & <br className="hidden sm:inline" />
                  <span className="text-brand-yellow">Merchandise</span>
                </motion.h1>
              </div>

              <motion.div className="space-y-4 max-w-xl">
                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wide text-white">
                  Where Great Design Meets Flawless Print
                </h2>
              </motion.div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl active:scale-95"
                >
                  Get Free Quote <MoveRight size={14} className="stroke-[3]" />
                </button>
                <button 
                  onClick={() => {
                    const showcaseElement = document.getElementById("print-portfolio");
                    if (showcaseElement) showcaseElement.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-xl font-black text-xs uppercase tracking-widest transition-colors hover:bg-white/5 active:scale-95"
                >
                  View Portfolio
                </button>
              </div>

            </div>

            {/* Right Spacer Column */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* --- HIGH-FIDELITY BRAND RIBBON STRIP --- */}
      <section className="bg-brand-blue py-6 sm:py-8 text-white border-t border-white/5 relative z-20 shadow-md">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 sm:gap-y-8 gap-x-4 items-center justify-center">
            
            {/* Pillar 1 */}
            <div className="flex items-center justify-start lg:justify-center gap-3 w-full">
              <ShieldCheck size={26} className="text-brand-yellow stroke-[1.5] shrink-0 sm:w-7 sm:h-7" />
              <div className="text-left leading-tight">
                <h4 className="text-xs font-black tracking-tight text-white uppercase">{ribbonBadges[0].title}</h4>
                <p className="text-[11px] font-medium text-white/60 tracking-tight mt-0.5">{ribbonBadges[0].subtitle}</p>
              </div>
              <div className="hidden lg:block h-8 w-px bg-white/10 ml-auto" />
            </div>

            {/* Pillar 2 */}
            <div className="flex items-center justify-start lg:justify-center gap-3 w-full">
              <Timer size={26} className="text-brand-yellow stroke-[1.5] shrink-0 sm:w-7 sm:h-7" />
              <div className="text-left leading-tight">
                <h4 className="text-xs font-black tracking-tight text-white uppercase">{ribbonBadges[1].title}</h4>
                <p className="text-[11px] font-medium text-white/60 tracking-tight mt-0.5">{ribbonBadges[1].subtitle}</p>
              </div>
              <div className="hidden lg:block h-8 w-px bg-white/10 ml-auto" />
            </div>

            {/* Pillar 3 */}
            <div className="flex items-center justify-start lg:justify-center gap-3 w-full">
              <Tag size={26} className="text-brand-yellow stroke-[1.5] shrink-0 sm:w-7 sm:h-7" />
              <div className="text-left leading-tight">
                <h4 className="text-xs font-black tracking-tight text-white uppercase">{ribbonBadges[2].title}</h4>
                <p className="text-[11px] font-medium text-white/60 tracking-tight mt-0.5">{ribbonBadges[2].subtitle}</p>
              </div>
              <div className="hidden lg:block h-8 w-px bg-white/10 ml-auto" />
            </div>

            {/* Pillar 4 */}
            <div className="flex items-center justify-start lg:justify-center gap-3 w-full">
              <Truck size={26} className="text-brand-yellow stroke-[1.5] shrink-0 sm:w-7 sm:h-7" />
              <div className="text-left leading-tight">
                <h4 className="text-xs font-black tracking-tight text-white uppercase">{ribbonBadges[3].title}</h4>
                <p className="text-[11px] font-medium text-white/60 tracking-tight mt-0.5">{ribbonBadges[3].subtitle}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL MODAL DIALOG LAYER --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={closeModal} 
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }} 
              className="relative w-full max-w-xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl text-brand-dark"
            >
              <button 
                onClick={closeModal} 
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-brand-yellow transition-colors z-10"
              >
                <X size={20} />
              </button>

              {!submitted ? (
                <div className="p-8 md:p-12 text-left">
                  <div className="mb-8">
                    <span className="text-xs font-black text-brand-blue uppercase tracking-widest flex items-center gap-2 mb-2">
                      <Sparkles size={14} /> Premium Access
                    </span>
                    <h3 className="text-3xl font-black text-brand-dark leading-tight">
                      Request Your <span className="text-brand-yellow">Free Quote.</span>
                    </h3>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value={formData.subject} />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Your Name" />
                      <input required name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Phone Number" />
                    </div>
                    <input required name="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Email Address" />
                    <textarea required name="message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all resize-none" placeholder="Briefly tell us about your print/merchandise project requirements..." />
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-dark text-brand-yellow rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-xl disabled:opacity-50">
                      {isSubmitting ? "PREPARING MAIL..." : "Submit"} <Send size={18} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-brand-yellow" />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase">Email Drafted!</h3>
                  <p className="text-muted-foreground mb-8">Your details are sent to vectopixcreatives@gmail.com. Let's fast-track your timeline on WhatsApp as well.</p>
                  <div className="flex flex-col gap-3">
                    <button onClick={handleWhatsApp} className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-brand-yellow rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg">
                      <MessageSquare size={20} /> CHAT ON WHATSAPP
                    </button>
                    <button onClick={closeModal} className="w-full py-4 text-brand-dark/40 font-bold hover:text-brand-dark transition-colors">I'll wait for email response</button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default PrintHeroSection;