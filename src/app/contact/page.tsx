import type { Metadata } from "next";
import { ContactDetails } from "@/app/contact/components/ContactDetails";
import { ContactForm } from "@/app/contact/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote from M.A Joinery. Call 07857 645534 or email marcadams97@icloud.com. Based in Airdrie, covering Glasgow, Edinburgh and surrounding areas.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <SectionHeading
          as="h1"
          title="Get a free quote"
          description="Tell us about the job and we will get back to you. There is no obligation, and we can talk through the work by phone or message."
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
          <ContactDetails variant="actions" className="lg:hidden" />
          <div className="min-w-0 lg:col-span-3">
            <ContactForm />
          </div>
          <ContactDetails variant="info" className="lg:hidden" />
          <ContactDetails
            variant="full"
            className="hidden min-w-0 lg:col-span-2 lg:block"
          />
        </div>
      </Container>
    </Section>
  );
}
