import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MoveRight, X, Send, CheckCircle2, MessageSquare, Sparkles 
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface DesignBottomCTAProps {
  onQuoteClick: () => void;
}

const DesignBottomCTA = ({ onQuoteClick }: DesignBottomCTAProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "Branding & Graphic Design Bottom Quote Request", 
    message: "" 
  });

  const handleButtonClick = () => {
    if (onQuoteClick) onQuoteClick();
    setIsModalOpen(true);
  };

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
      
      const emailTo = "vectopixcreatives@gmail.com";
      const emailSubject = encodeURIComponent(formData.subject);
      const emailBody = encodeURIComponent(
        `Hello Vectopix Team,\n\nI just submitted a quote request via the branding bottom form:\n\n` +
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

  const handleWhatsApp = () => {
    const msg = `Hello VectoPix, My name is ${formData.name}. I've just sent a Branding & Design Quote Request form via email. I'd like to discuss the requirements on chat: ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* --- MOCKUP STYLE IMMERSIVE INTEGRATED BG CTA --- */}
      <section 
        className="w-full relative py-20 md:py-24 text-white bg-cover bg-center bg-no-repeat border-t border-white/5"
        style={{ 
          backgroundImage: "url('https://res.cloudinary.com/dep3ixqlu/image/upload/v1787994126/Designbottomimage_zwarnt.png')" 
        }}
      >
        {/* Semi-transparent linear scrim mask smoothly balancing text contrast across the background panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 w-full gap-8">
            
            {/* Content Column */}
            <div className="lg:col-span-8 text-left space-y-5 max-w-xl mx-auto lg:mx-0">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand-yellow font-bold block">READY TO START?</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[1.05] text-white">
                  Let's Create an <span className="text-brand-yellow">Unforgettable Identity.</span>
                </h2>
              </div>
              
              <p className="text-xs md:text-sm text-white/80 font-medium leading-relaxed">
                Transform your company footprint with premium logos, packaging design systems, and custom corporate marketing materials. Share your rough concepts or detailed design brief with us.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto pt-2">
                <button 
                  onClick={handleButtonClick}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:scale-102 shadow-xl active:scale-95 text-center"
                >
                  Get Free Quote <MoveRight size={14} className="stroke-[3]" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-4 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* --- STANDALONE MODAL FORM INTEGRATION MATRIX --- */}
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
                      <Sparkles size={14} /> Premium Identity Access
                    </span>
                    <h3 className="text-3xl font-black text-brand-dark leading-tight">
                      Request Design <span className="text-brand-yellow">Consultation.</span>
                    </h3>
                  </div>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="subject" value={formData.subject} />
                    <div className="grid md:grid-cols-2 gap-4">
                      <input required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Your Name" />
                      <input required name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Phone Number" />
                    </div>
                    <input required name="email" type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all" placeholder="Email Address" />
                    <textarea required name="message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-yellow transition-all resize-none" placeholder="Briefly tell us about your logo, branding, packaging or graphic design project..." />
                    <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-brand-dark text-brand-yellow rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-brand-blue hover:text-white transition-all shadow-xl disabled:opacity-50">
                      {isSubmitting ? "PREPARING MAIL..." : "GENERATE EMAIL QUOTE"} <Send size={18} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-brand-yellow" />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase">Email Drafted!</h3>
                  <p className="text-muted-foreground mb-8">Your identity parameters are sent to vectopixcreatives@gmail.com. Let's fast-track your visual timeline on WhatsApp as well.</p>
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

export default DesignBottomCTA;