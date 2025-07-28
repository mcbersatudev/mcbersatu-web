import.meta.glob(["../fonts/**/*"], { eager: true, import: "default" });
import { inject } from "@vercel/analytics";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

const isEmbedded = document.documentElement.classList.contains("legacy-only");

if (!isEmbedded) {
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
} else {
    const el = document.getElementById("app");
    if (el) {
        el.innerHTML = `
      <div style="font-family:sans-serif; padding:2rem; text-align:center;">
        <p>Tidak dapat menampilkan halaman.<br/>
           Silahkan akses halaman ini dengan aplikasi browser pada perangkat anda.</p>
      </div>
    `;
    }
}

inject();
