'use client';
import InteractiveHeader from '@/app/components/InteractiveHeader';
import HeroSection from '@/app/components/HeroSection';
import ServicesSection from '@/app/components/ServicesSection';
import AdvantagesSection from '@/app/components/AdvantagesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';

export default function Page() {
  return (
    <main className="bg-background container mx-auto px-4 sm:px-6 md:px-8 py-8">
      <InteractiveHeader />
        <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
