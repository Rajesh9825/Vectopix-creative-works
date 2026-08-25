// import { motion } from "framer-motion";
// import { 
//   PenTool, Compass, CheckCircle2, Tags, Zap, Users,
//   FileText, Label, Layers, Shirt, Box, Calendar 
// } from "lucide-react";

// const PrintServicesAndUsp = () => {
//   const features = [
//     {
//       icon: PenTool,
//       title: "We Design & We Print",
//       desc: "One team for your entire journey - from concept and creative design to final print output."
//     },
//     {
//       icon: Compass,
//       title: "Print-Ready Design Expertise",
//       desc: "We design with print in mind - correct colours, bleed, resolution and print specifications."
//     },
//     {
//       icon: CheckCircle2,
//       title: "Quality We Stand Behind",
//       desc: "Consistent materials and production processes to ensure exceptional print quality."
//     },
//     {
//       icon: Tags,
//       title: "Affordable Pricing & Bulk Offers",
//       desc: "Competitive pricing with special bulk discounts for orders of all sizes."
//     },
//     {
//       icon: Zap,
//       title: "Fast Turnaround",
//       desc: "Streamlined process to get your order designed, printed and delivered on time."
//     },
//     {
//       icon: Users,
//       title: "End-to-End Partnership",
//       desc: "A dedicated partner who understands your brand, your goals and your standards."
//     }
//   ];

//   const services = [
//     {
//       num: "01",
//       title: "Corporate & Marketing Materials",
//       tagline: "Make Every First Impression Count",
//       desc: "Business cards, letterheads, brochures, flyers, envelopes and more - designed and printed to represent your brand professionally.",
//       img: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       num: "02",
//       title: "Label & Sticker Printing",
//       tagline: "Small In Size. Big on Impact.",
//       desc: "Custom labels, stickers and packaging solutions that communicate quality and influence decisions in seconds.",
//       img: "https://images.unsplash.com/photo-1572945281864-70790db50ed8?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       num: "03",
//       title: "Large Format Printing",
//       tagline: "Go Big. Get Noticed.",
//       desc: "Banners, hoardings, standees, backdrops, wall graphics, vehicle wraps and more that demand attention.",
//       img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       num: "04",
//       title: "Customized Merchandise",
//       tagline: "Your Brand. Their Everyday.",
//       desc: "T-shirts, mugs, bottles, tote bags, caps, ID cards and more - practical items that keep your brand in circulation.",
//       img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       num: "05",
//       title: "Packaging Printing",
//       tagline: "Packaging That Protects & Promotes.",
//       desc: "Custom boxes, pouches and packaging solutions that elevate your product and strengthen brand value.",
//       img: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80"
//     },
//     {
//       num: "06",
//       title: "Event Printing",
//       tagline: "Make Your Events Unforgettable.",
//       desc: "Invites, tickets, passes, backdrops, event signage and promotional materials that create a lasting experience.",
//       img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80"
//     }
//   ];

//   return (
//     <div className="w-full bg-white text-brand-dark overflow-hidden">
      
//       {/* --- SECTION 1: WHY CHOOSE VECTOPIX (DARK BLUE AREA) --- */}
//       <section className="bg-[#0b132b] text-white py-24 border-b border-white/5 relative">
//         <div className="container mx-auto px-6 max-w-7xl">
          
//           {/* Header */}
//           <div className="text-center space-y-2 mb-20">
//             <span className="text-[10px] font-mono tracking-widest uppercase text-brand-blue font-bold">WHY CHOOSE VECTOPIX?</span>
//             <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
//               More Than a <span className="text-brand-yellow">Print Shop</span>
//             </h2>
//           </div>

//           {/* 6-Column Grid Layout */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6">
//             {features.map((feat, idx) => (
//               <div key={idx} className="flex flex-col items-center text-center space-y-4 relative px-2">
//                 {/* Thin vertical grid border helper line for desktop */}
//                 {idx > 0 && <div className="hidden lg:block absolute left-[-12px] top-4 h-24 w-px bg-white/10" />}
                
//                 {/* Premium Line Icon Frame */}
//                 <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 shadow-inner">
//                   <feat.icon size={24} className="stroke-[1.5]" />
//                 </div>
                
//                 <div className="space-y-2">
//                   <h4 className="text-xs md:text-sm font-black uppercase tracking-tight text-white leading-tight min-h-[36px] flex items-center justify-center">
//                     {feat.title}
//                   </h4>
//                   <p className="text-[11px] text-white/50 font-medium leading-relaxed tracking-tight">
//                     {feat.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* --- SECTION 2: 6-SERVICE ASYMMETRICAL COLUMN GRID --- */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 max-w-7xl">
          
//           {/* Section Subtitle Block */}
//           <div className="text-center space-y-2 mb-20">
//             <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-brand-blue font-bold block">
//               WHY PRINT & MERCHANDISE SERVICES
//             </span>
//             <div className="w-8 h-0.5 bg-brand-yellow mx-auto mt-2" />
//           </div>

//           {/* Clean 2-Row Layout With Floating Badges */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
//             {services.map((service, i) => (
//               <div 
//                 key={i} 
//                 className="bg-white rounded-[2rem] border border-gray-150 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500 text-left group"
//               >
//                 {/* Image Wrap Area */}
//                 <div className="h-52 w-full overflow-hidden bg-gray-100 relative border-b border-gray-150">
//                   <img 
//                     src={service.img} 
//                     alt={service.title} 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
//                   />
//                   {/* Distinct Number Ring Component from Image Layout */}
//                   <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-bold text-xs shadow-md z-10">
//                     {service.num}
//                   </div>
//                 </div>

//                 {/* Narrative Workspace */}
//                 <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
//                   <div className="space-y-2">
//                     <h3 className="text-xl font-black uppercase tracking-tight text-brand-dark leading-tight group-hover:text-brand-blue transition-colors duration-300">
//                       {service.title}
//                     </h3>
//                     <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider">
//                       {service.tagline}
//                     </h4>
//                     <p className="text-xs text-muted-foreground font-medium leading-relaxed pt-2 border-t border-gray-100 mt-4">
//                       {service.desc}
//                     </p>
//                   </div>

//                   {/* Clean Text CTA Trigger */}
//                   <div className="pt-2">
//                     <button className="text-[10px] font-black uppercase tracking-widest text-brand-blue group-hover:text-brand-dark transition-colors inline-flex items-center gap-1">
//                       LEARN MORE <span className="transform group-hover:translate-x-1 transition-transform">→</span>
//                     </button>
//                   </div>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default PrintServicesAndUsp;