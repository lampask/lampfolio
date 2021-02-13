import { css } from '@emotion/react';
import theme from '../../config/theme';

const headroom = css`
	.headroom-wrapper {
		position: fixed;
		width: 100%;
		z-index: 2000;
		top: 0;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.headroom {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 100%;
		padding: 0.4rem 1rem;
		svg {
			height: 2.5rem;
			g {
				fill: ${theme.colors.white.base};
			}
		}
	}
`;

export default headroom;
