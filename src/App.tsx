import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ProjectDetail from "./components/ProjectDetail";
import NotFound from "./pages/NotFound";
import CookieConsent from "./components/CookieConsent";
import VolnaMista from "./pages/VolnaMista";
import Informace from "./pages/Informace";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/realizace" element={<Projects />} />
          <Route path="/realizace/:id" element={<ProjectDetail />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/o-spolecnosti" element={<About />} />
          <Route path="/aktuality" element={<Index />} />
          <Route path="/volna-mista" element={<VolnaMista />} />
          <Route path="/kontakt" element={<Index />} />
          <Route path="/informace" element={<Informace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
