import { Hero } from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { Profile } from "@/components/Profile";
import { VideoPopup } from "@/components/VideoPopup";

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <MapSection />
      <VideoPopup />
    </main>
  );
}
