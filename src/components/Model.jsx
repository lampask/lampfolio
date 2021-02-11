import React, { useRef, Suspense } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Canvas, useLoader, useGraph } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'

const process = (props) => {
  const m = useLoader(MTLLoader, props.nodes.mat.nodes.filter(node => node.publicURL.match(`/(${props.query})`))[0].publicURL);
  const object = useLoader(OBJLoader, props.nodes.obj.nodes.filter(node => node.publicURL.match(`/(${props.query})`))[0].publicURL, loader => {
    m.preload();
    loader.setMaterials(m)
  });
  const { nodes } = useGraph(object);
  return { nodes, m };
}

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
    )
}

const LampPost = (props) => {
    return <SingleMesh {...props} query="post" geometry="Street_lamp_Cylinder" material="Material.001" />;
};

export default function Model() {

    const posts = useStaticQuery(
      graphql`
        {
            obj: allFile(filter: {absolutePath: {regex: "/.*(.obj)$/"}}) {
                nodes {
                    publicURL
                }
            }
            mat: allFile(filter: {absolutePath: {regex: "/.*(.mtl)$/"}}) {
                nodes {
                    publicURL
                }
            }
        }
      `
    )
    
    return (
        <Canvas orthographic camera={{ zoom: 40, position: [0, 0, 100] }}>
            <directionalLight rotation={[-0.5, 0, -0.2]} intensity={0.2} />
            <ambientLight intensity={0.01} />
            <Suspense fallback={null}>
              <LampPost position={[-13, -6, 0]} nodes={posts} />
            </Suspense>
        </Canvas>
    )
}