import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import logoFooter from "@/assets/logo-footer.png";
import { 
  Instagram, Linkedin, Facebook, Twitter, 
  ArrowUpRight, Mail, Phone, MapPin 
} from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Instagram, link: "https://www.instagram.com/vectopixcreatives" },
    { icon: Linkedin, link: "https://www.linkedin.com/company/vectopix-creatives/about/?viewAsMember=true" },
    { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61588492622232" },
    { icon: Twitter, link: "https://twitter.com/vectopix" }
  ];

  return (
    // Added mt-0 and block to ensure it sticks perfectly to the section above
    <footer className="relative block w-full bg-brand-dark pt-24 pb-12 border-t border-white/5 mt-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. BRAND PILLAR */}
          <div className="lg:col-span-4 space-y-8">
            <button onClick={() => scrollTo("#home")} className="block">
              <img src={logoFooter} alt="VectoPix" className="h-14 w-auto grayscale brightness-200" />
            </button>
            <p className="text-xl font-medium text-white/50 leading-relaxed max-w-xs">
              Crafting <span className="text-white">iconic</span> visual identities and cinematic motion for forward-thinking brands.
            </p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-brand-yellow hover:text-brand-dark hover:border-brand-yellow transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow mb-8">Studio</h4>
              <ul className="space-y-4">
                {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((l) => (
                  <li key={l}>
                    <button
                      onClick={() => scrollTo(l === "Blog" ? "/blog" : `#${l.toLowerCase()}`)}
                      className="text-white/40 hover:text-white font-bold text-sm transition-colors flex items-center gap-2 group text-left"
                    >
                      {l.toUpperCase()}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-brand-yellow mb-8">Niches</h4>
              <ul className="space-y-4 text-white/40 font-bold text-sm">
                <li onClick={() => navigate('/services/branding-graphic-design')} className="hover:text-white transition-colors cursor-pointer uppercase">Branding</li>
                <li onClick={() => navigate('/services/commercial-video-editing')} className="hover:text-white transition-colors cursor-pointer uppercase">Video Editing</li>
                <li onClick={() => navigate('/services/motion-graphics-animation')} className="hover:text-white transition-colors cursor-pointer uppercase">Motion Graphics</li>
                <li onClick={() => navigate('/services/digital-marketing-strategy')} className="hover:text-white transition-colors cursor-pointer uppercase">Digital Marketing</li>
                <li onClick={() => navigate('/services/cinematic-post-production')} className="hover:text-white transition-colors cursor-pointer uppercase">Film Post Production</li>
                <li onClick={() => navigate('/services/print-merchandise-production')} className="hover:text-white transition-colors cursor-pointer uppercase">Marchandise & Printing</li>
                
              </ul>
            </div>
          </div>

          {/* 3. CONTACT CARD */}
          <div className="lg:col-span-4 bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 relative overflow-hidden group">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-yellow/20 transition-all" />
            
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Start a project</h4>
            <div className="space-y-6 relative z-10">
              <a href="mailto:vectopixcreatives@gmail.com" className="flex items-center gap-4 text-white/60 hover:text-brand-yellow transition-colors group/link">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-brand-yellow/20">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight">vectopixcreatives@gmail.com</span>
              </a>
              <a href="tel:+917038473369" className="flex items-center gap-4 text-white/60 hover:text-brand-yellow transition-colors group/link">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-brand-yellow/20">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight">+91 70384 73369</span>
              </a>
              <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-bold tracking-tight">Pune, MH, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            © {new Date().getFullYear()} VectoPix Creative Works • Designed for Impact
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;