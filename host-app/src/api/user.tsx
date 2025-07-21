const BACKEND_URL = process.env.VITE_BLOG_BACKEND_USER || "http://localhost:4001";

export const getProfile = async (token: string) => {
  const res = await fetch(`${BACKEND_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch profile");

  return res.json();
};
