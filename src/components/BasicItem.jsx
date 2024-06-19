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

  const scale = props.scale * 0.0005;
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
      meshRef.current.rotation.x += delta;
      meshRef.current.scale.set(
        state.size.width * scale,
        state.size.width * scale,
        state.size.width * scale
      );
    }
  });

  let geometry;
  switch (props.shape) {
    case "box":
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      break;
    case "sphere":
      geometry = <sphereGeometry args={[0.5, 16, 16]} />;
      break;
    default:
      geometry = <boxGeometry args={[1, 1, 1]} />;
  }

  return (
    <mesh
      {...props}
      ref={meshRef}
      //scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      {geometry}
      <meshStandardMaterial color={hovered ? "orange" : props.color} />
    </mesh>
  );
};

export default BasicItem;
