/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 wall.glb
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Walls(props) {
  const { nodes, materials } = useGLTF("/models/wall.glb");

  const bakedTexture = useTexture("/textures/walls/wall01.jpg");
  const bakedTexture2 = useTexture("/textures/walls/wall02.jpg");
  const bakedTexture3 = useTexture("/textures/walls/wall03.jpg");

  bakedTexture.flipY = false;
  bakedTexture2.flipY = false;
  bakedTexture3.flipY = false;

  bakedTexture.encoding = THREE.sRGBEncoding;
  bakedTexture2.encoding = THREE.sRGBEncoding;
  bakedTexture3.encoding = THREE.sRGBEncoding;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.wall.geometry}
        position={[-11.345, 16.195, 11.576]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <meshBasicMaterial
          map={
            props.wallTexture === "01"
              ? bakedTexture
              : props.wallTexture === "02"
              ? bakedTexture2
              : props.wallTexture === "03"
              ? bakedTexture3
              : null
          }
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/wall.glb");