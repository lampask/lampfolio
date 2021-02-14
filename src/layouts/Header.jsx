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
			cursor: pointer;
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
	button {
		margin-right: 20px;
	}
`;

const Header = (props) => {
	const [tag, setTag] = useState('...');
	const clear = () => setTag('...');
	return (
		<Wrapper id="header">
			<Model />
			<Text>
				<Links>
					<TagLink noIcon noStyle to="https://github.com/lampask" target="_blank">
						<img
							onMouseOver={() => setTag('@lampask')}
							onFocus={() => setTag('@lampask')}
							onMouseLeave={() => clear()}
							onBlur={() => clear()}
							src="icons/github.svg"
							alt=""
						/>
					</TagLink>
					<TagLink noIcon noStyle to="https://gitlab.com/lampask" target="_blank">
						<img
							onMouseOver={() => setTag('@lampask')}
							onFocus={() => setTag('@lampask')}
							onMouseLeave={() => clear()}
							onBlur={() => clear()}
							src="icons/gitlab.svg"
							alt=""
						/>
					</TagLink>
					<TagLink noIcon noStyle to="https://twitter.com/lmp1911" target="_blank">
						<img
							onMouseOver={() => setTag('@lmp1911')}
							onFocus={() => setTag('@lmp1911')}
							onMouseLeave={() => clear()}
							onBlur={() => clear()}
							src="icons/twitter.svg"
							alt=""
						/>
					</TagLink>
					<TagLink
						noIcon
						noStyle
						to="https://www.linkedin.com/in/adam-grambli%C4%8Dka-643658205/"
						target="_blank"
					>
						<img
							onMouseOver={() => setTag('Adam Gramblička')}
							onFocus={() => setTag('Adam Gramblička')}
							onMouseLeave={() => clear()}
							onBlur={() => clear()}
							src="icons/linkedin.svg"
							alt=""
						/>
					</TagLink>
				</Links>
				<small>{tag}</small>
				<h1>Adam Gramblička</h1>
				<Subtitle>
					I am <Counter birthday={new Date(2004, 2, 19)} /> year old developer, maker and tinkerer. <br />I
					create things using{' '}
					<TagLink
						internal
						color="green"
						to="/#projects"
						onClick={() => {
							var searchBar = props.projRef().current;
							searchBar.clearInput();
							searchBar.addTag({ id: 'c#', name: 'c#' });
						}}
					>
						Node
					</TagLink>
					,{' '}
					<TagLink internal color="orange" to="/#projects">
						JavaScript
					</TagLink>
					,{' '}
					<TagLink internal color="blue" to="/#projects">
						Python
					</TagLink>{' '}
					and{' '}
					<TagLink internal to="/#projects">
						others.
					</TagLink>
					<br />
					<br />
					<b>⌄ You can read more here:</b> <br />
					├──{' '}
					<TagLink internal to="/#about">
						about.md
					</TagLink>
					<br />
					├──{' '}
					<TagLink internal to="/#projects">
						projects/
					</TagLink>
					<br />│ ├──{' '}
					<TagLink internal to="/#projects">
						work-in-progress/
					</TagLink>
					<br />│ └──{' '}
					<TagLink internal to="/#projects">
						completed/
					</TagLink>
					<br />
					├── experiences
					<br />
					├──{' '}
					<TagLink target="_blank" to="#">
						blog.html
					</TagLink>
					<br />
					└── footer.md <br />
				</Subtitle>
				<Buttons>
					<Button internal to="/#about">
						Next
					</Button>
					<Button to="mailto:someone@lmpsk.me">Contact me</Button>
					<Button to="#">My CV</Button>
					<Button
						to="#"
						onClick={(e) => {
							window.close();
							e.currentTarget.innerHTML = ': (';
							return false;
						}}
					>
						Cancel
					</Button>
				</Buttons>
				{props.children}
			</Text>
		</Wrapper>
	);
};

export default Header;

Header.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
	projRef: PropTypes.func,
};

Header.defaultProps = {
	children: false,
};
('');
