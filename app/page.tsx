import { Hero } from "@/components/Hero";
import { MapSection } from "@/components/MapSection";
import { PromiseSummary } from "@/components/PromiseSummary";
import { ProposalCta } from "@/components/ProposalCta";
import { RecentActivities } from "@/components/RecentActivities";
import { SocialLinks } from "@/components/SocialLinks";
import { ThanksPopup } from "@/components/ThanksPopup";
import { ThanksMessage } from "@/components/ThanksMessage";

export default function Home() {
  return (
    <main>
      <Hero />
      <ThanksPopup />
      <ThanksMessage />
      <PromiseSummary />
      <RecentActivities />
      <MapSection />
      <ProposalCta />
      <SocialLinks />
    </main>
  );
}
