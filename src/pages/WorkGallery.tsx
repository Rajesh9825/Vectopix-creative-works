import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioStructure } from "@/data/portfolioData";

const formatTitle = (slug: string) =>
  slug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");


const WorkGallery = () => {

  const { category, subcategory } = useParams();
  const navigate = useNavigate();
  
  const data =
    portfolioStructure[
      category as keyof typeof portfolioStructure
    ]?.[subcategory as any];
  

  // const data =
  // portfolioStructure[decodedCategory as keyof typeof portfolioStructure]?.[
  //   decodedSubcategory as any
  // ];

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground text-lg">No works found.</p>
      </div>
    );
  }

  const filters = ["All", ...(data.filters || [])];

  const [active, setActive] = useState("All");

  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const works =
    active === "All"
      ? data.works
      : data.works.filter((w: any) => w.filter === active);

  /* KEYBOARD NAVIGATION */

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {

      if (viewerIndex === null) return;

      if (e.key === "Escape") setViewerIndex(null);

      if (e.key === "ArrowRight") {
        setViewerIndex(
          viewerIndex === works.length - 1 ? 0 : viewerIndex + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setViewerIndex(
          viewerIndex === 0 ? works.length - 1 : viewerIndex - 1
        );
      }

    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);

  }, [viewerIndex, works.length]);

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      {/* HERO SECTION */}

      <div className="bg-gradient-hero py-20 pt-28">
        <div className="container mx-auto px-4 md:px-8">

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-brand-dark/70 hover:text-brand-dark mb-6 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <h1 className="text-4xl md:text-6xl font-bold text-brand-dark">
            {formatTitle(subcategory || "")}
          </h1>

          <p className="mt-4 text-brand-dark/70 max-w-xl text-lg">
            Explore our {formatTitle(subcategory || "").toLowerCase()} creative projects crafted for modern brands.
          </p>

        </div>
      </div>

      {/* FILTERS + GRID */}

      <div className="container mx-auto px-6 py-16">

        {/* FILTERS */}

        {data.filters && data.works?.length > 0 && (

          <div className="flex flex-wrap gap-3 mb-10">

            {filters.map((f: any) => (

              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f}
              </button>

            ))}

          </div>

        )}

        {/* WORK GRID */}

        <div className="grid md:grid-cols-3 gap-8">

{works.length === 0 ? (

  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="col-span-full flex items-center justify-center min-h-[320px]"
  >

    <div className="relative overflow-hidden rounded-3xl p-16 text-center bg-gradient-to-br from-muted to-muted/50 border border-border shadow-xl">

      {/* Yellow glow */}
      {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,200,0,0.45),transparent_60%)] animate-pulse" /> */}

      {/* Blue glow */}
      {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.35),transparent_60%)] animate-pulse" /> */}

      <h2 className="text-3xl font-bold text-foreground mb-4">
        🚀 Coming Soon
      </h2>

      <p className="text-muted-foreground max-w-md mx-auto text-lg">
        We're currently crafting amazing{" "}
        <span className="font-semibold">
          {active !== "All" ? active : subcategory}
        </span>{" "}
        projects. Check back soon!
      </p>

      <div className="mt-6 h-[3px] w-24 mx-auto rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400 animate-pulse" />

      <div className="mt-4 text-sm text-muted-foreground">
        Stay tuned ✨
      </div>

    </div>

  </motion.div>

) : (

  works.map((w:any, index:number) => (

      <div
        key={w.id}
        className="rounded-xl overflow-hidden group cursor-pointer"
      >

        {w.type === "image" && (
          <img
            src={w.src}
            alt=""
            onClick={() => setViewerIndex(index)}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {w.type === "video" && w.source === "youtube" && (
          <iframe
            className="w-full aspect-video rounded-xl"
            src={w.url}
            allowFullScreen
          />
        )}

        {w.type === "video" && w.source === "drive" && (
          <iframe
            className="w-full aspect-video rounded-xl"
            src={w.url}
          />
        )}

        {w.type === "video" && w.source === "local" && (
          <video controls className="w-full rounded-xl">
            <source src={w.url} type="video/mp4" />
          </video>
        )}

      </div>

    ))

  )}

</div>

      </div>

      {/* FULLSCREEN VIEWER */}

      {viewerIndex !== null && (

        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* CLOSE */}

          <button
            onClick={() => setViewerIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* PREVIOUS */}

          <button
            onClick={() =>
              setViewerIndex(
                viewerIndex === 0 ? works.length - 1 : viewerIndex - 1
              )
            }
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* IMAGE */}

          {works[viewerIndex].type === "image" && (

            <img
              src={works[viewerIndex].src}
              className="max-h-[90vh] max-w-[90vw] rounded-xl animate-[zoomIn_.35s_ease]"
            />

          )}

          {/* VIDEO */}

          {works[viewerIndex].type === "video" && (

            <iframe
              className="w-[90vw] max-w-5xl aspect-video rounded-xl"
              src={works[viewerIndex].url}
              title="Video Viewer"
              allowFullScreen
            />

          )}

          {/* NEXT */}

          <button
            onClick={() =>
              setViewerIndex(
                viewerIndex === works.length - 1 ? 0 : viewerIndex + 1
              )
            }
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

        </div>

      )}

      <Footer />

    </div>
  );
};

export default WorkGallery;