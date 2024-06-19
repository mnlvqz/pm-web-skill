import React from "react";
import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import BasicItem from "./BasicItem.jsx";
import ModelItem from "./ModelItem.jsx";
import FloatingShapes from "./FloatingShapes.jsx";

const Elements = () => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <Scroll>
      {/* Main title */}
      {/* <BasicItem
        position={[0, 0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="orange"
      /> */}

      {/*       <ModelItem
        position={[width * -0.0, 0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
      /> */}

      {/* Section A */}

      <FloatingShapes number={20} width={width} height={height} page={0} />
      <FloatingShapes number={20} width={width} height={height} page={1} />
      <FloatingShapes number={20} width={width} height={height} page={2} />
      <FloatingShapes number={20} width={width} height={height} page={3} />
      <FloatingShapes number={20} width={width} height={height} page={4} />
      <FloatingShapes number={20} width={width} height={height} page={5} />
      <FloatingShapes number={20} width={width} height={height} page={6} />
      <FloatingShapes number={20} width={width} height={height} page={7} />
      <FloatingShapes number={20} width={width} height={height} page={8} />
      <FloatingShapes number={20} width={width} height={height} page={9} />
      <FloatingShapes number={20} width={width} height={height} page={10} />
      <FloatingShapes number={20} width={width} height={height} page={11} />
      <FloatingShapes number={20} width={width} height={height} page={12} />
      <FloatingShapes number={20} width={width} height={height} page={13} />
      <FloatingShapes number={20} width={width} height={height} page={14} />
      <FloatingShapes number={20} width={width} height={height} page={15} />

      {/* End title */}
    </Scroll>
  );
};

export default Elements;
