import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import {
	slideOutContainer,
	blinking,
	loading,
	textChange,
	typing,
	progressBar,
	bringToTop,
	setIntroText,
} from '../styles/keyframes';

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	margin: 0px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #161616;
	animation: ${slideOutContainer} 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 10s;
	animation-fill-mode: forwards;
`;

const CLine = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	font-size: 1em;
	font-weight: bold;
	display: flex;
	height: 1em;
	line-height: 1;
	animation: ${bringToTop} 4s cubic-bezier(0.97, 0.01, 0.36, 0.99) 1 10s forwards;
	overflow-wrap: break-word;
	z-index: 2001;
`;

const TypedText = styled.div`
	position: relative;
	text-decoration: none;
	background-color: #161616;
	color: white;
`;

const Progressbar = styled.span`
	white-space: pre;
	&:before {
		content: '';
		animation: ${progressBar} 8s cubic-bezier(0, 0.85, 0.18, 0.98) 1 4s;
	}
`;
const Text = styled.span`
	display: inline-block;
	white-space: pre;
	caret-color: transparent;
	color: transparent;
	text-shadow: 0 0 0 white;
	&:before {
		content: '';
		animation: ${setIntroText} 4s steps(1, end) 1, ${loading} 0.5s linear 16 4s;
	}
	&:after {
		content: ' ';
		animation: ${textChange} 8s cubic-bezier(0.68, 0.8, 0.76, 0.03) 1 4s;
	}
`;

const Cursor = styled.span`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	background: #161616;
	box-sizing: border-box;
	border-left: 0.5em solid;
	animation: ${typing} 3s steps(15, end) 2s forwards, ${blinking} 1s step-end infinite;
`;

const positionCaret = (container) => {
	if (typeof window.getSelection != 'undefined') {
		var range = document.createRange();
		range.selectNodeContents(container);
		range.collapse(false);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (typeof document.body.createTextRange != 'undefined') {
		var textRange = document.body.createTextRange();
		textRange.moveToElementText(container);
		textRange.collapse(false);
		textRange.select();
	}
};

const focusMethod = (e) => {
	var editableContent = e.currentTarget.children[0].children[1];
	editableContent.focus();
	positionCaret(editableContent);
};

const searchChanged = (e) => {
	if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') e.preventDefault();
	if (e.key === 'Escape') e.currentTarget.blur();
	if (e.key === 'z' && e.ctrlKey) {
		e.preventDefault();
		e.currentTarget.innerHTML = '';
		e.currentTarget.blur();
	}
	if (e.key === 'Enter') {
		e.preventDefault();
		e.currentTarget.innerHTML = '';
	}
};

const Intro = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Wrapper>
			<CLine onClick={(e) => focusMethod(e)}>
				{'>'}&nbsp;
				<TypedText>
					<Progressbar />
					<Text contentEditable="true" onKeyDown={(e) => searchChanged(e)} />
					<Cursor>&nbsp;</Cursor>
				</TypedText>
			</CLine>
		</Wrapper>
	);
};

export default Intro;
