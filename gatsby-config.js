module.exports = {
  siteMetadata: {
    siteUrl: "https://ayse.site",
    url: "https://ayse.site",
    title: "Ayse Site",
    description:
      "Hey, I'm Ayse Stinnett. I am a frontend engineer based out of Chattanooga, TN.",
    author: "Ayse Stinnett",
    keywords: "Ayse Stinnett, Ayse Site, React, Engineer, Web Developer",
    image: ".src/images/me.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-smoothscroll",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ayse.site",
        sitemap: "https://ayse.site/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
