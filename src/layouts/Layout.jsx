import React from 'react';
import { css, Global } from '@emotion/react';
import PropTypes from 'prop-types';
import { NavBar } from '.';
import { enableScroll } from '../styles/keyframes';
import headroom from '../styles/headroom';
import BaseLayout from './BaseLayout';

const Layout = ({ children }) => (
	<BaseLayout>
		<Global
			styles={css`
				body {
					display: flex;
					flex-direction: column;
					min-height: 100vh;
					overflow: hidden;
					animation: ${enableScroll} steps(1, end) 10s forwards;
				}
				${headroom}
			`}
		/>
		<NavBar />
		{children}
	</BaseLayout>
);

export default Layout;

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
