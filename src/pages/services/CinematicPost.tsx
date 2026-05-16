import { motion } from "framer-motion";
import { ArrowLeft, Clapperboard, Film, Languages, Sparkles, CheckCircle2, MonitorPlay } from "lucide-react";
import { useNavigate } from "react-router-dom";

// 1. UPDATED DATA WITH YOUTUBE EMBED LOGIC
// Note: Use /embed/VIDEO_ID format for background logic
const POSTER_DATA = {
  // Background: Atmospheric loop (Muted)
  bgVideoId: "XW1RkKiRnsg", 
  // Center: Your main showreel (Autoplay + Landscape)
  centerVideoId: "F5aKkOZtutg", 
  inner: [
    "/images/movie1.jpg", "/images/movie2.jpg", "/images/movie3.jpg",
    "/images/movie4.jpg", "/images/movie5.jpg", "/images/movie6.jpg",
  ],
  outer: [
    "/images/work1.jpg", "/images/work2.jpg", "/images/work3.jpg",
    "/images/work4.jpg", "/images/work5.jpg", "/images/work6.jpg",
    "/images/work7.jpg", "/images/work8.jpg", "/images/work9.jpg",
    "/images/work10.jpg", "/images/work11.jpg", "/images/work12.jpg",
  ]
};

const CinematicPost = () => {
  const navigate = useNavigate();

  const capabilities = [
    { title: "Movie Post-Production", icon: Clapperboard, desc: "Full-scale editorial management for independent features and web series." },
    { title: "Cinematic Color Grading", icon: Film, desc: "Creating the 'Look' of your story through advanced color science and mood-setting." },
    { title: "Title Sequence Design", icon: MonitorPlay, desc: "Bespoke opening and closing credits that give your project a professional edge." },
    { title: "Audio & Subtitling", icon: Languages, desc: "Precise subtitle spotting and audio mixing for global distribution readiness." }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-yellow selection:text-brand-dark overflow-hidden">
      
      {/* 1. CINEMA HERO SECTION */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.button 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => navigate(-1)} 
            className="flex items-center gap-3 text-white/30 hover:text-brand-yellow font-black uppercase tracking-widest mb-16 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> 
            Back to Studio
          </motion.button>

          <div className="max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-blue/20 border border-brand-blue/30 rounded-full text-brand-blue text-[10px] font-black uppercase tracking-[0.4em] mb-8">
                <Sparkles size={14} /> The Final Polish
              </span>
              <h1 className="text-6xl md:text-[8rem] font-black mb-8 leading-[0.85] uppercase tracking-tighter">
                Cinematic <br /> <span className="text-brand-yellow">Finishing.</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎬 2. THE ORBITAL GALLERY SECTION (YouTube Background Fix) */}
      <section className="relative py-48 flex flex-col items-center justify-center overflow-hidden">
        
        {/* --- YOUTUBE BACKGROUND LAYER --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 w-[100%] h-[100%] scale-150">
              <iframe
                src={`https://www.youtube.com/embed/${POSTER_DATA.bgVideoId}?autoplay=1&mute=1&loop=1&playlist=${POSTER_DATA.bgVideoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3`}
                className="w-full h-full border-none pointer-events-none opacity-20"
                allow="autoplay; encrypted-media"
                title="Background Atmosphere"
              />
            </div>
            {/* Gradient Mask to prevent seeing video borders */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark" />
            <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="text-center mb-20 relative z-20">
          <h2 className="text-brand-blue font-black uppercase tracking-[0.5em] text-xs mb-4 text-center">Selected Works</h2>
          <h3 className="text-5xl font-black uppercase italic tracking-tighter text-center">The Poster <span className="text-brand-yellow text-outline">Archives.</span></h3>
        </div>

        {/* ORBITAL CONTAINER */}
        <div className="relative w-full aspect-square max-w-[900px] flex items-center justify-center pointer-events-none md:scale-100 scale-50 z-10">
          
          {/* OUTER CIRCLE */}
          <div className="absolute w-[850px] h-[850px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]">
            {POSTER_DATA.outer.map((imgUrl, i) => (
              <div 
                key={i}
                className="absolute w-24 h-36 bg-white/10 rounded-lg overflow-hidden border border-white/10 pointer-events-auto hover:scale-125 transition-transform shadow-2xl"
                style={{
                  top: '50%', left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * (360 / 12)}deg) translateY(-380px) rotate(-${i * (360 / 12)}deg)`
                }}
              >
                <img src={imgUrl} alt="Archive" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* INNER CIRCLE */}
          <div className="absolute w-[550px] h-[550px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]">
            {POSTER_DATA.inner.map((imgUrl, i) => (
              <div 
                key={i}
                className="absolute w-28 h-40 bg-white/10 rounded-xl overflow-hidden border border-white/20 pointer-events-auto hover:scale-125 transition-transform shadow-2xl"
                style={{
                  top: '50%', left: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * (360 / 6)}deg) translateY(-240px) rotate(-${i * (360 / 6)}deg)`
                }}
              >
                <img src={imgUrl} alt="Archive" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          {/* --- CENTER LANDSCAPE YOUTUBE FEATURE --- */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="relative z-30 w-[400px] aspect-video bg-black rounded-2xl p-1 shadow-[0_0_50px_rgba(255,214,0,0.3)] pointer-events-auto group overflow-hidden border border-brand-yellow/30"
          >
             <iframe
                src={`https://www.youtube.com/embed/${POSTER_DATA.centerVideoId}?autoplay=1&mute=1&loop=1&playlist=${POSTER_DATA.centerVideoId}&controls=1`}
                className="w-full h-full border-none rounded-xl"
                allow="autoplay; encrypted-media"
                title="Center Masterpiece"
              />
          </motion.div>

          {/* Background Decorative Rings */}
          <div className="absolute inset-0 rounded-full border-[60px] border-brand-blue opacity-[0.02] blur-3xl" />
        </div>
      </section>

      {/* 3. STUDIO CAPABILITIES SECTION... (Keep as is) */}
      <section className="py-32 container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-32">
          <div>
            <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Post-Production Suite</h2>
            <h3 className="text-5xl font-black uppercase leading-none mb-8">The Craft of <br /><span className="text-brand-yellow">The Edit.</span></h3>
            <p className="text-xl text-white/50 leading-relaxed mb-10">
              We specialize in high-end technical finishing that separates amateur videos from cinematic productions.
            </p>
          </div>
          {/* ... Rest of capabilities code ... */}
          <div className="grid grid-cols-1 gap-4">
            {capabilities.map((cap, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-brand-yellow/50 transition-all group">
                <div className="flex gap-6 items-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-dark border border-white/10 flex items-center justify-center group-hover:bg-brand-yellow transition-all">
                        <cap.icon className="text-white group-hover:text-brand-dark" size={28} />
                    </div>
                    <div>
                        <h4 className="text-lg font-black uppercase tracking-tight">{cap.title}</h4>
                        <p className="text-sm text-white/40 leading-relaxed">{cap.desc}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CinematicPost;