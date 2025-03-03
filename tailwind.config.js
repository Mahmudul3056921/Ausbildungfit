/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#ffffff", // ✅ Forces the default background color to white
      },
      animation: {
        marquee: "marquee 25s linear infinite", // ✅ Keeping custom marquee animation
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d32f2f",
          secondary: "#fdd835",
          accent: "#374151",
          neutral: "#e5e7eb",
          "base-100": "#ffffff", // ✅ Default background is now white
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      "light",
    ],
  },
};
