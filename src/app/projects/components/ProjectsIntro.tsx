import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsIntro() {
  return (
    <Container>
      <SectionHeading
        as="h1"
        title="Recent work"
        description="A selection of joinery and home-improvement projects around Airdrie, Glasgow and Edinburgh."
      />
    </Container>
  );
}
