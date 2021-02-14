import { css } from '@emotion/react';

const taginput = css`
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

export default taginput;