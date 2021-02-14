import React, { useState, forwardRef } from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Tag } from '../components';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import taginput from '../styles/taginput';
import PropTypes from 'prop-types';

const StyledTagSearch = styled.div`
	${taginput}
`;

function TagComponent({ tag, onDelete }) {
	return (
		<div role="button" tabIndex={0} onClick={onDelete} onKeyDown={onDelete}>
			<Tag tag={tag.name} />
		</div>
	);
}

TagComponent.propTypes = {
	tag: PropTypes.shape({
		id: PropTypes.any,
		name: PropTypes.string,
	}),
	onDelete: PropTypes.func,
};

const delimiters = ['Enter', 'Comma'];

const Search = forwardRef((props, ref) => {
	const fetchTags = useStaticQuery(
		graphql`
			{
				tags: allGoogleSpreadsheetTags {
					nodes {
						tags
					}
				}
				lang: allGoogleSpreadsheetLanguage {
					nodes {
						lang
					}
				}
			}
		`
	);
	const [tags, setTags] = useState([]);
	const [suggestions] = useState(
		fetchTags.tags.nodes
			.map((node) => {
				return { id: node.tags, name: node.tags };
			})
			.concat(
				fetchTags.lang.nodes.map((node) => {
					return { id: node.lang, name: node.lang };
				})
			)
	);
	const handleDelete = (i) => {
		const t = tags.filter((tag, index) => index !== i);
		setTags(t);
		props.validateTags(t);
	};

	const handleAddition = (tag) => {
		const t = [...tags, tag];
		setTags(t);
		props.validateTags(t);
	};

	return (
		<div>
			<StyledTagSearch>
				<ReactTags
					ref={ref}
					tags={tags}
					placeholderText="Search"
					delimiters={props.delimiters}
					suggestions={suggestions}
					onDelete={handleDelete}
					onAddition={handleAddition}
					allowBackspace={false}
					tagComponent={TagComponent}
					onInput={props.validateQuery}
				/>
			</StyledTagSearch>
		</div>
	);
});

Search.displayName = 'Search';

Search.propTypes = {
	delimiters: PropTypes.array,
	validateTags: PropTypes.func,
	validateQuery: PropTypes.func,
};

Search.defaultProps = {
	delimiters: delimiters,
};

export default Search;
