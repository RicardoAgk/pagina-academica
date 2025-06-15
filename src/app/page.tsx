// src/app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import PostList from "../components/PostList";
import ThemeToggleButton from "../components/ThemeToggleButton";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <PostList />
        <ThemeToggleButton />
      </main>
    </>
  );
}
