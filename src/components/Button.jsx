import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledButton = styled.button`
	padding: 0.3em 1em;
	background: none;
	color: white;
	border: 2px solid white;
	cursor: pointer;
	transition: color 0.4s linear;
	position: relative;
	&:hover {
		color: #161616;
		text-decoration: ${(props) => (props.noline ? 'none' : 'underline')};
	}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: white;
		z-index: -2;
	}
	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #161616;
		z-index: -1;
		transition: transform 0.5s;
		transform-origin: 0 0;
		transition-timing-function: cubic-bezier(0.43, 1.01, 0.31, 0.95);
		transform: scaleY(1);
	}
	&:hover::before {
		transform: scaleY(0);
	}
`;

const Button = (props) => {
	return (
		<AnchorLink href={props.to}>
			<StyledButton {...props}>{props.children}</StyledButton>
		</AnchorLink>
	);
};

Button.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
