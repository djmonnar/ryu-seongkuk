import { Hero } from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <MapSection />
    </main>
  );
}
