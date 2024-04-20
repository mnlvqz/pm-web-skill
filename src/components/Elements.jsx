import React from "react";
import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

useThree;
const Elements = () => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <Scroll>
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={0.5}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ambientLight intensity={Math.PI / 2} />
      {/* Main title */}
      {/* Section A */}
      <mesh
        position={[width * -0.25, height * -1.0, 0]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[Math.PI / 4, Math.PI / 3, 0]}
      >
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="orange"></meshStandardMaterial>
      </mesh>
      {/* Section B */}
      <mesh position={[width * 0.25, height * -2.0, 0]} rotation={[0, 0, 0]}>
        <torusGeometry></torusGeometry>
        <meshStandardMaterial color="salmon"></meshStandardMaterial>
      </mesh>
      {/* Section C */}
      <mesh
        position={[width * -0.25, height * -3.0, 0]}
        rotation={[-Math.PI / 3, Math.PI / 4, -Math.PI / 2]}
      >
        <dodecahedronGeometry></dodecahedronGeometry>
        <meshStandardMaterial color="skyblue"></meshStandardMaterial>
      </mesh>
      {/* Section D */}
      <mesh
        position={[width * 0.25, height * -4.0, 0]}
        rotation={[-Math.PI / 3, Math.PI / 4, -Math.PI / 2]}
      >
        <coneGeometry></coneGeometry>
        <meshStandardMaterial color="aquamarine"></meshStandardMaterial>
      </mesh>
      {/* Section E */}
      <mesh
        position={[width * -0.25, height * -5.0, 0]}
        rotation={[-Math.PI / 2, Math.PI / 3, -Math.PI / 3]}
      >
        <tetrahedronGeometry></tetrahedronGeometry>
        <meshStandardMaterial color="mediumpurple"></meshStandardMaterial>
      </mesh>
      {/* End title */}
    </Scroll>
  );
};

export default Elements;
