import React from 'react'
import styled from '@emotion/styled';

const Wrapper = styled.div`
    border: 1px solid ${(props) => props.color};
    border-radius: 4px;
    padding: .1rem;
    margin: .1rem;
    font-size: 1.8vh;
    display: grid;
    place-items: center;
    grid-auto-flow: column;
    img {
        width: .8rem;
        height: .8rem;
        margin: 0;
    }
`;

const Tag = (props) => {
    return (
        <Wrapper color={props.color != null ? props.color : "#e7e7e7"}>
            <img src="icons/tag.svg"/> 
            {props.tag}
        </Wrapper>
    )
}

export default Tag;
