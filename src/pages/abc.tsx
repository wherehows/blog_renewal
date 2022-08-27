import { graphql } from 'gatsby'

import React from 'react'

import Template from '../templates/GlobalCss'

export default function BlogPostTemplate({ data }: any) {
  console.log(data, 12345)

  return <Template> Template </Template>
}

export const naming = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            date
            title
            subTitle
            parent
            slug
          }
        }
      }
    }
  }
`
// {MarkdownRemark.frontmatter__slug}
// export const pageQuery = graphql`
//   query {
//     markdownRemark {
//       html
//       frontmatter {
//         date
//         title
//         subTitle
//         parent
//       }
//     }
//   }
// `
