import Content from '@components/Content'
import Sidebar from '@components/Sidebar'
import React, { useEffect, useState } from 'react'
import GlobalCss from './GlobalCss'

export default function Post({
  pageContext: {
    allMarkdownRemark: { edges },
  },
  path,
}: any) {
  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null,
  )

  const [html, setHtml] = useState<null | string>(null)

  const refactoredDatas = refactorData(edges)

  useEffect(() => {
    const { node } = edges.find(({ node }: any) => {
      const { slug } = node.frontmatter
      if (slug === path) return true
    }) as Edge
    console.log('할당여부')
    const { html: realHtml } = node
    setHtml(realHtml)
  }, [path])
  console.log('시작', '💇🏼', html)

  return (
    <GlobalCss>
      <Sidebar
        refactoredDatas={refactoredDatas}
        onClickCategoryItem={setSelectedContentId}
      />
      <Content content={html} list={edges} refactoredDatas={refactoredDatas} />
    </GlobalCss>
  )
}

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

