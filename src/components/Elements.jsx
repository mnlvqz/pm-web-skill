import React from "react";
import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import BasicItem from "./BasicItem.jsx";
import ModelItem from "./ModelItem.jsx";

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

      <ModelItem
        position={[width * -0.0, 0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
      />

      {/* Section A */}
      <BasicItem
        position={[width * -0.17, height * -0.83, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="orange"
      />
      {/* Section B */}
      <BasicItem
        position={[width * 0.25, height * -2.0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="salmon"
      />
      {/* Section C */}
      <BasicItem
        position={[width * -0.25, height * -3.0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="skyblue"
      />
      {/* Section D */}
      <BasicItem
        position={[width * 0.25, height * -4.0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="aquamarine"
      />
      {/* Section E */}
      <BasicItem
        position={[width * -0.25, height * -5.0, 0]}
        rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
        color="mediumpurple"
      />
      {/* End title */}
    </Scroll>
  );
};

export default Elements;