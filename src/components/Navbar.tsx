// src/components/Navbar.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { useIsDesktopWithSidebar } from "../hooks/useIsDesktopWithSidebar";

const categories = [
  "Sobre",
  "Apresentações",
  "Publicações",
  "Artigos",
  "Ensaios",
];

export default function Navbar({
  onCategorySelect,
}: {
  onCategorySelect: (cat: string) => void;
}) {
  const { isDesktop, isSidebarOpen, setIsSidebarOpen } =
    useIsDesktopWithSidebar(768);
  const [search, setSearch] = useState("");
  const [onlySearch, setOnlySearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (onlySearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [onlySearch]);

  useEffect(() => {
    if (isDesktop) {
      setIsSidebarOpen(true);
      setOnlySearch(false);
    }
  }, [isDesktop]);

  const toggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setOnlySearch(false);
  };

  const handleSearchClick = () => {
    setOnlySearch(true);
  };

  const handleCategoryClick = (cat: string) => {
    onCategorySelect(cat);
    setOnlySearch(false);
    if (!isDesktop) setIsSidebarOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>João Silva</h1>
        {!isDesktop && (
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
        )}
      </div>

      {isSidebarOpen && (
        <nav className={styles.navbar}>
          <div className={styles.navRow}>
            <div className={styles.categoriesWrapper}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={styles.navItem}
                >
                  {cat}
                </button>
              ))}

              {(onlySearch || isDesktop) && (
                <div className={styles.searchBar}>
                  <label htmlFor="search-input" className="sr-only">
                    Pesquisar
                  </label>
                  <input
                    id="search-input"
                    ref={inputRef}
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Pesquisar artigos..."
                  />
                </div>
              )}
            </div>

            {!onlySearch && !isDesktop && (
              <div>
                <button
                  className={styles.searchIconButton}
                  onClick={handleSearchClick}
                  aria-label="Ativar pesquisa"
                >
                  🔍
                </button>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
