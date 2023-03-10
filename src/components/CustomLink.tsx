import styled from '@emotion/styled';
import { Link } from 'gatsby';

const CustomLink = styled(Link)(() => ({
  color: 'inherit',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'none',
  },

  '&:active': {
    textDecoration: 'none',
  },
}));

export default CustomLink;
