import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
    content: ['./resources/js/**/*.{tsx,ts,jsx,js}', './resources/css/**/*.css'],
    theme: {
        extend: {
            fontFamily: {
                droidsans: ['"Droid Sans"', ...defaultTheme.fontFamily.sans],
                lato: ['Lato', ...defaultTheme.fontFamily.sans],
                minecraftfive: ['"Minecraft Five"', ...defaultTheme.fontFamily.sans],
                minercraftory: ['Minercraftory', ...defaultTheme.fontFamily.sans],
                opensans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
export default config;
