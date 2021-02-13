import React, { Suspense } from 'react';
import SingleMesh from './SingleMesh';

const LampPost = (props) => {
	return (
		<Suspense fallback={null} >
			<SingleMesh {...props} query="post" geometry="Street_lamp_Cylinder" material="Material.001" />
		</Suspense>
	);
};

export default LampPost;
