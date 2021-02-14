import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Tag } from '../components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	border: 2px solid #e7e7e7;
	border-radius: 4px;
	padding: 0.5rem;
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.05);
		cursor: pointer;
	}
	Image {
		margin: auto;
	}
`;

const Details = styled.div`
	overflow: hidden;
`;

const Title = styled.h6`
	margin: 0.5rem;
	font-weight: bold;
`;

const Description = styled.h6`
	font-size: 1.8vh;
	margin: 0;
`;

const Tags = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 0.5rem;
	flex-wrap: wrap;
`;

const Card = (props) => {
	const fluid = props.data.productImage.childImageSharp.fluid;
	return (
		<Wrapper role="button" tabIndex={0} onClick={() => {
			props.dialogRef().current.openDialog();
		}}>
			<Image fluid={{ ...fluid, aspectRatio: 1 }} objectFit="contain" loading="lazy" draggable={false} />
			<Details>
				<Title className="title">{props.data.title}</Title>
				<Description className="desc">{props.data.description}</Description>
				<Tags>
					{props.data.tags ? props.data.tags.split(',').map((tag, i) => <Tag key={i} tag={tag} />) : null}
				</Tags>
			</Details>
		</Wrapper>
	);
};

Card.propTypes = {
	data: PropTypes.shape({
		productImage: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fluid: PropTypes.object,
			}),
		}),
		title: PropTypes.string,
		description: PropTypes.string,
		tags: PropTypes.string,
	}),
};

export default Card;
