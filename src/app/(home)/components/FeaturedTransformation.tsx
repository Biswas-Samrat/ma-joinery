import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export function FeaturedTransformation() {
  const project =
    projects.find((item) => item.hasBeforeAfter) ?? projects[0];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl">
              A closer look at the finish
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft lg:text-lg">
              {project.title}. {project.description} Drag the slider to compare
              before and after.
            </p>
          </div>
          <div className="min-w-0 w-full">
            <BeforeAfterSlider
              beforeSrc={project.beforeImage}
              afterSrc={project.afterImage}
              beforeAlt={`${project.title} before`}
              afterAlt={`${project.title} after`}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
