import Content from '@components/Content';
import Sidebar from '@components/Sidebar';
import { getFolderStructureTree } from '@utils/helpers';
import ResetCSS from '@components/ResetCSS';

export default function Post({
  pageContext: {
    allMarkdownRemark: { edges },
  },
  path,
}: any) {
  const documentTree = getFolderStructureTree(edges);
  const selectedDocument = getSelectedDocument(edges, path);

  return (
    <>
      <ResetCSS />
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
