import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { StatsSection } from '../components/StatsSection';
import { PhotoGallery } from '../components/PhotoGallery';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PhotoGallery />
      <CTASection />
    </>
  );
}
