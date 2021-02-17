import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from '@emotion/styled';
import Portal from "./Portal";

const DialogWrapper = styled.div`
	z-index: 2;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	height: 60%;
	.dialog-container {
		color: white;
		background-color: #161616;
		border: 3px solid white;
		border-radius: 10px;
	}
	.dialog-header {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 0;

		button {
			border: none;
			background-color: transparent;
			font-weight: bold;
			color: white;
			cursor: pointer;
			font-size: 30px;
			padding: 0;
			margin: 0;
		}
	}
	.dialog-content {
		padding: 1rem;
		padding-top: 0;
	}
`;

const Overlay = styled.div`
	position: fixed;
	display: block;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
`;

const Dialog = forwardRef((props, ref) => {

  const [display, setDisplay] = useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        openDialog: (data) => handleOpen(data),
        closeDialog: () => handleClose(),
      }
    }
  )

  const handleOpen = (data) => {
	setDisplay(true);
	props.dataCallback(data);
  }

  const handleClose = () => {
    setDisplay(false);
  }

  if (display) {
    return (
		<Portal>
			<Overlay />
			<DialogWrapper>
				<div className="dialog-container">
					<div className="dialog-header">
						<span>{props.title}</span>
						<button onClick={handleClose}>×</button>
					</div>
					<div className="dialog-content">
						{props.children}
					</div>
				</div>
			</DialogWrapper>
		</Portal>
    )
  }

  return null
})

export default Dialog