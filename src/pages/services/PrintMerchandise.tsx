import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PrintHeroSection from "@/components/services-componets/print-components/PrintHeroSection";
import PrintCategories from "@/components/services-componets/print-components/PrintCategories";
import PrintPortfolio from "@/components/services-componets/print-components/PrintPortfolio";
// import InfoAndImpactSections from "@/components/services-componets/print-components/infoandimpactsection";
// import PrintServicesAndUsp from "@/components/services-componets/print-components/printserviceandusp";
import PrintBottomSections from "@/components/services-componets/print-components/printbottomsection";
import PrintFAQ from "@/components/services-componets/print-components/PrintFAQ";
// import ContactSection from "@/components/ContactSection";
// import Footer from "@/components/Footer";

// Renamed from Index to PrintMerchandise to avoid route/file confusion
const PrintMerchandise = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 🚀 HIGH-AUTHORITY TARGETED META BLOCK FOR THIS SPECIFIC SERVICE PAGE */}
      <Helmet>
        {/* Core Title & Meta */}
        <title>Vectopix Creative Works | Best Printing & Merchandise Service in Pune</title>
        <meta 
          name="description" 
          content="Looking for the best printing and merchandise service in Pune? Vectopix Creative Works provides top-quality corporate swag, custom t-shirts, packaging, and business stationery across Baner, Wakad, Kharadi, and Katraj with fast turnaround." 
        />
        <meta 
          name="keywords" 
          content="best printing service in pune, custom corporate merchandise, corporate gifting pune, custom t-shirt printing pune, packaging design pune, printing shop near me" 
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://vectopix.in/services/print-merchandise-production" />

        {/* Open Graph Tags for Premium Link Sharing Previews */}
        <meta property="og:title" content="Vectopix Creative Works | Best Printing & Merchandise Service in Pune" />
        <meta property="og:description" content="Premium corporate gifting, custom merchandise kits, and printing solutions with quick doorstep delivery across India." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://vectopix.in/services/print-merchandise-production" />
        <meta property="og:image" content="https://vectopix.in/logo.png" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vectopix Creative Works | Best Printing & Merchandise Service in Pune" />
        <meta name="twitter:description" content="Premium corporate gifting, custom merchandise kits, and printing solutions with quick doorstep delivery across India." />
        <meta name="twitter:image" content="https://vectopix.in/logo.png" />
      </Helmet>

      {/* --- SERVICE PAGE LAYOUT --- */}
      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <PrintHeroSection onQuoteClick={handleOpenModal} />
        <PrintCategories />
        {/* <InfoAndImpactSections /> */}
        {/* <PrintServicesAndUsp /> */}
        <PrintPortfolio />
        <PrintBottomSections onQuoteClick={handleOpenModal} />
        <PrintFAQ />
        {/* <ContactSection /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PrintMerchandise;