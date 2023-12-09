import { defineConfig } from 'vite'
import manifest from "./src/manifest";
import { VitePWA } from "vite-plugin-pwa";
import react from '@vitejs/plugin-react-swc'

const apiUrl = process.env.VITE_API_BASE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifest)],
})
