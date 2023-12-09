import { VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions>= {
    registerType: "prompt",
    manifest: { 
        name: "CSTI PWA",
        short_name: "CSTI PWA",
        description: "Progressive Web App frontend test for CSTI",
        scope: "/",
        start_url: "/",
        orientation: "portrait"
    }
}

export default manifestForPlugin;