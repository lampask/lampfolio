import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Counter, Model, Button, TagLink } from '../components';

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

// @media (max-width: ${(props) => props.theme.breakpoints.m}) {
//   height: 300px;
// }
// @media (max-width: ${(props) => props.theme.breakpoints.s}) {
//   height: 275px;
// }

const Text = styled.div`
  color: ${(props) => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  max-width: ${(props) => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: flex-start;
  margin-left: 30rem;
`;

const Subtitle = styled.p`
  max-width: 650px;
  font-size: 1vw;
  color: ${(props) => props.theme.colors.white.light};
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 40px;
    height: auto;
    fill: white;
    padding-right: 10px;
    &:hover {
      width: 41px;
    }
  }
  small {
    color: grey;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  a {
    padding-right: 20px;
  }
`;

const Header = ({ children }) => {
  const [tag, setTag] = useState("...");
  const clear = () => setTag("...");
  return (
    <Wrapper>
      <Model />
      <Text>
        <Links>
          <a href="https://github.com/lampask" target="_blank"><img onMouseOver={() => setTag("@lampask")} onMouseLeave={()=>clear()} src="icons/github.svg" /></a>
          <a href="https://gitlab.com/lampask" target="_blank"><img onMouseOver={() => setTag("@lampask")} onMouseLeave={()=>clear()} src="icons/gitlab.svg" /></a>
          <a href="https://twitter.com/lmp1911" target="_blank"><img onMouseOver={() => setTag("@lmp1911")} onMouseLeave={()=>clear()} src="icons/twitter.svg" /></a>
          <a href="https://www.linkedin.com/in/adam-grambli%C4%8Dka-643658205/" target="_blank"><img onMouseOver={() => setTag("Adam Gramblička")} onMouseLeave={()=>clear()} src="icons/linkedin.svg" /></a>
        </Links>
        <small>{tag}</small>
        <h1>Adam Gramblička</h1>
        <Subtitle> 
          I am <Counter birthday={ new Date(2004,2,19) } /> year old developer, maker and tinkerer. <br />
          I create things using <TagLink color="green">Node</TagLink>, <TagLink color="orange">JavaScript</TagLink>, <TagLink color="blue">Python</TagLink> and <TagLink>others.</TagLink><br />
          <br />
          <b>⌄ You can read more here:</b> <br />
          ├── about.md<br />
          ├── projects/<br />
          │   ├── work-in-progress/<br />
          │   └── completed/<br />
          ├── experiences<br />
          ├── <TagLink target="_blank">blog.html</TagLink><br />
          └── footer.md <br />
        </Subtitle>
        <Buttons>
          <Button to="#">Next</Button>
          <Button to="mailto:someone@lmpsk.me">Contact me</Button>
          <Button to="#">My CV</Button>
          <Button onClick={(e) => {window.close(); e.currentTarget.innerHTML = ": ("; return false;}}>Cancel</Button>
        </Buttons>
        {children}
      </Text>
    </Wrapper>
  )
};

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
};

Header.defaultProps = {
  children: false,
};
``