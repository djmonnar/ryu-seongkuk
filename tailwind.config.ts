import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "Noto Sans KR",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        dem: {
          blue: "#004EA2",
          deep: "#003476",
          sky: "#26A7DF",
          pale: "#EAF5FF",
          red: "#E51B35"
        },
        ink: "#071F3F"
      },
      boxShadow: {
        civic: "0 18px 55px rgba(0, 43, 94, 0.14)",
        "civic-soft": "0 16px 46px rgba(0, 43, 94, 0.08)",
        "civic-strong": "0 26px 80px rgba(0, 43, 94, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
