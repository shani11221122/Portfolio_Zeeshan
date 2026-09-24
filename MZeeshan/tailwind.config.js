/** @type {import('tailwindcss').Config} */
export default {
  // "content" tells Tailwind which files to scan for class names.
  // It only generates CSS for classes it actually finds in these files.
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Custom color tokens for our dark, developer-dashboard theme.
      // Using these names (bg-surface, text-muted, etc.) everywhere keeps
      // the whole site's colors consistent and easy to change from one place.
      colors: {
        base: "#090D16", // page background — deep navy, almost black
        surface: "#121A2B", // card / panel background
        surface2: "#182236", // slightly lighter panel (nested cards)
        border: "rgba(148, 163, 184, 0.14)",
        muted: "#8B96AC", // secondary text
        ink: "#EEF2FA", // primary text
        emerald: {
          DEFAULT: "#34D399",
          soft: "rgba(52, 211, 153, 0.12)",
        },
        indigo: {
          DEFAULT: "#7C8CF8",
          soft: "rgba(124, 140, 248, 0.12)",
        },
        amber: {
          DEFAULT: "#F5B849",
        },
      },
      fontFamily: {
        // Sora = headlines (geometric, technical feel)
        display: ["Sora", "sans-serif"],
        // IBM Plex Sans = body text (clean, readable)
        sans: ["IBM Plex Sans", "sans-serif"],
        // IBM Plex Mono = labels, badges, code-like snippets
        mono: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(52, 211, 153, 0.25), 0 8px 30px rgba(52, 211, 153, 0.12)",
      },
    },
  },
  plugins: [],
};
