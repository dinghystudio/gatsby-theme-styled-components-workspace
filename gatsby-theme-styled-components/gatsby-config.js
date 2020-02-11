module.exports = themeOptions => ({
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "development",
        minify: process.env.NODE_ENV !== "development",
        ...themeOptions,
      },
    },
  ],
})
