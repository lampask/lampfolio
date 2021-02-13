import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Canvas } from 'react-three-fiber';
import loadable from '@loadable/component';

const LoadableLampPost = loadable(() => import('./models/LampPost'));

export default function Model() {
	const posts = useStaticQuery(
		graphql`
			{
				obj: allFile(filter: { absolutePath: { regex: "/.*(.obj)$/" } }) {
					nodes {
						publicURL
					}
				}
				mat: allFile(filter: { absolutePath: { regex: "/.*(.mtl)$/" } }) {
					nodes {
						publicURL
					}
				}
			}
		`
	);

	return (
		<Canvas orthographic camera={{ zoom: 40, position: [0, 0, 100] }}>
			<directionalLight rotation={[-0.5, 0, -0.2]} intensity={0.2} />
			<ambientLight intensity={0.01} />
			<LoadableLampPost position={[-13, -6, 0]} nodes={posts} />
		</Canvas>
	);
}
