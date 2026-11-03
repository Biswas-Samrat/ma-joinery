import { site } from "@/data/site";

export interface ContactFields {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function buildMailto(fields: ContactFields): string {
  const subject = `Quote enquiry – ${fields.service}`;
  const body = [
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email || "Not provided"}`,
    `Service: ${fields.service}`,
    "",
    "Message:",
    fields.message,
  ].join("\r\n");

  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
