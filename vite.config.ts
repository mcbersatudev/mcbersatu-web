import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
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
            targets: ["defaults", "Android >= 5", "iOS >= 10"],
            additionalLegacyPolyfills: [
                "core-js/features/promise",
                "core-js/features/array/iterator",
                "core-js/features/object/assign",
                "regenerator-runtime/runtime",
            ],
            renderModernChunks: false,
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
    build: {
        target: "es2015",
        cssTarget: ["chrome61"],
    },
});
