import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-purple": "#AC30FF",
        "custom-orange": "#EE7B51",
        "button-purple": "#BD62E7",
        "glass-gray": "#242424"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'novaMono': ['Nova Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
