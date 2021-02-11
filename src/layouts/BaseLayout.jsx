import React, { Fragment } from 'react';
import { ThemeProvider, css, Global } from '@emotion/react'
import PropTypes from 'prop-types';
import theme from '../../config/theme';

const BaseLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body,
          #gatsby-focus-wrapper,
          #___gatsby {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            overflow: visible;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }
          body {
            --bg: #161616;
            --textNormal: #222;
            --textTitle: #222;
            --textLink: blue;
            --hr: hsla(0, 0%, 0%, 0.2);
            --a: ${theme.colors.black.base};

            background-color: var(--bg);
          }

          body.dark {
            -webkit-font-smoothing: antialiased;

            --bg: ${theme.colors.black.base};
            --textNormal: rgba(255, 255, 255, 0.88);
            --textTitle: ${theme.colors.white.base};
            --textLink: yellow;
            --hr: hsla(0, 0%, 100%, 0.2);
            --a: ${theme.colors.white.base};
          }
        `}
      />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default BaseLayout;

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};