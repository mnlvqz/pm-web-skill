import React from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Elements from "./assets/components/Elements";
import Overlay from "./assets/components/Overlay";

const App = () => {
  return (
    <Canvas orthographic camera={{ zoom: 200, position: [0, 0, 100] }}>
      <ScrollControls damping={0.25} pages={7}>
        <Elements />
        <Overlay />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
