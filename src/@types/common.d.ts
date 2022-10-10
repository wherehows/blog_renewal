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
      grandParent: string
      parent: string
      slug: string
      index: number
    }
    html: string
    id: string
  }
}

interface RefactoredData {
  parent: string | undefined
  children: MarkdownDocument[]
}

interface MarkdownDocument {
  date: Date
  grandParent: string
  parent: string
  title: string
  subTitle: string
  index: number
  slug: string
  html: string
  id: string
}

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[]
    }
  }
}

interface GrandParentData {
  [key: string]: {
    grandParent: string | undefined
    parent: string | undefined
    children: (MarkdownDocument | MarkDownDocumentNode)[]
  }
}

interface ParentData {
  [key: string]: MarkDownDocumentNode
}

interface MarkDownDocumentNode {
  grandParent: string | undefined
  parent: string | undefined
  children: MarkdownDocument[]
}

