import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import { Logo, TagLink } from '../components';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: ${(props) => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1em;
  color: white;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${(props) => props.theme.transitions.default.duration};
    &:hover {
      color: ${(props) => props.theme.colors.white.grey};
    }
  }
  div {
    display: flex;
    flex-direction: row;
  }
  p {
    margin: auto;
  }
`;

const NavBar = ({ children }) => (
  <Headroom calcHeightOnResize disableInlineStyles>
      <Nav>
        <div>
          <Logo />
          <p>Portfolio v1.1</p>
          {children}
        </div>
        <div>
          <TagLink>Activity</TagLink>
        </div>
      </Nav>
  </Headroom>
);

export default NavBar;