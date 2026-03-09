import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioCategories } from "@/data/portfolioCategories";

const filters = ["All", "Graphic Design", "Motion Graphics", "Video Editing"];

const PortfolioPage = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? Object.entries(portfolioCategories).flatMap(([category, items]) =>
          items.map((item) => ({ ...item, category }))
        )
      : portfolioCategories[active]?.map((item) => ({
          ...item,
          category: active
        })) || [];

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      {/* Header */}
      <div className="bg-gradient-hero py-20 pt-28">
        <div className="container mx-auto px-4 md:px-8">

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark">
            Our <span className="text-secondary">Portfolio</span>
          </h1>

          <p className="mt-4 text-brand-dark/70 max-w-xl text-lg">
            Explore our creative work across design, motion graphics, and video editing.
          </p>

        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 md:px-8 py-10">

        <div className="flex flex-wrap gap-3 mb-10">

          {filters.map((cat) => (

            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
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
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((item, i) => (

            <motion.div
              key={item.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold mt-1 text-white">
                    {item.title}
                  </h3>

                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">

                  <ArrowRight className="opacity-0 group-hover:opacity-100 text-white w-8 h-8 transition" />

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

      <Footer />

    </div>
  );
};

export default PortfolioPage;