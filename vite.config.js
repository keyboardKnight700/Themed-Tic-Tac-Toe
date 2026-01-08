import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

/* export default defineConfig({
  plugins: [react(), svgr()],
});

 */

export default defineConfig({
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
                  // Disable cleanupIds so it doesn't clash with prefixIds
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
