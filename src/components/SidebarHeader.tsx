import styled from '@emotion/styled';
import { SIDEBAR_PURE_WIDTH } from '@utils/const';
import { Link } from 'gatsby';
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

const Name = styled(Link)(() => ({}));

const SubFeature = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
