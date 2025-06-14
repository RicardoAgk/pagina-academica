'use client';

import { useState, useEffect } from "react";
import postsData from "../data/posts.json"; // Dados mockados

const PostList = ({ searchTerm, selectedCategory }: any) => {
  const [posts, setPosts] = useState(postsData);

  useEffect(() => {
    let filteredPosts = postsData;

    if (selectedCategory) {
      filteredPosts = filteredPosts.filter(post =>
        post.categories.includes(selectedCategory)
      );
    }

    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      <h3>Lista de Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <h4>{post.title}</h4>
            <p>{post.content.substring(0, 150)}...</p>
            <p>
              <strong>{post.author}</strong> - {
              (() => {
                // Generate a random date in the past 365 days with a slight delay
                const [randomDate, setRandomDate] = useState<string | null>(null);

                useEffect(() => {
                const timeout = setTimeout(() => {
                  const daysAgo = Math.floor(Math.random() * 365);
                  // Avoid using new Date, so generate a string directly
                  const year = 2024;
                  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
                  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
                  setRandomDate(`${day}/${month}/${year}`);
                }, 300); // 300ms delay

                return () => clearTimeout(timeout);
                }, []);

                return randomDate || '...';
              })()
              }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
