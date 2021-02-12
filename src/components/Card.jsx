import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Tag } from '../components';

const Wrapper = styled.div`
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: .5rem;
    transition: all .2s ease-in-out;
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
    margin: .5rem;
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
    margin-top: .5rem;
    flex-wrap: wrap;
`;

const Card = (props) => {
    const fluid = props.data.productImage.childImageSharp.fluid;
    console.log(fluid);
    return (
        <Wrapper>
            <Image 
                fluid={{...fluid, aspectRatio: 1}}
                objectFit="contain"
                loading="lazy"
                draggable="false" 
            />
            <Details>
                <Title className="title">{props.data.title}</Title>
                <Description className="desc">{props.data.description}</Description>
                <Tags>
                    <Tag tag="ree" />
                    <Tag tag="reee" />
                    <Tag tag="reee" />
                    <Tag tag="reeee" />
                    <Tag tag="reee" />
                    <Tag tag="reee" />
                    <Tag tag="reeeee" />
                    <Tag tag="reee" />
                    <Tag tag="reee" />
                    <Tag tag="ree" />
                    <Tag tag="reee" />
                    <Tag tag="reee" />
                </Tags>
            </Details>
        </Wrapper>
    );
}

export default Card;
