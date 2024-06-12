import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Overlay from "./components/Overlay";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  return (
    <Canvas>
      <ambientLight intensity={Math.PI * 0.5} />
      <ScrollControls horizontal={false} pages={10} damping={0.25}>
        <Scroll></Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Overlay />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
