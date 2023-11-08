import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import texturesData from "../../data/textures.json";

export function K087(props) {
  const { nodes, materials } = useGLTF("/models/K087.glb");

  const selectedBaseColor = texturesData.find(
    (texture) => texture.id === props.baseColor
  );

  // const selectedCushionColor = texturesData.find(
  //   (texture) => texture.id === props.cushionColor
  // );

  const baseColor = useTexture(selectedBaseColor.url);
  // const cushionColor = useTexture(selectedCushionColor.url);

  baseColor.wrapS = baseColor.wrapT = THREE.RepeatWrapping;
  baseColor.repeat.set(10, 10);

  // cushionColor.wrapS = cushionColor.wrapT = THREE.RepeatWrapping;
  // cushionColor.repeat.set(10, 10);
  return (
    <group {...props} dispose={null}>
      <mesh
        name="armSupport_left"
        geometry={nodes.armSupport_left.geometry}
        material={nodes.armSupport_left.material}
        position={[-1.873, 0.2, -0.056]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="armSupport_right"
        geometry={nodes.armSupport_right.geometry}
        material={nodes.armSupport_right.material}
        position={[1.873, 0.2, -0.056]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="backseat"
        geometry={nodes.backseat.geometry}
        material={nodes.backseat.material}
        position={[-0.346, 0.2, -1.343]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="base"
        geometry={nodes.base.geometry}
        material={nodes.base.material}
        position={[-0.552, 0.139, 0.076]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="leg_lf"
        geometry={nodes.leg_lf.geometry}
        material={nodes.leg_lf.material}
        position={[-1.007, 0.055, 0.508]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={0.001}
      />
      <mesh
        name="leg_lr"
        geometry={nodes.leg_lr.geometry}
        material={nodes.leg_lr.material}
        position={[-0.997, 0.055, -0.518]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={0.001}
      />
      <mesh
        name="leg_rf"
        geometry={nodes.leg_rf.geometry}
        material={nodes.leg_rf.material}
        position={[0.994, 0.055, 0.52]}
        rotation={[Math.PI / 2, 0, -2.356]}
        scale={0.001}
      />
      <mesh
        name="leg_rr"
        geometry={nodes.leg_rr.geometry}
        material={nodes.leg_rr.material}
        position={[1.005, 0.055, -0.506]}
        rotation={[Math.PI / 2, 0, 2.356]}
        scale={0.001}
      />
      <mesh
        name="pillow_left"
        geometry={nodes.pillow_left.geometry}
        material={nodes.pillow_left.material}
        position={[-0.745, 0.004, 0.022]}
        rotation={[0.076, -0.105, -0.099]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="pillow_right"
        geometry={nodes.pillow_right.geometry}
        material={nodes.pillow_right.material}
        position={[0.737, 0.004, 0.026]}
        rotation={[-3.066, -0.105, -0.099]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="seat_left"
        geometry={nodes.seat_left.geometry}
        material={nodes.seat_left.material}
        position={[-1.885, 0.238, -0.056]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="seat_right"
        geometry={nodes.seat_right.geometry}
        material={nodes.seat_right.material}
        position={[1.88, 0.238, -0.056]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="Box446001"
        geometry={nodes.Box446001.geometry}
        material={nodes.Box446001.material}
        position={[-0.421, 0.582, -0.338]}
        rotation={[-0.262, 0, 0]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="Box480002"
        geometry={nodes.Box480002.geometry}
        material={nodes.Box480002.material}
        position={[0.425, 0.582, -0.338]}
        rotation={[-0.262, 0, 0]}
        scale={0.001}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/K087.glb");
