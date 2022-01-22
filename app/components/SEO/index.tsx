import React, { FC } from "react"
import { Helmet } from "react-helmet"

interface ISEOProps {
  title?: string
  description?: string
  lang?: string
  meta?: object[]
  keywords?: string[]
  subCategory?: string
}

const SEO: FC<ISEOProps> = ({
  title,
  description,
  lang = "en",
  meta = [],
  keywords = [],
  subCategory
}) => {
  const site = {
    siteMetaData: {
      title: "Sportal",
      description: "A sports hub for the Upper West Side",
      author: "The Sportal Team",
      baseKeywords: []
    }
  }

  const metaDescription = description ?? site.siteMetaData.description
  const metaKeywords = [...site.siteMetaData.baseKeywords, ...keywords]

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={subCategory ? `${title} - ${subCategory}` : title}
      titleTemplate={`%s | ${site.siteMetaData.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: site.siteMetaData.author
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          name: "keywords",
          content: metaKeywords.join(", ")
        },
        ...meta
      ]}
    />
  )
}

export default SEO
