import type { Metadata } from "next";
import { QuoteBanner } from "@/components/shared/QuoteBanner";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectsGrid } from "@/app/projects/components/ProjectsGrid";
import { ProjectsIntro } from "@/app/projects/components/ProjectsIntro";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Kitchen renovations, garden rooms, interiors and exterior joinery by M.A Joinery, based in Airdrie.",
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <ProjectsIntro />
        <Container>
          <ProjectsGrid />
        </Container>
      </Section>
      <QuoteBanner />
    </>
  );
}
