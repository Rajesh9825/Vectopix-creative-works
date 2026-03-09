import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { portfolioCategories } from "@/data/portfolioCategories";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

const categories = ["All", "Graphic Design", "Motion Graphics", "Video Editing"];

// export { portfolioItems, categories };

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState("All");
  const navigate = useNavigate();



  const filtered =
  active === "All"
    ? Object.entries(portfolioCategories)
        .flatMap(([category, items]) =>
          items.map((item) => ({ ...item, category }))
        )
        .slice(0, 6) // show 6 works for ALL
    : portfolioCategories[active]
        ?.slice(0, 3) // show 3 categories
        .map((item) => ({
          ...item,
          category: active
        })) || [];

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Featured <span className="text-gradient-yellow">Portfolio</span>
          </h2>
        </motion.div>

        {/* Filter tabs — filter in-section */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
  <motion.div
    key={item.title}
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: i * 0.05 }}
    className="group cursor-pointer"
    onClick={() =>
      navigate(`/portfolio/${item.category}/${item.slug}`)
    }
  
              >
                <div className="rounded-2xl aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold mt-1 text-white">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View category page + Explore all */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {active !== "All" && (
            <button
              onClick={() => navigate(`/portfolio/${encodeURIComponent(active)}`)}
              className="px-8 py-4 rounded-xl border-2 border-brand-dark/20 text-foreground font-semibold hover:bg-muted transition-colors"
            >
              View All {active} →
            </button>
          )}
          <button
            onClick={() => navigate("/portfolio")}
            className="px-8 py-4 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:opacity-90 transition-opacity shadow-card"
          >
            Explore More Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
