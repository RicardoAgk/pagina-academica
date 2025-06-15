"use client";

import postsData from "../data/posts.json";
import { useBlogStore } from "@/store/useBlogStore";

const PostList = () => {
  const { searchTerm, selectedCategory } = useBlogStore();

  const filtered = postsData.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.categories.includes(selectedCategory)
      : true;

    const matchesSearch = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <h3>Lista de Posts</h3>
      <ul>
        {filtered.map((post) => (
          <li key={post._id}>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 150)}...</p>
            <p>
              <strong>{post.author}</strong> — {post.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
