import styled from '@emotion/styled';
import { SIDEBAR_PURE_WIDTH } from '@utils/const';
import CustomLink from './CustomLink';
import DarkModeToggle from './DarkModeToggle';

const SidebarHeader = () => {
  return (
    <Wrapper>
      <Name to="/">Younghoo Kim</Name>
      <SubFeature>
        <DarkModeToggle />
      </SubFeature>
    </Wrapper>
  );
};

export default SidebarHeader;

const Wrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.6rem',
  width: SIDEBAR_PURE_WIDTH,
}));

const Name = styled(CustomLink)(() => ({
  fontWeight: 'bold',
}));

const SubFeature = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));
