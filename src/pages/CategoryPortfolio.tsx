import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioCategories } from "@/data/portfolioCategories";

const CategoryPortfolio = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const decodedCategory = category ? decodeURIComponent(category) : "";

  const categories =
    portfolioCategories[
      decodedCategory as keyof typeof portfolioCategories
    ] || [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-hero py-20 pt-28">
        <div className="container mx-auto px-4 md:px-8">

          <button
            onClick={() => navigate("/portfolio")}
            className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark">
            {decodedCategory}
          </h1>

          <p className="mt-4 text-brand-dark/70 max-w-xl text-lg">
            Explore our {decodedCategory.toLowerCase()} categories and creative work.
          </p>

        </div>
      </div>

      {/* Subcategory Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16">

        {categories.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No categories found.
          </p>
        ) : (

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {categories.map((sub, i) => (

              <motion.div
                key={sub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
                onClick={() =>
                  navigate(
                    `/portfolio/${encodeURIComponent(decodedCategory)}/${encodeURIComponent(sub.title)}`
                  )
                }
              >

                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">

                  <img
                    src={sub.image}
                    alt={sub.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"/>

                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-white text-xl font-bold">
                      {sub.title}
                    </h3>
                  </div>

                </div>

              </motion.div>

            ))}

          </motion.div>

        )}

      </div>

      <Footer />
    </div>
  );
};

export default CategoryPortfolio;