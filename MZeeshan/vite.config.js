import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is the tool that runs our project on a local server (npm run dev)
// and later bundles everything into fast, production-ready files (npm run build).
export default defineConfig({
  plugins: [react()],
});
