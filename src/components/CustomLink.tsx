import styled from '@emotion/styled';
import { Link } from 'gatsby';

const CustomLink = styled(Link)(() => ({
  color: 'inherit',

  '&:hover': {
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  '&:active': {
    textDecoration: 'none',
  },
}));

export default CustomLink;
