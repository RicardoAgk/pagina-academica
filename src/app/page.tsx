// src/app/page.tsx
"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

interface Post {
  id: number;
  title: string;
  category: string;
}

const mockPosts: Post[] = [
  { id: 1, title: "Apresentação sobre Inteligência Artificial", category: "Apresentações" },
  { id: 2, title: "Publicação em Revista Científica", category: "Publicações" },
  { id: 3, title: "Ensaio sobre Educação Crítica", category: "Ensaios" },
  { id: 4, title: "Artigo: A Filosofia de Paulo Freire", category: "Artigos" },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? mockPosts.filter((post) => post.category === selectedCategory)
    : mockPosts;

  return (
    <>
      <Navbar onCategorySelect={setSelectedCategory} />
      <main className="p-4 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Bem-vindo ao Blog Académico</h2>

        {filteredPosts.length === 0 ? (
          <p>Nenhum artigo nesta categoria.</p>
        ) : (
          <ul className="space-y-4">
            {filteredPosts.map((post) => (
              <li key={post.id} className="border-b pb-2">
                <h3 className="text-xl font-quicksand">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.category}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
