import React, { useState, forwardRef } from "react";
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Dialog from './Dialog';

const Sidebar = styled.div`
	width: 20%;
`;

const ProjectDialog = forwardRef((props, ref) => {
	const [data, setData] = useState();

	const handle = (data) => {
		setData(data);
	};
	
	return (
		<Dialog title={data ? data.title : ""} dataCallback={handle} ref={ref}>
			{ data && <div>
				<Sidebar>
					<Image fluid={data.productImage.childImageSharp.fluid} />
					<ul>
						<li>adfsadfs</li>
					</ul>
				</Sidebar>
			</div>
		}
		</Dialog>
	);
});

export default ProjectDialog;