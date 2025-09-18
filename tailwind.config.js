/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        fg: {
          DEFAULT: "var(--fg)",
          secondary: "var(--fg-secondary)",
          tertiary: "var(--fg-tertiary)",
        },
        muted: "var(--muted)",
        accent: {
          DEFAULT: "var(--accent)",
          muted: "var(--accent-muted)",
        },
        border: "var(--border)",
      },
      backgroundImage: {
        accent: "var(--accent)",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
