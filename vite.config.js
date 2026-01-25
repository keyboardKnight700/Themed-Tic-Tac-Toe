import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: "/Themed-Tic-Tac-Toe/",
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  cleanupIds: false,
                },
              },
            },
            // Enable prefixIds without params
            // This forces it to use the filename (e.g., "SettingsBtnTheme_svg__a")
            "prefixIds",
          ],
        },
      },
    }),
  ],
});
