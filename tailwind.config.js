/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    full: "#23BE0A",
                    5: "#23BE0A0D",
                },
                "secondary-1": "#59C6D2",
                "secondary-2": {
                    full: "#328EFF",
                    5: "#328EFF26",
                },
                "secondary-3": {
                    full: "#FFAC33",
                    5: "#FFAC3326",
                },
                black: {
                    full: "#131313",
                    80: "#131313CC",
                    70: "#131313B2",
                    60: "#13131399",
                    50: "#13131380",
                    30: "#1313134D",
                    5: "#1313130D",
                },
            },
        },
    },
    plugins: [require("daisyui")],
};
