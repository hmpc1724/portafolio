import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import CertificatesSection from '@/components/CertificatesSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import BentoValueSection from '@/components/BentoValueSection';
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
      <BentoValueSection />
      <ShoppableUgcSlider />
      <ServicesAndPricingSection />
      <ContactForm />
    </main>
  );
}

