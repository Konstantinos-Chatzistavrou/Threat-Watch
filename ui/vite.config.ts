import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "@common",
        replacement: fileURLToPath(
          new URL("./src/app/common", import.meta.url),
        ),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/app/pages", import.meta.url)),
      },
      {
        find: "@content",
        replacement: fileURLToPath(
          new URL("./src/app/content", import.meta.url),
        ),
      },
    ],
  },
});
