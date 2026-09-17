import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav × Bespoke Labs — interview briefing",
  description:
    "Same-day briefing for Dugyala Abhinav's Bespoke Labs Machine Learning Engineer interview: RL task design, Harbor, Terminal-Bench.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full">
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
