import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	margin: 2rem 0;
	display: flex;
	flex-direction: row;
	justify-content: center;

	button {
		color: white;
		background: transparent;
		border: none;
		cursor: pointer;
	}

	.curr {
		text-decoration: underline;
		font-weight: bold;
		pointer-events: none;
	}

	.control {
		font-weight: bold;
	}
`;

const Pagination = (props) => {
	const [currPage, setCurrPage] = useState(props.currPage ? props.currPage : 0);
	const num = props.numPages != null ? props.numPages : 1;

	const changePage = (e) => {
		const page = parseInt(e.currentTarget.dataset.index.toString());
		setCurrPage(page);
		props.change(page);
	};

	return (
		<Wrapper>
			<button
				className="control"
				onClick={() => {
					const pNum = (num + ((currPage - 1) % num)) % num;
					setCurrPage(pNum);
					props.change(pNum);
				}}
			>
				{'<'}
			</button>
			{[...Array(num)].map((x, i) => (
				<button className={i === currPage ? 'curr' : null} data-index={i} key={i} onClick={changePage}>
					{1 + i}
				</button>
			))}
			<button
				className="control"
				onClick={() => {
					const pNum = (currPage + 1) % num;
					setCurrPage(pNum);
					props.change(pNum);
				}}
			>
				{'>'}
			</button>
		</Wrapper>
	);
};
('');
export default Pagination;

Pagination.propTypes = {
	numPages: PropTypes.number,
	currPage: PropTypes.number,
	change: PropTypes.func,
};
