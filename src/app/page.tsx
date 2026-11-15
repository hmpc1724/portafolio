import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CertificatesSection from '@/components/CertificatesSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import ShoppableUgcSlider from '@/components/ShoppableUgcSlider';
import ServicesAndPricingSection from '@/components/ServicesAndPricingSection';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <CertificatesSection />
      <WorkProcessSection />
      <ShoppableUgcSlider />
      <ServicesAndPricingSection />
      <ContactForm />
    </main>
  );
}

