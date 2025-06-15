// src/components/PostList.tsx
"use client";

import Link from "next/link";
import postsData from "@/data/posts.json";
import { useBlogStore } from "@/store/useBlogStore";
import styles from "../styles/postList.module.css";

export default function PostList() {
  const { searchTerm, selectedCategory } = useBlogStore();
  const term = searchTerm.toLowerCase();

  const filtered = postsData
    .filter((post) => {
      const matchesCategory = selectedCategory
        ? post.categories.includes(selectedCategory)
        : true;

      const matchesSearch = term
        ? post.title.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term) ||
          post.date.toLowerCase().includes(term) ||
          post.categories.some((cat) => cat.toLowerCase().includes(term))
        : true;

      return matchesCategory && matchesSearch && post.categories[0] !== "about";
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        {filtered.map((post) => (
          <Link key={post._id} href={`/post/${post._id}`} className={styles.card}>
            <div>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{post.content.slice(0, 100)}...</p>
            </div>
            <div className={styles.meta}>
              <div className={styles.category}>{post.categories[0]}</div>
              <div className={styles.date}>{post.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
