import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhinav × Bespoke Labs — interview briefing",
  description:
    "Same-day briefing for Dugyala Abhinav's Bespoke Labs Machine Learning Engineer interview: RL task design, Harbor, Terminal-Bench.",
  appleWebApp: {
    capable: true,
    title: "Bespoke briefing",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "dark",
  themeColor: "#161d28",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark h-full">
      <body className="flex min-h-dvh flex-col font-sans">
        <SiteHeader />
        <main className="min-w-0 flex-1">{children}</main>
      </body>
    </html>
  );
}
