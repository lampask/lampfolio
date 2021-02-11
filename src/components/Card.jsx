import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const Wrapper = styled.div`
    border: 2px solid #e7e7e7;
    border-radius: 4px;
    padding: .5rem;
    transition: all .2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const Card = (props) => {
    const fluid = props.data.productImage.childImageSharp.fluid;
    console.log(fluid);
    return (
        <Wrapper>
            <Image fluid={fluid}
                objectFit="contain"
                loading="eager" />
            <br />
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </Wrapper>
    );
}

export default Card;
