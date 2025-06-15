import { create } from "zustand";

type BlogState = {
  searchTerm: string;
  selectedCategory: string;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (cat: string) => void;
};

export const useBlogStore = create<BlogState>((set) => ({
  searchTerm: "",
  selectedCategory: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSelectedCategory: (cat) => set({ selectedCategory: cat }),
}));
