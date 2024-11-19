import HeroSection from "@/Components/Home/HeroSection";
import SupportSection from "@/Components/Home/SupportSection";

export default function Home() {
  return (
    <>
      <main>
        <div>
          <div>
            <HeroSection />
          </div>
        </div>
        <div>
          <SupportSection />
        </div>
      </main>
    </>
  );
}
