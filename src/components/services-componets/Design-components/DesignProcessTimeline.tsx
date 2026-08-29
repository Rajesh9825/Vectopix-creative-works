import { motion } from "framer-motion";

const DesignProcessTimeline = () => {
  const workflowSteps = [
    { number: "01", title: "Discover", desc: "Understand goals." },
    { number: "02", title: "Research", desc: "Analyze markets." },
    { number: "03", title: "Concept", desc: "Brainstorm ideas." },
    { number: "04", title: "Design", desc: "Craft visuals." },
    { number: "05", title: "Refine", desc: "Perfect details." },
    { number: "06", title: "Deliver", desc: "Final handoff." }
  ];

  return (
    <section id="design-process" className="w-full bg-white text-brand-dark py-12 md:py-24 border-t border-gray-100 selection:bg-brand-yellow selection:text-brand-dark">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        
        {/* --- SECTION LABEL HEADERS --- */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20 space-y-2">
          <span className="text-[10px] md:text-xs font-mono font-bold text-brand-blue tracking-[0.2em] uppercase block">
            OUR DESIGN PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-none text-brand-dark">
            From Concept to <span className="text-[#facc15] drop-shadow-sm">Creation</span>
          </h2>
        </div>

        {/* --- TIMELINE CONTAINER MATRIX --- */}
        <div className="relative w-full">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-8 left-16 right-16 h-[2px] bg-gray-200/80 z-0" />

          {/* Grid Layout - Optimized for smaller footprints */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 items-start relative z-10 w-full">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                
                {/* Stepper Bubble - Scaled down for mobile */}
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-brand-dark text-white font-mono font-bold text-sm md:text-lg flex items-center justify-center shadow-md relative transition-all duration-300 group-hover:bg-[#facc15] group-hover:text-black group-hover:scale-105">
                  {step.number}
                  <div className="absolute inset-[-4px] rounded-full border border-gray-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content - Compacted for mobile */}
                <div className="space-y-0.5 px-1">
                  <h3 className="text-sm md:text-xl font-black uppercase tracking-tight text-brand-dark group-hover:text-brand-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-medium leading-tight">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DesignProcessTimeline;