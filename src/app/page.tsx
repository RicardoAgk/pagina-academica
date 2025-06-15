// src/app/page.tsx
"use client";

import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main >
        <PostList />
      </main>
    </>
  );
}
