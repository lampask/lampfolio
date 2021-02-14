import React, { forwardRef } from "react";
import Dialog from './Dialog';

const ProjectDialog = forwardRef((props, ref) => {
	
	return (
		<Dialog title="project Dialog" ref={ref}>
			<h3>Modal title 1</h3>
		</Dialog>
	);
});

export default ProjectDialog;