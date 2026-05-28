import type { Metadata } from "next";
import "./globals.css";
import Providers from "../src/components/Providers";

export const metadata: Metadata = {
  title: "IRONMIND AI",
  description: "Advanced AI fitness intelligence platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}