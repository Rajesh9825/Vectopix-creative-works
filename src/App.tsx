import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import CategoryPortfolio from "./pages/CategoryPortfolio";
// import WorkDetail from "./pages/WorkDetail";
import WorkGallery from "./pages/WorkGallery";
import NotFound from "./pages/NotFound";
// import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* <CustomCursor /> */}
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
  <Route path="/" element={<Index />} />

  {/* Portfolio main page */}
  <Route path="/portfolio" element={<Portfolio />} />

  {/* Category page (Graphic Design / Motion Graphics / Video Editing) */}
  <Route path="/portfolio/:category" element={<CategoryPortfolio />} />

  {/* Subcategory work gallery */}
  <Route
    path="/portfolio/:category/:subcategory"
    element={<WorkGallery  />}
  />

  {/* Work detail viewer */}
  {/* <Route
    path="/portfolio/work/:workId"
    element={<WorkDetail />}
  /> */}

  {/* Not found */}
  <Route path="*" element={<NotFound />} />
</Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
