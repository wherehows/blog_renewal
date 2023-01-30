import React from 'react'
import Content from '@components/Content'
import Sidebar from '@components/Sidebar'
import { getFolderStructureTree } from '@utils/helpers'

export default function Post({
  pageContext: {
    allMarkdownRemark: { edges },
  },
  path,
}: any) {
  const documentTree = getFolderStructureTree(edges)
  const selectedDocument = getSelectedDocument(edges, path)

  return (
    <>
      <Sidebar documentTree={documentTree} />
      <Content selectedDocument={selectedDocument} />
    </>
  )
}

const getSelectedDocument = (edges: Edge[], targetDocumentPath: string) => {
  const edge = edges.find(({ node }: Edge) => {
    if (node.frontmatter.slug === targetDocumentPath) {
      return true
    }
  })

  return edge && edge.node.html
}

