import React from 'react';
import styled from '@emotion/styled';
import { BaseLayout } from '../layouts';

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 10em;
`;

const notFound = () => {
	return (
		<BaseLayout>
			<Wrapper>404 not found</Wrapper>
		</BaseLayout>
	);
};

export default notFound;
