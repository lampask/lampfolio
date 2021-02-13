import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background: #141414;
	display: flex;
`;

const Text = styled.div`
	width: 50%;
	margin: auto;
	color: white;
	h1 {
		text-align: center;
	}
`;

const About = ({ children }) => {
	return (
		<Wrapper id="about">
			<Text>
				<h1>About me</h1>
				<p></p>
				{children}
			</Text>
		</Wrapper>
	);
};

About.propTypes = {
	children: PropTypes.node,
};

export default About;
