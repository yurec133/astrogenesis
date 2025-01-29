import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "AstroGenesis",
  description:
    "Aliens are attacking, and the survival of our species depends on you.",
};

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-exo2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${exo2.className}`}>{children}</body>
    </html>
  );
}
