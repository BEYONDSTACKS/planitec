import { Nunito, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://planitec.ind.br"),
  title: {
    default: "Planitec | Ventilação, Climatização e Proteção Contra Incêndio",
    template: "%s | Planitec"
  },
  description: "Especialista em ventilação industrial, exaustão, pressurização de escadas e climatização evaporativa. Soluções completas com mais de 20 anos de mercado.",
  openGraph: {
    title: "Planitec | Engenharia Industrial",
    description: "Sistemas de ventilação, climatização e proteção contra incêndio com fabricação própria e excelência técnica.",
    url: "https://planitec.ind.br", // Replace with actual production URL if known
    siteName: "Planitec",
    images: [
      {
        url: "/new-hero.png",
        width: 1200,
        height: 630,
        alt: "Planitec Engenharia Industrial",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Planitec | Engenharia Industrial",
    description: "Sistemas de ventilação, climatização e proteção contra incêndio.",
    images: ["/new-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
