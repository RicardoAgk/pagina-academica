"use client";

import { useThemeToggle } from "@/hooks/useTheme";
import styles from "../styles/themeToggleButton.module.css";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
    <button onClick={toggleTheme} className={styles.floatingButton}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
