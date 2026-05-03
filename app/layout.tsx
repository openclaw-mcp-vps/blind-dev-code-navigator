import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blind Dev Code Navigator — Audio-first code navigation for visually impaired developers",
  description: "Screen reader optimized IDE extension with spatial audio cues for code structure navigation. Built for visually impaired developers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cde1c530-394c-401e-bcd9-75292b491b6f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
