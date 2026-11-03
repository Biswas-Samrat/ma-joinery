import type { Metadata } from "next";
import { FeaturedTransformation } from "@/app/(home)/components/FeaturedTransformation";
import { site } from "@/data/site";
import { Hero } from "@/app/(home)/components/Hero";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Reviews } from "@/app/(home)/components/Reviews";
import { ServiceAreas } from "@/app/(home)/components/ServiceAreas";
import { ServicesPreview } from "@/app/(home)/components/ServicesPreview";
import { WhyChooseUs } from "@/app/(home)/components/WhyChooseUs";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Quality workmanship, modern finishes.`,
  },
  description:
    "M.A Joinery is based in Airdrie, covering Glasgow, Edinburgh and surrounding areas. Free quotes, materials supplied and fitted, hassle-free from start to finish.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <FeaturedTransformation />
      <Reviews />
      <ServiceAreas />
      <QuoteBanner />
    </>
  );
}
