import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesIntro() {
  return (
    <Container>
      <SectionHeading
        as="h1"
        title="Joinery and home improvements"
        description="All types of joinery work undertaken. We supply and fit all materials and coordinate all trades, so the work is hassle-free from start to finish."
      />
    </Container>
  );
}
