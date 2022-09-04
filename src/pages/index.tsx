import React, { useEffect, useState, useRef } from 'react'
import { graphql } from 'gatsby'
import GlobalCss from '../templates/GlobalCss'
import '../styles/global.css'
import Sidebar from '@components/Sidebar'
import Content from '@components/Content'

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null,

  )

  const refactoredDatas = refactorData(edges)
  let html = null

  if (selectedContentId) {
    const { node } = edges.find(({ node }) => {
      const { id } = node
      if (id === selectedContentId) return true
    }) as Edge
    const { html: realHtml } = node
    html = realHtml
  }

  return (
    <GlobalCss>
      <Sidebar
        refactoredDatas={refactoredDatas}
        onClickCategoryItem={setSelectedContentId}
      />
      <Content content={html} list={edges}/>
    </GlobalCss>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
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

interface Result {
  [key: string]: RefactoredData
}

const refactorData = (edges: Edge[]) =>
  Object.values(
    edges.reduce((res: Result, { node }: Edge) => {
      const { frontmatter, html, id } = node
      const { date, title, subTitle, parent, slug, index } = frontmatter
      const childDocument = {
        date,
        title,
        subTitle,
        index,
        slug,
        html,
        id,
      }

      if (parent && !(parent in res)) {
        res[parent] = {
          parent,
          children: [childDocument],
        }
        return res
      }

      if (parent && parent in res) {
        res[parent].children.push(childDocument)
        return res
      }

      if (!parent && !('children' in res)) {
        res.children = {
          parent: null,
          children: [childDocument],
        }
        return res
      }

      if (!parent && 'children' in res) {
        res.children.children.push(childDocument)
        return res
      }

      return res
    }, {}),
  )