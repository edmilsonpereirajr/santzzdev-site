import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/components/CookieConsent";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://santzzdev.vercel.app"),
  title: {
    default: "Criação de Sites e Landing Pages | SantzzDev",
    template: "%s | SantzzDev",
  },
  description:
    "Criação de sites profissionais, landing pages e lojas virtuais para empresas e empreendedores em todo o Brasil. Conheça os projetos da SantzzDev.",
  applicationName: "SantzzDev",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://santzzdev.vercel.app/",
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


const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://santzzdev.vercel.app/#person",
      name: "Edmilson",
      url: "https://santzzdev.vercel.app/",
      jobTitle: "Desenvolvedor Web",
      worksFor: {
        "@type": "Organization",
        name: "SantzzDev",
        url: "https://santzzdev.vercel.app/",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://santzzdev.vercel.app/#website",
      url: "https://santzzdev.vercel.app/",
      name: "SantzzDev",
      description:
        "Desenvolvimento de sites profissionais, landing pages e lojas virtuais para empresas e empreendedores.",
      inLanguage: "pt-BR",
      publisher: {
        "@id": "https://santzzdev.vercel.app/#person",
      },
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1012",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
        <GoogleAnalytics />
        <Analytics />
      </body>
    </html>
  );
}