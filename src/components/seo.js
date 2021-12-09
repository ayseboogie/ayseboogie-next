import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

//img isn't working
const SEO = ({ description, lang, title }) => {
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
          }
        }
      }
    `
  );

  const image = "https://www.dropbox.com/s/9yhu1avur3bs97v/ayseSite.png?dl=0";
  const url = site.siteMetadata.url;
  const defaultTitle = site.siteMetadata?.title;
  const metaDescription = description || site.siteMetadata.description;
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
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
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
