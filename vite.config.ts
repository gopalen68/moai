import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  /**
   * CRITICAL: define Vue feature flags used by the ESM bundler build inside @n8n/chat.
   * Without these, you can hit: __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ is not defined
   */
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
  },

  /**
   * Optional but helpful: ensure Vite pre-bundles @n8n/chat so the flags apply cleanly.
   */
  optimizeDeps: {
    include: ["@n8n/chat"],
  },
}));
