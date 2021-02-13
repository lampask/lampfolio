import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	border: 1px solid ${(props) => props.color};
	border-radius: 4px;
	padding: 0.1rem;
	margin: 0.1rem;
	font-size: 1.8vh;
	display: grid;
	place-items: center;
	grid-auto-flow: column;
	img {
		width: 0.8rem;
		height: 0.8rem;
		margin: 0;
	}
`;

const Tag = (props) => {
	return (
		<Wrapper color={props.color != null ? props.color : '#e7e7e7'}>
			<img src="icons/tag.svg" alt="" />
			{props.tag}
		</Wrapper>
	);
};

Tag.propTypes = {
	color: PropTypes.string,
	tag: PropTypes.string,
};

export default Tag;
