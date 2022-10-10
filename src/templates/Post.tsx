import Content from '@components/Content'
import Sidebar from '@components/Sidebar'
import React from 'react'

export default function Post({
  pageContext: {
    allMarkdownRemark: { edges },
  },
  path,
}: any) {
  const documentTree = getDocumentTree(edges)
  const selectedDocument = getSelectedDocument(edges, path)

  return (
    <>
      <Sidebar documentTree={documentTree} />
      <Content selectedDocument={selectedDocument} />
    </>
  )
}

const getDocumentTree = (edges: Edge[]) => {
  const grandParentData: GrandParentData = {}
  const parentData: ParentData = {}

  edges.forEach(({ node }: Edge) => {
    const { frontmatter, html, id } = node
    const { date, title, subTitle, grandParent, parent, slug, index } =
      frontmatter
    const childDocument = {
      date,
      grandParent,
      parent,
      title,
      subTitle,
      index,
      slug,
      html,
      id,
    }

    if (!grandParent.length && parent && !(parent in grandParentData)) {
      grandParentData[parent] = {
        grandParent,
        parent,
        children: [childDocument],
      }
      return
    }

    if (!grandParent.length && parent && parent in grandParentData) {
      grandParentData[parent].children.push(childDocument)
      return
    }

    if (grandParent.length && parent && !(parent in parentData)) {
      parentData[parent] = {
        grandParent,
        parent,
        children: [childDocument],
      }
      return
    }

    if (grandParent.length && parent && parent in parentData) {
      parentData[parent].children.push(childDocument)
      return
    }
  })

  for (const folder of Object.values(parentData)) {
    const { grandParent } = folder

    if (grandParent && grandParent in grandParentData) {
      grandParentData[grandParent].children.push(folder)
      continue
    }

    if (grandParent && !(grandParent in grandParentData)) {
      grandParentData[grandParent] = {
        grandParent: '',
        parent: grandParent,
        children: [folder],
      }
      continue
    }
  }

  return Object.values(grandParentData).reverse()
}
const getSelectedDocument = (edges: Edge[], targetDocumentPath: string) => {
  const edge = edges.find(({ node }: Edge) => {
    if (node.frontmatter.slug === targetDocumentPath) {
      return true
    }
  })

  return edge && edge.node.html
}

