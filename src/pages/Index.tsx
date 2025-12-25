import HeroSection from '@/components/HeroSection';
import ReportContentSection from '@/components/ReportContentSection';
import ContactFormSection from '@/components/ContactFormSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ReportContentSection />
      <ContactFormSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;
