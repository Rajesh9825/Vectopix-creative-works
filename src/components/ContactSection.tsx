import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle2, MessageSquare, Mail, Phone, MapPin, Sparkles, PencilLine } from "lucide-react";
import emailjs from "@emailjs/browser";

// --- CUSTOM BRANDED SUCCESS MODAL ---
const SuccessModal = ({ isOpen, onClose, onWhatsApp, userName }: any) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose} className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 text-center shadow-elevated overflow-hidden"
        >
          {/* Brand Accent */}
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-yellow" />
          
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-brand-yellow" />
            </div>
          </div>

          <h3 className="text-3xl font-black text-brand-dark mb-4 leading-tight">
            Sent Successfully, <br /><span className="text-brand-blue">{userName}!</span>
          </h3>
          
          <p className="text-muted-foreground font-medium mb-8">
            Your inquiry is in our inbox. Want to fast-track this? Let's chat on WhatsApp right now.
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onWhatsApp}
              className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-brand-yellow rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all shadow-lg"
            >
              <MessageSquare size={20} />
              CHAT ON WHATSAPP
            </button>
            <button
              onClick={onClose}
              className="w-full py-4 text-brand-dark/40 font-bold hover:text-brand-dark transition-colors"
            >
              I'll wait for email
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

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
      
      const data = new FormData();
      Object.entries(formData).forEach(([key, val]) => data.append(key, val));
      fetch(import.meta.env.VITE_GOOGLE_SCRIPT_URL, { method: "POST", body: data });

      setIsModalOpen(true);
    } catch (error) {
      alert("Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const msg = `Hello VectoPix, My name is ${formData.name}. I'm writing regarding: ${formData.subject}. ${formData.message}`;
    window.open(`https://wa.me/917038473369?text=${encodeURIComponent(msg)}`, "_blank");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-blue relative overflow-hidden">
      {/* Dynamic Brand Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark/20 z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 blur-[120px] rounded-full -mr-64 -mt-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Brand Identity */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-brand-yellow text-xs font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles size={14} /> Design • Motion • Impact
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8">
              Let's craft <br /> your <span className="text-brand-yellow">Impact.</span>
            </h2>
            
            <div className="space-y-8 mt-12">
              {[
                { icon: Mail, label: "Email", val: "vectopixcreatives@gmail.com" },
                { icon: Phone, label: "Call", val: "+91 70384 73369" },
                { icon: MapPin, label: "Studio", val: "Pune, Maharashtra, India" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-brand-yellow group-hover:text-brand-dark transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs font-black uppercase tracking-widest">{item.label}</p>
                    <p className="text-white text-xl font-bold tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Glassmorphic Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[3rem] space-y-6 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase ml-2 tracking-widest">Full Name</label>
                  <input required name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-yellow focus:outline-none transition-all placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-white/40 uppercase ml-2 tracking-widest">Phone</label>
                  <input required name="phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-yellow focus:outline-none transition-all placeholder:text-white/20" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-white/40 uppercase ml-2 tracking-widest">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-yellow focus:outline-none transition-all placeholder:text-white/20" placeholder="hello@vectopix.com" />
              </div>

              {/* SUBJECT FIELD */}
              <div className="space-y-2">
                <label className="text-xs font-black text-white/40 uppercase ml-2 tracking-widest">Subject</label>
                <div className="relative">
                  <input 
                    required 
                    name="subject" 
                    value={formData.subject} 
                    onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-yellow focus:outline-none transition-all placeholder:text-white/20 pr-12" 
                    placeholder="e.g. 3D Logo Animation" 
                  />
                  <PencilLine className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-white/40 uppercase ml-2 tracking-widest">Message</label>
                <textarea required rows={4} name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-yellow focus:outline-none transition-all resize-none placeholder:text-white/20" placeholder="Briefly describe your project..." />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-brand-yellow text-brand-dark rounded-2xl font-black text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-[0_20px_40px_rgba(255,191,0,0.2)] flex items-center justify-center gap-3 disabled:opacity-50">
                {isSubmitting ? "INITIATING..." : "START PROJECT"}
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onWhatsApp={handleWhatsAppRedirect} 
        userName={formData.name} 
      />
    </section>
  );
};

export default ContactSection;