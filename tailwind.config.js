/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480pc",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        extend: {
            colors: {
                blue: "#78bcc4",
                purple: "#002c3e",
                red: "#f7444e",
                white: "#f7f8f3",
                LightWhite: "#fff",
            },
        },
    },
    plugins: [],
};
