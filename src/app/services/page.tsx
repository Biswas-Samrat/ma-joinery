import type { Metadata } from "next";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Section } from "@/components/ui/Section";
import { ServicesGrid } from "@/app/services/components/ServicesGrid";
import { ServicesIntro } from "@/app/services/components/ServicesIntro";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Kitchen renovations, garden rooms, flooring, staircases, wall panelling, fitted wardrobes, cladding and fencing from M.A Joinery in Airdrie.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="space-y-0">
        <ServicesIntro />
        <ServicesGrid />
      </Section>
      <QuoteBanner />
    </>
  );
}
