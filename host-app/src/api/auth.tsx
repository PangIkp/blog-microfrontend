const BACKEND_URL = import.meta.env.VITE_BLOG_BACKEND_USER;

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await fetch(`${BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }
 console.log(BACKEND_URL)
  return response.json();
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${BACKEND_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
}