import "./AnimatedHeader.css";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	MeshDistortMaterial,
	Icosahedron,
	Html,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const MainMesh = (props) => {
	const mesh = useRef();
	useFrame((state, delta) => {
		mesh.current.rotation.z += -0.005;
		mesh.current.rotation.y += -0.005;
		mesh.current.rotation.x += -0.005;
	});

	return (
		<mesh {...props} ref={mesh}>
			<Icosahedron args={[props.scale, props.complexity]}>
				<MeshDistortMaterial
					attach="material"
					color={props.color}
					speed={1}
					distort={0.7}
					radius={1}
					wireframe={props.wireframe}
				/>
			</Icosahedron>
		</mesh>
	);
};

export default function AnimatedHeader() {
	return (
		<div className={"mainCanvas"}>
			<Canvas
				linear={true}
				gl={{
					alpha: true,
					antialias: true,
					stencil: false,
					depth: false,
				}}
			>
				<Suspense fallback={<Html center>Loading.</Html>}>
					<pointLight intensity={2.0} position={[20, 10, 10]} color="teal" />
					<spotLight
						intensity={1}
						position={[-20, -10, 20]}
						penumbra={1}
						color="white"
					/>

					<MainMesh
						position={[0, 0, 2.5]}
						scale={1}
						complexity={4}
						color={"white"}
						wireframe={true}
					/>
				
				</Suspense>
				<EffectComposer multisampling={0}>
					<Bloom
						luminanceThreshold={0.2}
						luminanceSmoothing={0.9}
						opacity={0.8}
					/>
				</EffectComposer>
			</Canvas>
		</div>
	);
}
