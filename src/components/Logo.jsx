import React from 'react';
import styled from '@emotion/styled';

const NavImage = styled.img`
	height: 2em;
	margin: 0;
`;

const Logo = () => <NavImage draggable="false" src={'logo/logo.svg'} alt="Yeetus feetus" />;

export default Logo;
