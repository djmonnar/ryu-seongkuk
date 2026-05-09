import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { District } from "@/components/District";
import { Hero } from "@/components/Hero";
import { Policies } from "@/components/Policies";
import { Profile } from "@/components/Profile";

export default function Home() {
  return (
    <main>
      <Hero />
      <Profile />
      <Policies />
      <District />
      <Activities />
      <Contact />
    </main>
  );
}
