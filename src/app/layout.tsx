
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santzzdev.com.br"),
  title: {
    default: "SantzzDev | Sua ideia, nossa solução",
    template: "%s | SantzzDev",
  },
  description:
    "Desenvolvimento de sites modernos, responsivos e profissionais para transformar ideias em oportunidades de negócio.",
  applicationName: "SantzzDev",
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}