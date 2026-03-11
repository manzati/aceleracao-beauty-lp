import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-onyx text-ice flex flex-col overflow-hidden selection:bg-gold selection:text-onyx">
      <HeroSection />
      <ContentSection />
      <AuthoritySection />
      <TestimonialsSection />

      <footer className="w-full bg-onyx border-t border-ice/10 py-8 lg:py-12 flex items-center justify-center">
        <p className="font-sans text-xs uppercase tracking-widest text-ice/40 text-center px-4">
          Todos os direitos reservados a Jhon Guttyerre e grupo B4 Assessoria.
        </p>
      </footer>
    </main>
  );
}
