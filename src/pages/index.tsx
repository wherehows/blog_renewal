import { graphql } from 'gatsby';
import Sidebar from '@components/Sidebar';
import Content from '@components/Content';
import {
  getAllDocumentsWithSort,
  getFolderStructureTree,
} from '@utils/helpers';
import GlobalCss from '@components/GlobalCss';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  const documentTree = getFolderStructureTree(edges);
  const documents = getAllDocumentsWithSort(edges);

  return (
    <>
      <GlobalCss />
      <Sidebar documentTree={documentTree} />
      <Content documents={documents} />
    </>
  );
};

export default IndexPage;

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
            grandParent
            parent
            title
            subTitle
            parent
            slug
          }
        }
      }
    }
  }
`;
