module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f00"
      },

      fontFamily: {
        monospace: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace`,
        "sans-serif": `sans-serif`,
        serif: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`
      },

      screens: {
        xs: "320px"
      }
    }
  },
  plugins: []
};
