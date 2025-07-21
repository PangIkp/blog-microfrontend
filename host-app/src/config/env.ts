export const BACKEND_URL =
  typeof process !== "undefined" && process.env.VITE_BLOG_BACKEND_USER
    ? process.env.VITE_BLOG_BACKEND_USER
    : "http://localhost:4001";
