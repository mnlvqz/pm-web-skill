import React, { Suspense, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const ModelItem = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const { nodes, materials } = useGLTF("/pm-web-skill/assets/ModelD.glb");

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
      meshRef.current.scale.set(
        state.size.width * 0.001,
        state.size.width * 0.001,
        state.size.width * 0.001
      );
    }
  });

  return (
    <Suspense fallback={null}>
      <mesh
        {...props}
        dispose={null}
        ref={meshRef}
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        castShadow
        receiveShadow
      ></mesh>
    </Suspense>
  );
};

export default ModelItem;
