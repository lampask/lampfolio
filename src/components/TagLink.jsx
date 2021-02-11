import React from 'react'
import styled from '@emotion/styled';

const StyledLink = styled.button`
    border: transparent;
    border-radius: 5px;
    background: transparent;
    color: white;
    font-style: oblique;
    transition: color .1s, background .2s;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    &:hover {
        color: ${(props) => props.color != "transparent" ? "#161616" : "white"};
        background: ${(props) => props.color};
        text-decoration: underline;
        cursor: pointer;
    }
    a[target="_blank"]:after {
        background-image: url(icons/extLink.svg);
        background-size: 10px 10px;
        display: inline-block;
        width: 10px; 
        height: 10px;
        content:"";
    }
`;


const TagLink = (props) => {
    return (
        <StyledLink color={props.color != null ? props.color : "transparent"} >
            <a href={props.to} target={props.target}>{props.children}</a>
        </StyledLink>
    )
}

export default TagLink
