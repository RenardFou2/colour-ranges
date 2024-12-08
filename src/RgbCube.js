import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const RgbCube = () => {
  return (
    <Canvas style={{ height: "500px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial attach="material-0" color="red" />    {/* Przód */}
        <meshBasicMaterial attach="material-1" color="green" />  {/* Tył */}
        <meshBasicMaterial attach="material-2" color="blue" />   {/* Lewa */}
        <meshBasicMaterial attach="material-3" color="white" />  {/* Prawa */}
        <meshBasicMaterial attach="material-4" color="yellow" /> {/* Góra */}
        <meshBasicMaterial attach="material-5" color="black" />  {/* Dół */}
      </mesh>
      <OrbitControls />
    </Canvas>
  );
};

export default RgbCube;
