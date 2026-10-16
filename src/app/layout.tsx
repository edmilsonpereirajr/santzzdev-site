import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santzzdev-site.vercel.app"),
  title: {
    default: "SantzzDev | Desenvolvedor Web e Criação de Sites",
    template: "%s | SantzzDev",
  },
  description:
    "Desenvolvimento de sites profissionais, landing pages e lojas virtuais. Soluções digitais personalizadas para empresas e empreendedores, com atendimento direto.",
  applicationName: "SantzzDev",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://santzzdev-site.vercel.app/",
    siteName: "SantzzDev",
    title: "SantzzDev | Desenvolvedor Web e Criação de Sites",
    description:
      "Sites profissionais, landing pages e lojas virtuais para empresas e empreendedores. Conheça os projetos da SantzzDev.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "SantzzDev | Criação de Sites e Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SantzzDev | Desenvolvedor Web e Criação de Sites",
    description:
      "Sites profissionais, landing pages e soluções digitais para empresas e empreendedores.",
    images: ["/opengraph-image.png"],
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
    <html
      lang="pt-BR"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}