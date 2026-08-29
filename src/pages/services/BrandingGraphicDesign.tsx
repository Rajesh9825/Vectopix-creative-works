import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";

// Placeholder component imports — ready for section creation
import DesignHeroSection from "@/components/services-componets/Design-components/DesignHeroSection";
import DesignIntroIdentity from "@/components/services-componets/Design-components/DesignIntroIdentity";
import DesignServicesGrid from "@/components/services-componets/Design-components/DesignServicesGrid";
import DesignProcessTimeline from "@/components/services-componets/Design-components/DesignProcessTimeline";  
import DesignPortfolioShowcase from "@/components/services-componets/Design-components/DesignPortfolioShowcase";      
import DesignWhyChooseUs from "@/components/services-componets/Design-components/DesignWhyChooseUs";
import DesignTestimonials from "@/components/services-componets/Design-components/DesignTestimonials";
import DesignFAQ from "@/components/services-componets/Design-components/DesignFAQ";  
import DesignBottomCTA from "@/components/services-componets/Design-components/DesignBottomCTA";

const BrandingGraphicDesign = () => {
  // Shared state runner used to handle the premium dialog form popups uniformly across sections
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 🚀 HIGH-AUTHORITY LOGO & BRANDING TARGETED SEO META BLOCK */}
      <Helmet>
        <title>Vectopix Creative Works | Best Logo Design & Branding Agency in Pune</title>
        <meta 
          name="description" 
          content="Looking for a premier graphic designer or corporate logo design agency in Pune? Vectopix Creative Works provides custom brand identity kits, social media graphics, and commercial package design across Baner, Wakad, and Kothrud." 
        />
        <meta 
          name="keywords" 
          content="best logo designer in pune, top branding agency pune, commercial graphic design studio, corporate brand identity kits, package design company near me, affordable graphic designers" 
        />
        
        {/* Open Graph Tags for Premium Link Sharing Previews */}
        <meta property="og:title" content="Vectopix Creative Works | Premium Brand Identity & Logo Design Pune" />
        <meta property="og:description" content="Transforming corporate footprints with strategic graphic layouts, minimalist brand assets, and custom logo packaging." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- BRANDING SERVICE PAGE MAIN ARCHITECTURE --- */}
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        
        {/* Temporary layout guide placeholder to confirm page visibility in browser
        <div className="pt-32 pb-20 text-center container mx-auto px-6 max-w-xl space-y-4">
          <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest block">
            Category Pipeline Active
          </span>
          <h1 className="text-4xl font-black uppercase tracking-tighter text-brand-dark">
            Branding & <span className="text-brand-blue">Graphic Design</span> Studio
          </h1>
          <p className="text-xs text-muted-foreground font-medium leading-relaxed">
            Ready to design modern identities for startups, corporate entities, and local businesses across Pune. 
          </p>
        </div> */}

        {/* Section hooks ready for feature integration loops: */}
        <DesignHeroSection onQuoteClick={handleOpenModal} />
        <DesignIntroIdentity />
        <DesignServicesGrid />
        <DesignProcessTimeline /> 
        <DesignPortfolioShowcase />
        <DesignWhyChooseUs />
        <DesignTestimonials />
        <DesignFAQ />
        <DesignBottomCTA onQuoteClick={handleOpenModal} />  

      </div>
    </>
  );
};

export default BrandingGraphicDesign;