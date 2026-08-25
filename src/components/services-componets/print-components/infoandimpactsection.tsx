// import { motion } from "framer-motion";
// import { 
//   FileText, Package, CheckCircle, Smartphone, 
//   Handshake, Megaphone, Target, Users, Star 
// } from "lucide-react";

// const InfoAndImpactSections = () => {
//   const introCards = [
//     {
//       icon: FileText,
//       title: "Print Makes It Real",
//       desc: "Tangible, credible and memorable brand experiences.",
//       // Soft ambient blue layout field
//       bgClass: "bg-gradient-to-br from-brand-blue/[0.04] to-brand-blue/[0.09] border-brand-blue/15 hover:border-brand-blue/40",
//       iconContainer: "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
//     },
//     {
//       icon: Package,
//       title: "Merchandise Builds Connections",
//       desc: "Useful products that keep your brand in everyday life.",
//       // Premium vibrant gold/yellow block
//       bgClass: "bg-gradient-to-br from-brand-yellow/[0.08] to-brand-yellow/[0.15] border-brand-yellow/30 hover:border-brand-yellow/60",
//       iconContainer: "bg-brand-dark text-brand-yellow shadow-md"
//     },
//     {
//       icon: CheckCircle,
//       title: "Brand That Stays",
//       desc: "Consistency across touchpoints creates strong recognition.",
//       bgClass: "bg-gradient-to-br from-brand-blue/[0.04] to-brand-blue/[0.09] border-brand-blue/15 hover:border-brand-blue/40",
//       iconContainer: "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
//     },
//     {
//       icon: Smartphone,
//       title: "Beyond Digital",
//       desc: "Physical touchpoints cut through the noise and leave an impact.",
//       bgClass: "bg-gradient-to-br from-brand-yellow/[0.08] to-brand-yellow/[0.15] border-brand-yellow/30 hover:border-brand-yellow/60",
//       iconContainer: "bg-brand-dark text-brand-yellow shadow-md"
//     }
//   ];

//   const impactCards = [
//     {
//       icon: Handshake,
//       title: "Builds Credibility",
//       desc: "A well-designed print instantly communicates professionalism and trust.",
//       // Vibrant brand yellow solid background style
//       bgClass: "bg-brand-yellow border-brand-yellow/20 text-brand-dark text-left shadow-sm hover:shadow-xl",
//       iconStyle: "text-brand-dark bg-white",
//       descColor: "text-brand-dark/70"
//     },
//     {
//       icon: Megaphone,
//       title: "Extends Your Reach",
//       desc: "Branded merchandise travels with your audience, putting your brand everywhere.",
//       // Premium brand blue solid background style
//       bgClass: "bg-brand-blue border-brand-blue/20 text-white text-left shadow-sm hover:shadow-xl",
//       iconStyle: "text-brand-yellow bg-[#0d1e3d]",
//       descColor: "text-white/70"
//     },
//     {
//       icon: Target,
//       title: "Strengthens Identity",
//       desc: "Consistent print materials reinforce who you are across every touchpoint.",
//       // Crisp premium off-white solid style
//       bgClass: "bg-gray-50 border-gray-200 text-brand-dark text-left shadow-sm hover:shadow-xl",
//       iconStyle: "text-brand-blue bg-white border border-gray-100",
//       descColor: "text-muted-foreground"
//     },
//     {
//       icon: Users,
//       title: "Real-World Engagement",
//       desc: "At events, meetings and retail spaces, print becomes your silent salesperson.",
//       bgClass: "bg-brand-yellow border-brand-yellow/20 text-brand-dark text-left shadow-sm hover:shadow-xl",
//       iconStyle: "text-brand-dark bg-white",
//       descColor: "text-brand-dark/70"
//     },
//     {
//       icon: Star,
//       title: "Lasting Impressions",
//       desc: "People remember what they can hold, feel and keep.",
//       bgClass: "bg-brand-blue border-brand-blue/20 text-white text-left shadow-sm hover:shadow-xl",
//       iconStyle: "text-brand-yellow bg-[#0d1e3d]",
//       descColor: "text-white/70"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12 }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { type: "spring", stiffness: 70, damping: 16 } 
//     }
//   };

