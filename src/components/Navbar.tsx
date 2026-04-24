import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoWhite from "@/assets/logo-navbar.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "/blog" }, // New Blog Link
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isSubPage = location.pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    
    // Logic for actual internal routes (like Blog)
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Logic for section anchors
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isSubPage || scrolled || isOpen
          ? "py-4 bg-brand-dark backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        
        {/* LOGO */}
        <button onClick={() => scrollTo("#home")} className="z-[120] flex items-center gap-2">
          <img src={logoWhite} alt="VectoPix" className="h-8 sm:h-10 w-auto" />
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-bold text-white/70 hover:text-brand-yellow transition-colors uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-brand-yellow text-brand-dark font-black text-sm hover:scale-105 transition-all shadow-lg active:scale-95"
          >
            HIRE US
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden z-[120] p-3 text-white bg-white/10 rounded-full" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen z-[110] bg-brand-dark flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none p-12">
               <img src={logoWhite} alt="" className="w-full max-w-sm h-auto grayscale" />
            </div>

            <div className="flex flex-col items-center gap-8 w-full relative z-[115]">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => scrollTo(link.href)}
                  className="text-4xl font-black text-white hover:text-brand-yellow transition-colors uppercase tracking-tight"
                >
                  {link.label}
                </motion.button>
              ))}
              
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 flex items-center gap-3 px-10 py-4 rounded-full bg-brand-yellow text-brand-dark font-black text-xl shadow-xl active:scale-95"
              >
                HIRE US
                <ArrowUpRight size={22} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;