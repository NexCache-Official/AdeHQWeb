import type { Metadata } from "next";
import { ContactPageContent } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the AdeHQ team — sales, support, careers, and partnerships.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
