import React, { useRef } from 'react';
import {  useLoader, useGraph } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import PropTypes from 'prop-types';


const process = (props) => {
	const m = useLoader(
		MTLLoader,
		props.nodes.mat.nodes.filter((node) => node.publicURL.match(`/(${props.query})`))[0].publicURL
	);
	const object = useLoader(
		OBJLoader,
		props.nodes.obj.nodes.filter((node) => node.publicURL.match(`/(${props.query})`))[0].publicURL,
		(loader) => {
			m.preload();
			loader.setMaterials(m);
		}
	);
	const { nodes } = useGraph(object);
	return { nodes, m };
};

const SingleMesh = (props) => {
	const group = useRef();
	const { nodes, m } = process(props);

	return (
		<group ref={group} {...props} dispose={null} rotation={[0.5, -0.5, 0]}>
			<spotLight position={[-2, 16, 5]} intensity={0.1} distance={20} angle={1} />
			<mesh geometry={nodes[props.geometry].geometry} material={m.materials[props.material]}>
				{/* <meshToonMaterial /> */}
			</mesh>
		</group>
	);
};

SingleMesh.propTypes = {
	geometry: PropTypes.object,
	material: PropTypes.object,
};

export default SingleMesh;
