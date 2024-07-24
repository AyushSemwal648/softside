import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  // base: '/softside/',
  // server: {
  //   // If you're serving assets from subdirectory
  //   // You might need to modify publicPath as well
  //   // This will affect the URLs generated for assets during build
  //   publicPath: '/softside/',
  // },
  plugins: [react()],
});
