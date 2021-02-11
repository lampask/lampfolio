import React from 'react'
import styled from '@emotion/styled';

const StyledButton = styled.button`
    padding: 0.3em 1em;
    background: none;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    transition: color 0.4s linear;
    position: relative;
    &:hover{
        color: #161616;
        text-decoration: ${(props) => props.noline ? "none" : "underline"};
    }
    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        z-index: -2;
    }
    &::before{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #161616;
        z-index: -1;
        transition: transform 0.5s;
        transform-origin: 0 0;
        transition-timing-function: cubic-bezier(.43,1.01,.31,.95);
        transform: scaleY(1);
    }
    &:hover::before{
        transform: scaleY(0);
    }
`;

const Button = (props) => {
    return (
        <a href={props.to}>
            <StyledButton {...props}>
                {props.children}
            </StyledButton>
        </a>
    )
}

export default Button
