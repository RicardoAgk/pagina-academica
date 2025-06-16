// src/app/post/[id]/page.tsx
"use client";

import { useRouter } from "next/navigation";
import postsData from "@/data/posts.json";
import styles from "@/styles/postPage.module.css";

export default function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const router = useRouter();
  const post = postsData.find((p) => p._id === id);

  if (!post) return <div>Post not found</div>;

  return (
    <article className={styles.container}>
      <button onClick={() => router.back()} className={styles.backButton}>
        ← back
      </button>
      <h6 className={styles.title}>{post.title}</h6>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.content}>{post.content}</div>
    </article>
  );
}
