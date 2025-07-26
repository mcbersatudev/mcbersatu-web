import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import laravel from "laravel-vite-plugin";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.tsx"],
            ssr: "resources/js/ssr.tsx",
            refresh: true,
        }),
        react(),
        tailwindcss(),
        legacy({
            targets: ["defaults", "not IE 11", "Android >= 5", "iOS >= 10"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
            renderLegacyChunks: true,
            modernPolyfills: false,
        }),
    ],
    esbuild: {
        jsx: "automatic",
    },
    resolve: {
        alias: {
            "@": "/resources/js",
            "ziggy-js": resolve(__dirname, "vendor/tightenco/ziggy"),
        },
    },
});
