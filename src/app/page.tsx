import Hero from '@/components/Hero';
import ShoppableUgcSlider from '@/components/ShoppableUgcSlider';
import ProjectGrid from '@/components/ProjectGrid';
import ServicesAndPricingSection from '@/components/ServicesAndPricingSection';
import CertificatesSection from '@/components/CertificatesSection';
import AboutSection from '@/components/AboutSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ShoppableUgcSlider />
      <ProjectGrid />
      <ServicesAndPricingSection />
      <CertificatesSection />
      <AboutSection />
      <ContactForm />
    </main>
  );
}

