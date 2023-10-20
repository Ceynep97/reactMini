import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";

export default function Test() {
  const Container = styled.div({});
  return (
    <div>
      <Container>
        <Canvas>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="purple" />
          </mesh>
        </Canvas>
      </Container>
    </div>
  );
}
