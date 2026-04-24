import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Palette, Printer, Megaphone, Film, Video, Clapperboard, Plus, Minus, ArrowUpRight 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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

// ... (Rest of the ServiceCard and ServicesSection logic remains the same)
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
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
      <div 
        className={`h-full p-8 rounded-[2rem] border border-border bg-card transition-all duration-500 hover:shadow-elevated flex flex-col justify-between ${isOpen ? 'ring-2 ring-brand-yellow' : ''}`}
      >
        <div>
            <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center transition-colors group-hover:bg-brand-dark group-hover:text-white`}>
                <Icon className="w-7 h-7" />
            </div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-brand-yellow transition-colors"
            >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            </div>

            <h3 className="text-2xl font-black text-brand-dark mb-3 tracking-tight">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
            {service.desc}
            </p>

            <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
                >
                <div className="pt-4 border-t border-border flex flex-wrap gap-2 mb-6">
                    {service.subs.map((sub) => (
                    <span 
                        key={sub} 
                        className="px-3 py-1 rounded-lg bg-muted text-xs font-bold text-brand-dark/70 uppercase tracking-wider"
                    >
                        {sub}
                    </span>
                    ))}
                </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>

        {/* SEO LINK - EXPLORE FEATURE */}
        {/* <button 
            onClick={() => navigate(`/services/${service.slug}`)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-black text-brand-blue hover:text-brand-dark transition-colors uppercase tracking-widest group/btn"
        >
            Explore Category 
            <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button> */}
      </div>
    </motion.div>
  );
};

// ... Rest of the ServicesSection remains the same with your centered grid logic ...

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // --- WORKABLE SCROLL LOGIC ---
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-dark/5" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
          <h2 className="fluid-heading font-black text-brand-dark mb-6">
            Creative Solutions for <br />
            <span className="text-brand-yellow">Modern Brands.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a full suite of creative services designed to build identity, 
            spark motion, and create lasting market impact.
          </p>
        </motion.div>

        {/* CENTERED GRID LOGIC */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={service.title}
              className={i === 6 ? "lg:col-start-2" : ""}
            >
              <ServiceCard service={service} index={i} />
            </div>
          ))}
        </div>

        {/* WORKABLE CTA CARD */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 p-10 rounded-[3rem] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Ready to start a project?</h4>
            <p className="text-white/60">Let’s discuss how we can bring your vision to life.</p>
          </div>
          <button 
            onClick={scrollToContact} // Link added here
            className="px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-black hover:bg-white hover:scale-105 transition-all active:scale-95"
          >
            GET A FREE CONSULTATION
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;