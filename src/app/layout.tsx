import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AdeHQ — Your AI Workforce Workspace",
    template: "%s · AdeHQ",
  },
  description:
    "Hire an AI workforce. Invite your whole team. Unlimited humans and unlimited AI employees — pay for work, not seats.",
  openGraph: {
    title: "AdeHQ — Your AI Workforce Workspace",
    description:
      "Hire an AI workforce. Bring your humans. Run it all from one workspace.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
