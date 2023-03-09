import styled from '@emotion/styled';
import { SIDEBAR_WIDTH } from '@utils/const';
import CategoryItem from './CategoryItem';

interface SidebarProps {
  documentTree: GrandParentData[keyof GrandParentData][];
}

const Sidebar = ({ documentTree }: SidebarProps) => {
  return (
    <Wrapper>
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
  color: '#ba7f4a',
  overflow: 'scroll',
}));

const CategoryList = styled('ul')(() => ({
  width: '18rem',
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'relative',
  padding: 0,
}));
