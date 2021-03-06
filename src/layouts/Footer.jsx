import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.footer`
	position: relative;
	padding-top: 2rem;
	bottom: 0;
	font-family: ${(props) => props.theme.fontFamily.body};
	font-weight: 500;
	@media (max-width: ${(props) => props.theme.breakpoints.s}) {
		padding-top: 7rem;
	}
`;

const Text = styled.div`
	margin: 0;
	padding-bottom: 2rem;
	color: ${(props) => props.theme.colors.white.light};
`;

const Footer = () => (
	<Wrapper id="footer">
		<Text>
			<span>Footer</span>
		</Text>
	</Wrapper>
);
export default Footer;