//   return (
//     <div className="w-full bg-white text-brand-dark py-24 md:py-36 space-y-36 overflow-hidden">
      
//       {/* --- SUB-SECTION 1: YOUR BRAND IN THE REAL WORLD --- */}
//       <section className="container mx-auto px-6 max-w-7xl">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Text Block */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="lg:col-span-5 text-left space-y-6"
//           >
//             <div className="inline-flex items-center gap-2">
//               <span className="w-6 h-0.5 bg-brand-blue animate-pulse" />
//               <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">Physical Sphere</span>
//             </div>
//             <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-brand-dark">
//               Your Brand in the <br /><span className="text-brand-blue">Real World</span>
//             </h2>
//             <div className="space-y-4 text-sm md:text-base text-muted-foreground font-medium leading-relaxed pt-2">
//               <p>
//                 Print is the physical expression of your brand. It's what people see, touch and remember – from business cards and brochures to packaging and banners.
//               </p>
//               <p>
//                 Merchandise is your brand in motion – products that your customers, employees and partners use and carry every day.
//               </p>
//               <p className="text-brand-dark font-bold border-l-4 border-brand-yellow pl-4 italic bg-gray-50/50 py-3 rounded-r-xl">
//                 Together, print and merchandise create a lasting brand presence that goes beyond screens and stays with people long after the moment has passed.
//               </p>
//             </div>
//           </motion.div>

//           {/* Right Tinted Cards Grid */}
//           <motion.div 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
//           >
//             {introCards.map((card, i) => (
//               <motion.div 
//                 key={i} 
//                 variants={cardVariants}
//                 whileHover={{ 
//                   y: -8, 
//                   scale: 1.02,
//                   boxShadow: "0 25px 50px -20px rgba(12, 16, 26, 0.08)"
//                 }}
//                 className={`p-8 border rounded-2xl flex flex-col items-start text-left space-y-6 transition-all duration-300 relative overflow-hidden group ${card.bgClass}`}
//               >
//                 <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${card.iconContainer}`}>
//                   <card.icon size={20} className="stroke-[2]" />
//                 </div>
                
//                 <div className="space-y-2 relative z-10">
//                   <h4 className="text-sm font-black uppercase tracking-tight text-brand-dark">
//                     {card.title}
//                   </h4>
//                   <p className="text-xs text-muted-foreground font-medium leading-relaxed">
//                     {card.desc}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//         </div>
//       </section>

//       {/* --- SECTION 2: PRINT & MERCHANDISE THAT DRIVE REAL IMPACT --- */}
//       <section className="container mx-auto px-6 max-w-7xl">
//         <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
//           <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-[0.3em] block">
//             WHY DOES YOUR BUSINESS NEED IT?
//           </span>
//           <h3 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
//             Print & Merchandise That Drive <span className="text-brand-blue">Real Impact</span>
//           </h3>
//           <div className="w-12 h-0.5 bg-brand-yellow mx-auto mt-4" />
//         </div>

//         {/* 5-Column Dynamic Brand-Colored Card Deck */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
//         >
//           {impactCards.map((card, i) => (
//             <motion.div 
//               key={i} 
//               variants={cardVariants}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.03
//               }}
//               className={`p-6 border rounded-2xl flex flex-col items-start justify-between space-y-6 transition-all duration-350 group ${card.bgClass}`}
//             >
//               {/* Floating Monogram Style Icon Block */}
//               <div className={`w-14 h-14 rounded-2xl flex items-center justify-center relative transition-transform duration-500 group-hover:scale-110 shadow-sm ${card.iconStyle}`}>
//                 <card.icon size={22} className="stroke-[2]" />
                
//                 {/* Micro target indicator from mockup */}
//                 <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-brand-yellow border-2 border-white shadow-sm z-20" />
//               </div>
              
//               <div className="space-y-2 flex-grow flex flex-col justify-start w-full">
//                 <h4 className="text-xs font-black uppercase tracking-tight leading-snug min-h-[40px] flex items-center justify-start">
//                   {card.title}
//                 </h4>
//                 <p className={`text-[11px] font-medium leading-relaxed text-left ${card.descColor}`}>
//                   {card.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//     </div>
//   );
// };

// export default InfoAndImpactSections;