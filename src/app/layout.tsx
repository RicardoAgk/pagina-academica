import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "João Pinheiro",
  description: "",
};

// Fontes
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <html lang="pt-PT" className={`${nunito.variable} ${quicksand.variable}`}>
        <head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className={`${nunito.variable}`}>{children}</body>
      </html>
    </>
  );
}
