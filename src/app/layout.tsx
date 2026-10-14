import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://santzzdev-site.vercel.app"),
  title: {
    default: "SantzzDev | Criação de Sites e Soluções Digitais",
    template: "%s | SantzzDev",
  },
  description:
    "Desenvolvimento de sites profissionais, landing pages e soluções digitais personalizadas para negócios e projetos. Atendimento direto do planejamento à entrega.",
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
    title: "SantzzDev | Criação de Sites e Soluções Digitais",
    description:
      "Sites profissionais, landing pages e soluções digitais personalizadas. Tire sua ideia do papel com atendimento direto.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "SantzzDev | Criação de Sites e Soluções Digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SantzzDev | Criação de Sites e Soluções Digitais",
    description:
      "Sites profissionais, landing pages e soluções digitais personalizadas para negócios e projetos.",
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
    <html lang="pt-BR" className={geist.variable}>
      <body>
  {children}
  <Analytics />
</body>
    </html>
  );
}