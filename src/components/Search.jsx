import React, { useState, forwardRef } from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Tag } from '../components';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const StyledTagSearch = styled.div`
	.react-tags {
		position: relative;
		font-size: 1em;
		line-height: 1.2;
		cursor: text;
	}
	.react-tags__selected {
		display: flex;
		justify-content: center;
		margin: 1rem 0;
	}
	.react-tags__selected a {
		cursor: pointer;
	}
	.react-tags__search {
		display: block;
		border-bottom: 1px solid white;
		margin: 0 2.5rem;
		margin-bottom: 6px;
		max-width: 100%;
	}
	.react-tags__search-input {
		width: 100%;
		margin: 0;
		padding: 0;
		border: 0;
		outline: none;
		font-size: inherit;
		line-height: inherit;
		background: #141414;
		color: white;
	}
	.react-tags__search-input::-ms-clear {
		display: none;
	}
	.react-tags__suggestions {
		position: absolute;
		top: 120%;
		left: 0;
		width: 100%;
	}
	.react-tags__suggestions ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 0;
		list-style: none;
		background: transparent;
	}
	.react-tags__suggestions li {
		border: 1px solid transparent;
		border-radius: 2px;
		padding: 6px 8px;
		font-size: 1.8vh;
		vertical-align: middle;
	}
	.react-tags__suggestions li::before {
		content: '';
		background-image: url('icons/tag.svg');
		background-size: 0.8rem 0.8rem;
		display: inline-block;
		width: 0.8rem;
		height: 0.8rem;
	}
	.react-tags__suggestions li mark {
		text-decoration: underline;
		background: none;
		color: white;
		font-weight: 600;
	}
	.react-tags__suggestions li:hover {
		cursor: pointer;
		background: #1f1f1f;
	}
	.react-tags__suggestions li.is-active {
		background: #1f1f1f;
	}
	.react-tags__suggestions li.is-disabled {
		opacity: 0.5;
		cursor: auto;
	}
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
