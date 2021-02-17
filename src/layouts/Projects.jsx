import React, { useState, useRef, forwardRef } from 'react';
import styled from '@emotion/styled';
import ProjectDialog from '../components/dialogs/ProjectDialog';
import { Card, Pagination, Search } from '../components';
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
	p {
		position: absolute;
		left: 0;
		right: 0;
	}
`;

const Projects = forwardRef((props, ref) => {
	const [tags, setTags] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [limit] = useState(9);
	const [pageNodeIndex, setPageNodeIndex] = useState(0);

	const dialog = useRef();

	const validateTags = (_tags) => {
		setTags(_tags);
		setSearchQuery('');
	};

	const validateQuery = (query) => {
		setSearchQuery(query);
	};

	const pageChange = (page) => {
		setPageNodeIndex(0 + page * limit);
	};

	const inTags = (str) => {
		if (tags.length != 0) {
			var result = false;
			if (str != null) {
				const arr = str.split(',');
				arr.forEach((item) => {
					tags.forEach((tag) => {
						if (tag.name == item) result = true;
					});
				});
			}
			return result;
		}
		return true;
	};

	const isQueryPart = (str) => {
		if (searchQuery != '') {
			var result = false;
			if (str != null) {
				if (str.toLowerCase().includes(searchQuery.toLowerCase())) {
					result = true;
				}
			}
			return result;
		}
		return true;
	};

	// Setup

	const filtered = props.data.allGoogleSpreadsheetData.nodes
		.filter((project) => inTags(project.tags) || inTags(project.language))
		.filter((project) => isQueryPart(project.title) || isQueryPart(project.description));

	const pageNum = Math.ceil(filtered.length / limit);

	const getDialog = () => {
		return dialog;
	};

	return (
		<Wrapper id="projects">
			<Text>
				<h1>Projects</h1>
				<p>Here is listed the majority of projects that I have worked or am working on.</p>
				{props.children}
				<Search validateTags={validateTags} validateQuery={validateQuery} ref={ref} />
				<Grid>
					{filtered.length != 0 ? (
						filtered
							.slice(pageNodeIndex, pageNodeIndex + limit)
							.map((project) => <Card dialogRef={getDialog} key={project.id} data={project} />)
					) : (
						<p>No matching projects found.</p>
					)}
				</Grid>
				<ProjectDialog ref={dialog} />
				<Pagination change={pageChange} numPages={pageNum} />
			</Text>
		</Wrapper>
	);
});

Projects.displayName = 'Projects';

Projects.propTypes = {
	data: PropTypes.shape({
		allGoogleSpreadsheetData: PropTypes.shape({
			nodes: PropTypes.array,
		}),
	}),
	children: PropTypes.node,
};

export default Projects;
