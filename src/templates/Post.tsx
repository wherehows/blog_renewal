import Content from '@components/Content';
import Sidebar from '@components/Sidebar';
import { getFolderStructureTree } from '@utils/helpers';
import GlobalCss from '@components/GlobalCss';

interface PostProps {
  pageContext: IndexPageProps['data'];
  path: string;
}

export default function Post({
  pageContext: {
    allMarkdownRemark: { edges },
  },
  path,
}: PostProps) {
  const documentTree = getFolderStructureTree(edges);
  const selectedDocument = getSelectedDocument(edges, path);

  return (
    <>
      <GlobalCss />
      <Sidebar documentTree={documentTree} />
      <Content selectedDocument={selectedDocument} />
    </>
  );
}

const getSelectedDocument = (edges: Edge[], targetDocumentPath: string) => {
  const edge = edges.find(({ node }: Edge) => {
    if (node.frontmatter.slug === targetDocumentPath) {
      return true;
    }
  });

  return edge && edge.node.html;
};

export const getDocuments = graphql`
  query getDocuments {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            grandParent
            parent
            slug
            subTitle
            title
          }
          html
        }
      }
    }
  }
`;
