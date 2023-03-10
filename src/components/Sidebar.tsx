import styled from '@emotion/styled';
import { SIDEBAR_PURE_WIDTH, SIDEBAR_WIDTH } from '@utils/const';
import CategoryItem from './CategoryItem';
import SidebarHeader from './SidebarHeader';

interface SidebarProps {
  documentTree: GrandParentData[keyof GrandParentData][];
}

const Sidebar = ({ documentTree }: SidebarProps) => {
  return (
    <Wrapper>
      <SidebarHeader />
      <CategoryList>
        {documentTree.map((folder, index) => (
          <CategoryItem key={index} folder={folder} />
        ))}
      </CategoryList>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled('div')(() => ({
  width: SIDEBAR_WIDTH,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'fixed',
  left: 0,
  top: 0,
  overflow: 'scroll',
}));

const CategoryList = styled('ul')(() => ({
  width: SIDEBAR_PURE_WIDTH,
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  padding: 0,
}));
