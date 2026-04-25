import { motion } from "framer-motion";
import { ArrowLeft, Printer, Box, Shirt, BookOpen, CheckCircle2, Sparkles, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrintMerchandise = () => {
  const navigate = useNavigate();

  const products = [
    { title: "Premium Printing", icon: Printer, desc: "Business cards, letterheads, and corporate stationery with luxury finishes." },
    { title: "Merchandise Design", icon: Shirt, desc: "Custom apparel, hoodies, and branded corporate gifting items." },
    { title: "Packaging Design", icon: Box, desc: "Retail-ready boxes and bags that enhance the unboxing experience." },
    { title: "Brochures & Catalogs", icon: BookOpen, desc: "High-end layouts for tangible marketing that converts." },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] selection:bg-brand-blue selection:text-white">
      
      {/* 1. TEXTURE HERO SECTION */}
      <section className="relative py-24 bg-brand-dark text-white overflow-hidden">
        {/* Subtle grid pattern to represent print alignment */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-white/40 hover:text-brand-yellow font-bold mb-12 transition-colors"
          >
            <ArrowLeft size={20} /> BACK TO STUDIO
          </button>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/20 rounded-full text-brand-blue text-[10px] font-black uppercase tracking-widest mb-6 border border-brand-blue/30">
              <Sparkles size={14} /> Tangible Brand Assets
            </span>
            <h1 className="text-6xl md:text-[7rem] font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              Print & <br /><span className="text-brand-yellow">Merchandise.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-2xl">
              We turn your digital vision into high-quality physical reality. From custom apparel to premium packaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCT SHOWCASE */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-yellow/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative aspect-[4/5] bg-brand-dark rounded-[3rem] overflow-hidden">
               {/* Replace with your best print/merch photo */}
               <img 
                 src="https://images.unsplash.com/photo-1586075010633-24701bd6e8b4?q=80&w=1974&auto=format&fit=crop" 
                 alt="Premium Printing" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute bottom-10 left-10 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
                  <p className="text-xs font-black uppercase tracking-widest mb-2 text-brand-yellow">Featured Project</p>
                  <h4 className="text-2xl font-bold">Luxury Apparel Suite</h4>
               </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Production Capabilities</h2>
              <h3 className="text-4xl font-black text-brand-dark uppercase leading-none">The Touch of <br /> Quality.</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {products.map((item, i) => (
                <div key={i} className="group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-brand-dark/5 flex items-center justify-center mb-4 group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h4 className="font-black text-brand-dark uppercase text-sm mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 bg-brand-yellow/10 rounded-3xl border border-brand-yellow/20">
               <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="text-brand-dark" size={20} />
                  <span className="font-black uppercase text-xs tracking-widest">Global Sourcing</span>
               </div>
               <p className="font-medium text-brand-dark/70">
                 We partner with the best vendors to ensure your merchandise isn't just designed well, but manufactured to the highest standards.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA BLOCK */}
      <section className="pb-32 container mx-auto px-6">
        <div className="bg-brand-blue p-12 md:p-20 rounded-[4rem] text-white text-center relative overflow-hidden">
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Ready to see your brand <br /> in the real world?</h2>
              <button 
                onClick={() => {
                  navigate('/');
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="px-12 py-6 bg-brand-yellow text-brand-dark rounded-full font-black uppercase tracking-widest hover:bg-white transition-all shadow-xl"
              >
                Start Production
              </button>
           </div>
           {/* Decorative background element */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 rounded-full blur-3xl scale-150" />
        </div>
      </section>
    </div>
  );
};

export default PrintMerchandise;