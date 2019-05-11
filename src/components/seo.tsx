/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
interface SEOProps {
  description?: string
  lang?: string
  meta?: object[]
  keywords?: string[]
  title: string
}
const SEO: React.SFC<SEOProps> = ({ description, lang, meta, keywords, title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  const metaDescription = description || site.siteMetadata.description

  const accumulatedMeta: JSX.IntrinsicElements['meta'][] = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ]

  if (keywords && keywords.length > 0) {
    accumulatedMeta.push({
      name: 'keywords',
      content: keywords.join(', '),
    })
  }

  if (meta) {
    accumulatedMeta.push(...meta)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={accumulatedMeta}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
}
export default SEO
