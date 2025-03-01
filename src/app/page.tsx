"use client";
import { Box } from "@mui/material";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturedProducts from "./components/FeaturedProducts";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <Box component="main" sx={{ py: 4, mx: "auto" }}>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
