import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  define: {
    'process.env.VITE_BLOG_BACKEND_USER': JSON.stringify(process.env.VITE_BLOG_BACKEND_USER || 'http://localhost:4001'),
  },
  plugins: [
    tailwindcss(),
    react(),
    federation({
      name: "host_app",
      remotes: {
        remote_app: "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
        i18next: {
          singleton: true,
        },
        "react-i18next": {
          singleton: true,
        },
      } as any,
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
