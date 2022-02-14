import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pluginLinaria from "@linaria/rollup";
import postcss from "rollup-plugin-postcss";

const dev = process.env.NODE_ENV !== "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginLinaria({ sourceMap: dev }),
    // postcss({
    //   extract: "styles.css",
    // }),
  ],
});
