"use client";

import { useState } from "react";
import styles from "../styles/navbar.module.css";
import { useBlogStore } from "@/store/useBlogStore";
import { useIsDesktopWithSidebar } from "@/hooks/useIsDesktopWithSidebar";

const categories = [
  "about",
  "talks",
  "publications",
  "articles",
  "essays",
];

export default function Navbar() {
  const { isDesktop, isSidebarOpen, setIsSidebarOpen } =
    useIsDesktopWithSidebar();
  const { setSearchTerm, setSelectedCategory } = useBlogStore();

  const [searchValue, setSearchValue] = useState("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (!isDesktop) setIsSidebarOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSearchToggle = () => {
    if (!isDesktop) {
      setIsSidebarOpen((prev) => !prev);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.title}>João Pinheiro</h1>
        {!isDesktop && (
          <button
            onClick={handleSearchToggle}
            className={styles.menuButton}
            aria-label="Open menu"
          >
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
                  className={styles.navItem}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            {!isDesktop && (
              <button
                className={styles.searchIconButton}
                onClick={() => {
                  setSelectedCategory("");
                }}
                aria-label="Search"
              >
                🔍
              </button>
            )}
          </div>

          {(isDesktop || !isDesktop) && (
            <div className={styles.searchBar}>
              <label htmlFor="search" className={styles["sr-only"]}>
                Pesquisar
              </label>
              <input
                id="search"
                type="text"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
