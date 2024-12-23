import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: {
      ".js": "jsx", // Traite les fichiers .js contenant du JSX comme des fichiers JSX
    },
    include: /\.[jt]sx?$/, // Inclut les fichiers .ts, .tsx, .js, et .jsx
  },
  css: {
    preprocessorOptions: {
      css: {
        // Permet d'ajouter des options de prétraitement pour le CSS
      },
    },
  },
});
