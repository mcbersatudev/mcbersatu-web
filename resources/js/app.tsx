import.meta.glob(["../fonts/**/*"], { eager: true, import: "default" });
import { inject } from "@vercel/analytics";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

function isEmbeddedWebView() {
    if (window.self !== window.top) return true;
    const ua = navigator.userAgent || "";
    return [
        "Instagram",
        "FBAN",
        "FBAV",
        "Line",
        "WhatsApp",
        "Snapchat",
        "TikTok",
        "Twitter",
        "LinkedIn",
    ].some((agent) => ua.includes(agent));
}

const isEmbedded = isEmbeddedWebView();

Object.defineProperty(document, "visibilityState", {
    get: () => "visible",
});

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob("./pages/**/*.tsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: "#F0F0F0",
    },
});

inject();
