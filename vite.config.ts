import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Activer JSX dans les fichiers .js
    include: /\.[jt]sx?$/, // Inclure les fichiers .js et .jsx
  },
  css: {
    preprocessorOptions: {
      css: {
        // Permet d'ajouter des options de prétraitement pour le CSS
      },
    },
  },
});
