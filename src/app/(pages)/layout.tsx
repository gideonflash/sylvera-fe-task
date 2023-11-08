import type { Metadata } from "next";
import { inter } from "@/app/ui/styles/fonts";
import { HeroImage } from "@/app/ui/Hero/HeroImage";
import styles from "./layout.module.css";
import "@/app/ui/styles/globals.css";

export const metadata: Metadata = {
  title: "Projects",
  description: "Project display",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <HeroImage src="/banner.png" alt="hero image" />
        <main>{children}</main>
      </body>
    </html>
  );
}
