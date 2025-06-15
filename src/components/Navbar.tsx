"use client";

import { useState, useEffect } from "react";
import styles from "../styles/navbar.module.css";
import { useBlogStore } from "@/store/useBlogStore";
import { useIsDesktopWithSidebar } from "@/hooks/useIsDesktopWithSidebar";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import postsData from "@/data/posts.json";

const categories = ["about", "talks", "publications", "articles", "essays"];

export default function Navbar() {
  const { isDesktop, isSidebarOpen, setIsSidebarOpen } =
    useIsDesktopWithSidebar();
  const { setSearchTerm, setSelectedCategory } = useBlogStore();

  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 300);
  const router = useRouter();

  useEffect(() => {
    // Match across multiple fields
    const term = debouncedSearch.toLowerCase();

    setSearchTerm(debouncedSearch); // Still update the store for fallback usage
  }, [debouncedSearch, setSearchTerm]);

  const handleCategoryClick = (category: string) => {
    const postsInCategory = postsData.filter((post) =>
      post.categories.includes(category)
    );

    if (category === "about" && postsInCategory.length === 1) {
      router.push(`/post/${postsInCategory[0]._id}`);
    } else {
      setSelectedCategory(category);
      if (!isDesktop) {
        setIsSidebarOpen(false);
      }
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // só altera localmente
  };

  return (
    <header className={styles.topBar}>
      <h1 className={styles.titleBar}>João Pinheiro</h1>
      {!isDesktop && (
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className={styles.burgerButton}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? "✕" : "☰"}
        </button>
      )}

      {(isSidebarOpen || isDesktop) && (
        <>
          <nav>
            <ul className={styles.categoriesWrapper}>
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={styles.navItem}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.searchBar}>
            <label htmlFor="search" className={styles["sr-only"]}>
              Search
            </label>
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search..."
            />
          </div>
        </>
      )}
    </header>
  );
}
