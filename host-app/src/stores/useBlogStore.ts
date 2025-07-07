import { create } from 'zustand';

interface Blog {
  id: number;
  title: string;
  content: string;
}

interface BlogStore {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
}

const useBlogStore = create<BlogStore>()((set) => ({
  blogs: [],
  addBlog: (blog) =>
    set((state) => ({
      blogs: [...state.blogs, blog],
    })),
}));

export default useBlogStore;
