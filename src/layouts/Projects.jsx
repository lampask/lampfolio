import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Card, Pagination } from '../components';

const Wrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    background: #141414;
    display: flex;
`;

const Text = styled.div`
    width: 50%;
    margin: auto;
    color: white;
    text-align: center;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    margin-top: 3rem;
`;

const Projects = (props) => {
    return (
        <Wrapper>
            <Text>
                <h1>Projects</h1>
                <p>Here is listed the majority of projects that I have been worlking on.</p>
                {props.children}
                <input type="text"></input>
                <Grid>
                    {props.data.allGoogleSpreadsheetData.nodes.map((project) => (
                        <Card key={project.id} data={project} />
                    ))}
                </Grid>
                <Pagination numPages={8} />
            </Text>
        </Wrapper>
    )
};
  
export default Projects;