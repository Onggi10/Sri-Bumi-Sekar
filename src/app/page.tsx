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
    <Box>
      <HeroSection />
      <AboutSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
