import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: {
      ".js": "jsx", // Traite les fichiers .js avec JSX
      ".jsx": "jsx", // Traite les fichiers .jsx
    },
    include: /\.[jt]sx?$/, // Inclut les fichiers .ts, .tsx, .js, .jsx
  },
  css: {
    preprocessorOptions: {
      css: {
        // Options pour les préprocesseurs CSS si nécessaire
      },
    },
  },
});
