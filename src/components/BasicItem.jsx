import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const BasicItem = (props) => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  /*

  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  useThree(
    (width, height) =>
      (meshRef.current.scale = [width * 0.25, width * 0.25, width * 0.25])
  );
  */
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
    <mesh
      {...props}
      ref={meshRef}
      //scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={hovered ? "hotpink" : props.color}
        metalness={1}
        roughness={0.1}
      />
    </mesh>
  );
};

export default BasicItem;
