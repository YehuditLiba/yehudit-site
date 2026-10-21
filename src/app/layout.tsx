import type { Metadata } from "next";
import { Great_Vibes, JetBrains_Mono, Rubik } from "next/font/google";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/content";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${rubik.variable} ${jetbrainsMono.variable} ${greatVibes.variable} antialiased`}
    >
      <body className="bg-bg font-sans text-cream">
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
