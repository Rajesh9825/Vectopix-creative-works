import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Pages
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import CategoryPortfolio from "./pages/CategoryPortfolio";
import WorkGallery from "./pages/WorkGallery";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

// Service Pages
// import BrandingGraphicDesign from "./pages/services/BrandingGraphicDesign.tsx";
// import MotionAnimation from "./pages/services/MotionAnimation.tsx";
// import CinematicPost from "./pages/services/CinematicPost.tsx";
// import CommercialVideo from "./pages/services/CommercialVideo.tsx";
// import PrintMerchandise from "./pages/services/PrintMerchandise.tsx";
// import DigitalAdvertising from "./pages/services/DigitalMarketingStrategy.tsx";

// Whatsapp FAB
import WhatsAppFAB from "./components/WhatsAppFAB.tsx";
import VectoAI from "./components/VectoAI";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ScrollToTop ensures the page starts at 0,0 on route change */}
        <ScrollToTop />
        
        {/* Navbar is now GLOBAL - it shows on every page */}
        <Navbar />

        {/* Main content area */}
        <main className="min-h-screen">
          <Routes>
            
            <Route path="/" element={<Index />} />
            
            {/* Service pages */}
            {/* <Route path="/services/branding-graphic-design" element={<BrandingGraphicDesign />} />
            <Route path="/services/print-merchandise-production" element={<PrintMerchandise />} />
            <Route path="/services/digital-marketing-strategy" element={<DigitalAdvertising />} />
            <Route path="/services/motion-graphics-animation" element={<MotionAnimation />} />
            <Route path="/services/cinematic-post-production" element={<CinematicPost />} />
            <Route path="/services/commercial-video-editing" element={<CommercialVideo />} /> */}

            {/* Portfolio routes */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            {/* <Route path="/portfolio/:category" element={<CategoryPortfolio />} /> */}
            {/* <Route path="/portfolio/:category/:subcategory" element={<WorkGallery />} /> */}

            {/* Blog route */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            {/* Not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* WhatsApp FAB is now GLOBAL - it shows on every page */}
        <WhatsAppFAB />
        {/* VectoAI is now GLOBAL - it shows on every page */}
        {/* <VectoAI /> */}
        
        {/* Footer is now GLOBAL - it shows on every page */}
        <Footer />
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;