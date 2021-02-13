import React from 'react';
import styled from '@emotion/styled';
import { Card, Pagination } from '../components';
import PropTypes from 'prop-types';

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
	grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
	grid-auto-rows: auto;
	grid-gap: 1rem;
	margin-top: 3rem;
`;

const Projects = (props) => {
	return (
		<Wrapper id="projects">
			<Text>
				<h1>Projects</h1>
				<p>Here is listed the majority of projects that I have worked or am working on.</p>
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
	);
};

Projects.propTypes = {
	data: PropTypes.shape({
		allGoogleSpreadsheetData: PropTypes.shape({
			nodes: PropTypes.array,
		}),
	}),
	children: PropTypes.node,
};

export default Projects;
