import HeroSection from "@/components/HeroSection";
import WhyRecruitSection from "@/components/WhyRecruitSection";
import PlacementHighlights from "@/components/PlacementHighlights";
import RecruitersMarquee from "@/components/RecruitersMarquee";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="-mt-20">
      <HeroSection />
      <WhyRecruitSection />
      <PlacementHighlights />
      <RecruitersMarquee />
      <CTASection />
    </div>
  );
}
