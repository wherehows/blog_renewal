interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}
interface Edge {
  node: {
    frontmatter: {
      date: Date;
      title: string;
      subTitle: string;
      grandParent: string;
      parent: string;
      slug: string;
      index: number;
    };
    html: string;
    id: string;
  };
}

interface MarkdownDocument {
  date: Date;
  grandParent: string;
  parent: string;
  title: string;
  subTitle: string;
  index: number;
  slug: string;
  html: string;
  id: string;
}

interface IndexPageProps {
  data: {
    allMarkdownRemark: {
      edges: Edge[];
    };
  };
}

interface GrandParentData {
  [key: string]: {
    grandParent: string;
    parent: string;
    children: (MarkdownDocument | MarkdownDocumentNode)[];
  };
}

interface ParentData {
  [key: string]: MarkdownDocumentNode;
}

interface MarkdownDocumentNode {
  grandParent: string;
  parent: string;
  children: MarkdownDocument[];
}

type Theme = 'dark' | 'light';
