interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

interface Edge {
  node: {
    frontmatter: {
      date: Date
      title: string
      subTitle: string
      parent: string | undefined
      slug: string
      index: number
    }
    html: string
    id: string
  }
}

interface RefactoredData {
  parent: string | null
  children: ChildDocument[]
}

interface ChildDocument {
  date: Date
  title: string
  subTitle: string
  index: number
  slug: string
  html: string
  id: string
}
