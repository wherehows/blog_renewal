import Content from '@components/Content';
import Sidebar from '@components/Sidebar';
import { getFolderStructureTree } from '@utils/helpers';
import GlobalCss from '@components/GlobalCss';
import { graphql, PageProps } from 'gatsby';

interface QueryResultType {
  allMarkdownRemark: { edges: Edge[] };
}

export default function Post({
  data: {
    allMarkdownRemark: { edges },
  },
  path,
}: PageProps<QueryResultType>) {
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
