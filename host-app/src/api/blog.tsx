const BACKEND_URL = import.meta.env.VITE_BLOG_BACKEND_USER || "http://localhost:4001";

export const getAllPosts = async () => {
  const res = await fetch(`${BACKEND_URL}/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

export const getPostById = async (id: string | number) => {
  const res = await fetch(`${BACKEND_URL}/posts/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
};
