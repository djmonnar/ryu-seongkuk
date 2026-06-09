import { Hero } from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { PromiseSummary } from "@/components/PromiseSummary";
import { ProposalCta } from "@/components/ProposalCta";
import { RecentActivities } from "@/components/RecentActivities";
import { SocialLinks } from "@/components/SocialLinks";
import { ThanksMessage } from "@/components/ThanksMessage";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThanksMessage />
      <PromiseSummary />
      <RecentActivities />
      <MapSection />
      <ProposalCta />
      <SocialLinks />
    </main>
  );
}
