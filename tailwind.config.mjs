/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                sm: "576px",
                md: "768px",
                lg: "992px",
                xl: "1200px",
                "2xl": "1400px",
            },
            colors: {
                primary: "#FEB900",
                secondary: "#BE8B55",
                dark: "#191919",
                default: "#9B9A9D",
                info: "#535153",
                success: "#78AA4C",
                warning: "#F59A14",
                danger: "#F44336",
                dim: "#F5F6F7",
            },
        },
    },
    plugins: [],
};
