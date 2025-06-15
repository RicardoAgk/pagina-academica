'use client';

import { useState, useEffect } from "react";
import styles from "../styles/layout.module.css"; // Estilos do layout
import { Nunito, Quicksand } from "next/font/google";
import "../styles/globals.css";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(styles.menuOpen);
    } else {
      document.body.classList.remove(styles.menuOpen);
    }
  }, [menuOpen]);

  return (
    <>
    <html lang="pt-PT" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className={`${nunito.variable}`}>
        {children}
      </body>
    </html>
    </>
  );
}
