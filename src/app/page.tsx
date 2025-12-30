import AboutSection from '@/components/AboutSection';
import AssessmentBanner from '@/components/AssessmentBanner';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 relative">
      <Navbar />
      <Hero />
      <div className="h-20 lg:h-32 bg-transparent"></div> {/* Spacer for overlapping cards */}
      <AboutSection />
      <AssessmentBanner />
      <Footer />
    </main>
  );
}
