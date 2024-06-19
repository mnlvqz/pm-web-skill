import React from "react";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import Overlay from "./components/Overlay";
import Elements from "./components/Elements";

const App = () => {
  //const [backgroundColor, setBackgroundColor] = useState("orange");
  // orthographic
  // camera={{ fov: 45.0, zoom: 1, position: [0, 0, 50] }
  //<color attach="background" args={["#000000"]} />
  return (
    <Canvas orthographic camera={{ zoom: 200, position: [0, 0, 100] }}>
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={0.5}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <ambientLight intensity={Math.PI * 0.5} />
      <ScrollControls horizontal={false} pages={10} damping={0.25}>
        <Scroll>
          <Elements />
        </Scroll>
        <Scroll html style={{ width: "100%" }}>
          <Overlay />
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
