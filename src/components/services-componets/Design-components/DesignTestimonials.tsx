import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const DesignTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "Nitin Vaidhya Productions", role: "Production House", content: "Vectopix Creative Works has been our trusted creative partner since 2021. From concept poster design and graphic design to title sequences, opening and closing credits, title animations, and subtitle spotting — they have handled it all across 16+ films with remarkable consistency and cinematic precision. Their deep understanding of film aesthetics and attention to detail makes every project feel elevated. They are an indispensable part of our production process.", rating: 5 },
    { id: 2, name: "Satish Gejage", role: "Actor & Producer", content: "Vectopix Creative Works has been an exceptional creative partner for my film projects. From striking poster designs and title sequences to endscrolls and motion graphics — their work reflects a true understanding of cinematic storytelling. The quality and creativity they bring to every frame is remarkable. We are still collaborating on more exciting projects together, and I look forward to every bit of it!", rating: 5 },
    { id: 3, name: "Pratik Audi", role: "Northern Imagin Pictures", content: "Having worked in post-production for years, I have high standards when it comes to creative work — and Vectopix Creative Works has never fallen short. I have collaborated with them on numerous projects including endscrolls, title sequences, and more. When I decided to launch Northern Imagin Pictures, there was no second thought about who would create our logo, logo animation, and showreel. They understood the vision behind my production house and delivered with precision and creativity. A team that truly knows the craft inside out.", rating: 5 },
    { id: 4, name: "Sneha", role: "Financial Adviser", content: "Vectopix Creative Works did an excellent job designing our social media ad creatives and visiting cards. The designs were sharp, professional, and perfectly suited for our financial brand. Their printing quality was equally impressive. A one-stop creative solution we highly recommend!", rating: 5 },
    { id: 5, name: "Ganesh Kurapati", role: "GK Creatives", content: "We started with just a logo, and soon discovered that Vectopix Creative Works offers so much more. From wedding and pre-wedding video editing to invitation card designs and motion invitation videos for our clients — they handle it all with exceptional quality and consistency. They are not just a service provider, they are a creative backbone we truly depend on.", rating: 5 },
    { id: 6, name: "Prathamesh Shelke", role: "Lightline Design Studio", content: "Vectopix Creative Works designed our logo, brochure, and company profile with exceptional attention to detail. The designs perfectly reflect the elegance our brand stands for. Every client who sees our profile is impressed — truly a creative partner you can trust.", rating: 5 },
    { id: 7, name: "Kaustubh", role: "KS Enterprise", content: "Vectopix Creative Works designed our logo and visiting cards beautifully. The designs are clean, professional, and perfectly represent our business. A great team to work with!", rating: 5 }
  ];

  const reviews = [
    {
      name: "Nitin Vaidhya Productions",
      role: "Production House",
      comment: "Vectopix Creative Works has been our trusted creative partner since 2021. From concept poster design and graphic design to title sequences, opening and closing credits, title animations, and subtitle spotting — they have handled it all across 16+ films with remarkable consistency and cinematic precision. Their deep understanding of film aesthetics and attention to detail makes every project feel elevated. They are an indispensable part of our production process.",
      rating: 5
    },
    {
      name: "Prathamesh Shelke",
      role: "Lightline Design Studio",
      comment: "Vectopix Creative Works designed our logo, brochure, and company profile with exceptional attention to detail. The designs perfectly reflect the elegance our brand stands for. Every client who sees our profile is impressed — truly a creative partner you can trust.",
      rating: 5
    },
    {
      name: "Pratik Audi",
      role: "Northern Imagin Pictures",
      comment: "Having worked in post-production for years, I have high standards when it comes to creative work — and Vectopix Creative Works has never fallen short. I have collaborated with them on numerous projects including endscrolls, title sequences, and more. When I decided to launch Northern Imagin Pictures, there was no second thought about who would create our logo, logo animation, and showreel. They understood the vision behind my production house and delivered with precision and creativity. A team that truly knows the craft inside out.",
      rating: 5
    },
    {
      name: "Satish Gejage",
      role: "Actor & Producer",
      comment: "Vectopix Creative Works has been an exceptional creative partner for my film projects. From striking poster designs and title sequences to endscrolls and motion graphics — their work reflects a true understanding of cinematic storytelling. The quality and creativity they bring to every frame is remarkable. We are still collaborating on more exciting projects together, and I look forward to every bit of it!",
      rating: 5
    },
    {
      name: "Ganesh Kurapati",
      role: "GK Creatives",
      comment: "We started with just a logo, and soon discovered that Vectopix Creative Works offers so much more. From wedding and pre-wedding video editing to invitation card designs and motion invitation videos for our clients — they handle it all with exceptional quality and consistency. They are not just a service provider, they are a creative backbone we truly depend on.",
      rating: 5
    },
    {
      name: "Kaustubh",
      role: "KS Enterprise",
      comment: "Vectopix Creative Works designed our logo and visiting cards beautifully. The designs are clean, professional, and perfectly represent our business. A great team to work with!",
      rating: 5
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section
      id="design-testimonials"
      className="relative bg-[#0b0b0b] py-6 md:py-12 overflow-hidden animate-container"
    >
      {/* Decorative Dots */}
      <div className="hidden sm:grid absolute right-12 top-10 grid-cols-4 gap-2 opacity-20">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-[#facc15]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-4 md:mb-6">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#facc15] font-bold">
            CLIENT LOVE
          </p>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-0.5 md:mt-1">
            What Our <span className="text-[#facc15]">Clients</span> Say
          </h2>
        </div>

        {/* Slider Frame Wrapper */}
        <div className="flex items-center justify-center gap-2 md:gap-6">

          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="w-9 h-9 md:w-11 md:h-12 rounded-xl border border-white/10 text-gray-400 hover:border-[#facc15] hover:text-[#facc15] transition shrink-0 flex items-center justify-center"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Card Component Container */}
          <div className="w-full max-w-5xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl md:rounded-2xl border border-white/10 bg-[#1b1b1b] p-4 md:p-6"
              >
                <div className="grid lg:grid-cols-12 gap-3 md:gap-6 items-start">

                  {/* Quote Accent Symbol */}
                  <div className="lg:col-span-1 leading-none">
                    <div className="text-[#facc15] text-3xl md:text-5xl font-black leading-none select-none">
                      “
                    </div>
                  </div>

                  {/* Review Content Copy */}
                  <div className="lg:col-span-8">
                    <p className="text-neutral-300 text-[11px] md:text-[14px] leading-relaxed md:leading-6 text-left">
                      {reviews[currentIndex].comment}
                    </p>
                  </div>

                  {/* Profile Metadata */}
                  <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-white/5 pt-3 lg:pt-0 lg:pl-5 text-left flex flex-col justify-center">
                    <h4 className="text-white text-xs md:text-[15px] font-bold uppercase tracking-tight truncate">
                      {reviews[currentIndex].name}
                    </h4>

                    <p className="text-neutral-500 text-[10px] md:text-xs mt-0.5 truncate">
                      {reviews[currentIndex].role}
                    </p>

                    <div className="flex gap-0.5 mt-1.5 md:mt-3">
                      {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={11}
                          className="fill-[#facc15] text-[#facc15]"
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="w-9 h-9 md:w-11 md:h-12 rounded-xl border border-white/10 text-gray-400 hover:border-[#facc15] hover:text-[#facc15] transition shrink-0 flex items-center justify-center"
          >
            <ChevronRight size={16} />
          </button>

        </div>

      </div>
    </section>
  );
};

export default DesignTestimonials;