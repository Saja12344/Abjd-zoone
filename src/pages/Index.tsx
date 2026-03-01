import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import GallerySection from "@/components/GallerySection";
import NumbersSection from "@/components/NumbersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <GallerySection />
      <NumbersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};



export default Index;
