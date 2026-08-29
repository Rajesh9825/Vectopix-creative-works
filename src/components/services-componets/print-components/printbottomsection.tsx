import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MoveRight, Layers, Heart, Award, ShieldCheck, X, Send, CheckCircle2, MessageSquare, Sparkles 
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface PrintBottomSectionsProps {
  onQuoteClick: () => void;
}

const PrintBottomSections = ({ onQuoteClick }: PrintBottomSectionsProps) => {
  // Built-in modal states matching the Hero component exactly to handle standalone popup triggers
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    subject: "Print & Merchandise Bottom Quote Request", 
    message: "" 
  });

  const pipeline = [
    { step: "01", title: "Brief & Consultation", desc: "We understand your needs, your brand and your goals." },
    { step: "02", title: "Design & Concept", desc: "Our team creates concepts that bring your ideas to life." },
    { step: "03", title: "Review & Approval", desc: "You review and approve the final design." },
    { step: "04", title: "Print Production", desc: "We print using premium materials and technology." },
    { step: "05", title: "Quality Check", desc: "Every product is checked for perfection." },
    { step: "06", title: "Delivery", desc: "On-time delivery at your doorstep." }
  ];

  const commitments = [
    { icon: Layers, title: "Design Included", desc: "Creative design with every print order at no extra cost." },
    { icon: Heart, title: "Quality Assurance", desc: "We never compromise on materials or printing quality." },
    { icon: Award, title: "Bulk Benefits", desc: "Better prices for greater quantities." },
    { icon: ShieldCheck, title: "On-Time Delivery", desc: "We respect deadlines as much as you do." }
  ];

  const handleButtonClick = () => {
    // Triggers both the parent callback and ensures the fallback local window state mounts cleanly
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
        `Hello Vectopix Team,\n\nI just submitted a quote request via the bottom form:\n\n` +
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
    const msg = `Hello VectoPix, My name is ${formData.name}. I've just sent a Quote Request form via email. I'd like to discuss the requirements on chat: ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <div className="w-full bg-white flex flex-col">
      
      {/* --- SECTION 1: SIMPLE 6-STEP PROCESS --- */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          
          <div className="space-y-2 mb-20">
            <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold block">
              HOW WE WORK WITH YOU
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
              Our Simple <span className="text-brand-blue">6-Step</span> Process
            </h2>
          </div>

          <div className="relative flex flex-col lg:grid lg:grid-cols-6 gap-12 lg:gap-8 justify-center items-center lg:items-start">
            <div className="absolute top-7 bottom-7 left-1/2 -translate-x-1/2 w-px border-l border-dashed border-gray-300 lg:hidden pointer-events-none z-0" />

            {pipeline.map((pipe, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 relative group z-10 w-full max-w-[240px] lg:max-w-none">
                {idx < 5 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px border-t border-dashed border-gray-300 pointer-events-none z-0" />
                )}

                <div className="w-14 h-14 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-sm shadow-md relative z-10 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-300 font-mono shrink-0">
                  {pipe.step}
                </div>

                <div className="space-y-1.5 z-10 bg-white px-3 py-1 lg:px-0 lg:py-0 rounded-xl w-full flex flex-col items-center justify-center">
                  <h4 className="text-sm font-black uppercase tracking-tight text-brand-dark min-h-[24px] flex items-center justify-center">
                    {pipe.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground font-medium leading-relaxed max-w-[180px] mx-auto">
                    {pipe.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 2: COMMITMENT BAR --- */}
      <section className="bg-[#FAF8F5] border-y border-gray-200/60 py-12 text-left">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3 space-y-1">
              <span className="text-[9px] font-mono tracking-widest text-brand-blue uppercase font-bold block">OUR COMMITMENT</span>
              <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter leading-none">
                Quality. <br className="hidden lg:block"/>Service. <br className="hidden lg:block"/>Results.
              </h3>
            </div>

            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {commitments.map((item, i) => (
                <div key={i} className="flex items-start gap-4 sm:border-0 sm:border-gray-200/80 sm:pl-0 first:border-none first:pl-0 w-full">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark shrink-0 shadow-sm">
                    <item.icon size={20} className="stroke-[1.5]" />
                  </div>
                  <div className="space-y-0.5 flex-1 min-w-0">
                    <h4 className="text-xs font-black uppercase tracking-tight text-brand-dark truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground font-medium leading-tight break-words">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: IMMERSIVE BG CTA --- */}
      <section 
        className="w-full relative py-24 md:py-32 bg-brand-dark text-white bg-cover bg-[78%] sm:bg-center lg:bg-[right_center] border-t border-white/5"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dep3ixqlu/image/upload/v1787671060/printbottomimage_bhv9yg.png')" }}
      >
        <div className="absolute inset-0 bg-brand-dark/60 lg:bg-brand-dark/20 pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-12 w-full gap-8">
            
            <div className="lg:col-span-7 text-left space-y-6 md:space-y-8 max-w-md sm:max-w-none mx-auto lg:mx-0">
              <div className="space-y-3">
                {/* <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand-yellow font-bold block">OUR WORK</span> */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] sm:leading-[0.95] text-white">
                  Ready to <span className="text-brand-yellow">Print Something Great?</span>
                </h2>
              </div>
              
              <p className="text-sm md:text-base text-white/70 font-medium leading-relaxed">
                Let's create high-quality prints and merchandise that 
                  <br /> make your brand unforgettable.   
                  <br />Whether you have a clear brief or just a rough 
                  <br />idea — we're here to make it happen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto pt-2">
                <button 
                  onClick={handleButtonClick}
                  className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-brand-dark rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-xl active:scale-95 text-center"
                >
                  Get Free Quote <MoveRight size={14} className="stroke-[3]" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

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

export default PrintBottomSections;