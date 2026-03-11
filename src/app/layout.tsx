import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aceleração Beauty | Jhon Guttyerre",
  description: "Descubra os bastidores dos salões e clínicas que faturam mais de R$100 mil por mês.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${manrope.variable} antialiased bg-onyx text-ice font-sans selection:bg-gold selection:text-onyx`}
      >
        {children}
      </body>
    </html>
  );
}
