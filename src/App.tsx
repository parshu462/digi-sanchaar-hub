
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from "@clerk/clerk-react";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import JoinUs from "./pages/JoinUs";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Clients from "./pages/Clients";
import Students from "./pages/Students";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CartProvider>
          <ClerkLoading>
            <div className="h-screen w-full flex items-center justify-center">
              <div className="animate-pulse text-2xl font-semibold">Loading...</div>
            </div>
          </ClerkLoading>
          
          <ClerkLoaded>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/join-us" element={<JoinUs />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/students" element={<Students />} />
              
              {/* Protected routes */}
              <Route 
                path="/dashboard" 
                element={
                  <>
                    <SignedIn>
                      <Dashboard />
                    </SignedIn>
                    <SignedOut>
                      <Home />
                    </SignedOut>
                  </>
                } 
              />
              <Route 
                path="/cart" 
                element={
                  <>
                    <SignedIn>
                      <Cart />
                    </SignedIn>
                    <SignedOut>
                      <Home />
                    </SignedOut>
                  </>
                } 
              />
              <Route 
                path="/checkout" 
                element={
                  <>
                    <SignedIn>
                      <Checkout />
                    </SignedIn>
                    <SignedOut>
                      <Home />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ClerkLoaded>
        </CartProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
