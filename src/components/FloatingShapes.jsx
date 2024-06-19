import React from "react";
import BasicItem from "./BasicItem";

const FloatingShapes = (props) => {
  const numShapes = props.number;

  const getRandomPosition = () => {
    return [
      (Math.random() - 0.5) * props.width,
      (Math.random() - 0.5) * props.height + props.page * -props.height,
      0, // z position (-5 to 5)
    ];
  };

  const shapes = Array.from({ length: numShapes }).map((_, index) => (
    <BasicItem
      key={index}
      position={getRandomPosition()}
      scale={Math.random() * (1.0 - 0.1) + 0.1}
      rotation={[Math.PI / 3, Math.PI / 3, Math.PI / 3]}
      color={
        ["#F652A0", "#3AAFB9", "#BCECE0", "#4C5270", "#F6F6F6"][
          Math.floor(Math.random() * 5)
        ]
      }
      shape={["box", "torus", "sphere"][Math.floor(Math.random() * 3)]}
    />
  ));

  return <>{shapes}</>;
};

export default FloatingShapes;
