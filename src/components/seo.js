import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

//img isn't working
const SEO = ({ lang, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            url
            title
            description
            author
            keywords
            image
          }
        }
      }
    `
  );

  const url = site.siteMetadata.url;
  const defaultTitle = site.siteMetadata?.title;
  const metaDescription = site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const imageHC = "https://ayse.site/image";
  const image = site.siteMetadata.image;
  const keywords = site.siteMetadata.keywords;
  const meta = [];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `og:site_name`,
          content: "Ayse Site",
        },
        {
          name: `author`,
          content: author,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: defaultTitle,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:secure_url`,
          content: `https://ayse.site/image`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image`,
          content: `https://ayse.site/image`,
        },
        {
          name: `twitter:creator`,
          content: `@AyseStinnett`,
        },
        {
          name: `twitter:site`,
          content: `@AyseStinnett`,
        },
        {
          name: `twitter:title`,
          content: defaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export default SEO;
