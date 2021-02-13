import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledButton = styled.button`
	${(props) => { 
		if (props.noStyle != null ? !props.noStyle : true) {
			return `
				border: transparent;
				border-radius: 5px;
				background: transparent;
				color: white;
				font-style: oblique;
				transition: color 0.1s, background 0.2s;
				-moz-box-sizing: border-box;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				&:hover {
					color: ${(props) => (props.color != 'transparent' ? '#161616' : 'white')};
					background: ${(props) => props.color};
					text-decoration: underline;
					cursor: pointer;
				}
				a {
					color: white;
					font-style: oblique;
				}
			`;
		} else {
			return `
				border: none;
				background: transparent;
				color: white;
				margin: 0;
				padding: 0;
			`;
		}
	}}
`;

const StyledLink = styled.a`
	${(props) => { 
		if (props.noIcon != null ? !props.noIcon : true) {
			return `
				&[target='_blank']:after {
					background-image: url(icons/extLink.svg);
					background-size: 10px 10px;
					display: inline-block;
					width: 10px;
					height: 10px;
					content: '';
				}
				`;
			}
		}}
`;

const TagLink = (props) => {
	if (props.internal != null ? props.internal : false) {
		return (
			<AnchorLink to={props.to}>
				<StyledButton color={props.color != null ? props.color : 'transparent'}>{props.children}</StyledButton>
			</AnchorLink>
		);
	} else {
		return (
			<StyledLink noIcon={props.noIcon} href={props.to} {...props} rel="noreferer">
				<StyledButton noStyle={props.noStyle} color={props.color != null ? props.color : 'transparent'}>{props.children}</StyledButton>
			</StyledLink>
		);
	}
};

TagLink.propTypes = {
	internal: PropTypes.bool,
	noIcon: PropTypes.bool,
	noStyle: PropTypes.bool,
	color: PropTypes.string,
	to: PropTypes.string.isRequired,
	children: PropTypes.node,
};

export default TagLink;
