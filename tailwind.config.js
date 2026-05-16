/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                main_dark: "#0f172a",
                main_light: "#ffffff",

                second_dark: "#230052",
                second_light: "#1e3a8a",
                prime_sky_100: "#e0f2fe",
                prime_sky_200: "#bae6fd",
                prime_sky_300: "#7dd3fc",
                prime_sky_400: "#38bdf8",
                prime_sky_500: "#0ea5e9",
                prime_sky_600: "#0284c7",
                prime_sky_700: "#0369a1",
                prime_sky_950: "#082f49",

                text_dark: "#1e293b",
                text_light: "#e2e8f0",
            },
        },
    },
    plugins: [],
};
