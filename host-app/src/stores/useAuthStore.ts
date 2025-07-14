import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  token: string;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
