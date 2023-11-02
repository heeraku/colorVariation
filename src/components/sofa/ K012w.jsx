import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import texturesData from "../../data/textures.json";

export default function K012w(props) {
  const { nodes, materials } = useGLTF("/models/K012.glb");

  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x000000, // Wireframe 색상
    wireframe: true, // Wireframe을 사용하도록 설정
  });

  for (const key in materials) {
    if (Object.hasOwnProperty.call(materials, key)) {
      materials[key] = wireframeMaterial;
    }
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        name="backrest_right"
        geometry={nodes.backrest_right.geometry}
        material={nodes.backrest_right.material}
        position={[0.669, 0.384, -0.91]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="backrest_right02"
        geometry={nodes.backrest_right02.geometry}
        material={nodes.backrest_right02.material}
        position={[-1.516, 0.384, 1.146]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="leg01"
        geometry={nodes.leg01.geometry}
        material={nodes.leg01.material}
        position={[1.556, 0, 0.473]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
        name="leg02"
        geometry={nodes.leg02.geometry}
        material={nodes.leg02.material}
        position={[0.884, 0, 0.473]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        name="leg03"
        geometry={nodes.leg03.geometry}
        material={nodes.leg03.material}
        position={[0.752, 0, -0.164]}
        rotation={[0, 0.611, 0]}
      />
      <mesh
        name="leg04"
        geometry={nodes.leg04.geometry}
        material={nodes.leg04.material}
        position={[-0.494, 0, -0.16]}
        rotation={[0, -0.698, 0]}
      />
      <mesh
        name="leg05"
        geometry={nodes.leg05.geometry}
        material={nodes.leg05.material}
        position={[-0.786, 0, 0.28]}
        rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
      />
      <mesh
        name="leg06"
        geometry={nodes.leg06.geometry}
        material={nodes.leg06.material}
        position={[-0.786, 0, 0.926]}
        rotation={[0, Math.PI / 3, 0]}
      />
      <mesh
        name="pillow_right"
        geometry={nodes.pillow_right.geometry}
        material={nodes.pillow_right.material}
        position={[1.26, 0.604, -0.881]}
        rotation={[1.35, -0.018, 0.014]}
      />
      <mesh
        name="pillow_right2"
        geometry={nodes.pillow_right2.geometry}
        material={nodes.pillow_right2.material}
        position={[-1.502, 0.605, 0.551]}
        rotation={[1.551, 0.221, -1.551]}
      />
      <mesh
        name="rubber_leg01"
        geometry={nodes.rubber_leg01.geometry}
        material={nodes.rubber_leg01.material}
        position={[1.568, 0, -0.898]}
      />
      <mesh
        name="rubber_leg02"
        geometry={nodes.rubber_leg02.geometry}
        material={nodes.rubber_leg02.material}
        position={[0.892, 0, -0.898]}
      />
      <mesh
        name="rubber_leg03"
        geometry={nodes.rubber_leg03.geometry}
        material={nodes.rubber_leg03.material}
        position={[0.735, 0, -0.898]}
      />
      <mesh
        name="rubber_leg04"
        geometry={nodes.rubber_leg04.geometry}
        material={nodes.rubber_leg04.material}
        position={[-0.456, 0, -0.898]}
      />
      <mesh
        name="rubber_leg05"
        geometry={nodes.rubber_leg05.geometry}
        material={nodes.rubber_leg05.material}
        position={[-1.539, 0, 0.278]}
      />
      <mesh
        name="rubber_leg06"
        geometry={nodes.rubber_leg06.geometry}
        material={nodes.rubber_leg06.material}
        position={[-1.539, 0, 0.911]}
      />
      <mesh
        name="seat_right"
        geometry={nodes.seat_right.geometry}
        material={nodes.seat_right.material}
        position={[2.493, 0.309, -0.514]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="smallPillow_right"
        geometry={nodes.smallPillow_right.geometry}
        material={nodes.smallPillow_right.material}
        position={[1.272, 0.509, -0.71]}
        rotation={[1.254, -0.01, 0.009]}
      />
      <mesh
        name="smallPillow_right02"
        geometry={nodes.smallPillow_right02.geometry}
        material={nodes.smallPillow_right02.material}
        position={[-1.317, 0.508, 0.545]}
        rotation={[1.56, 0.317, -1.558]}
      />
      <mesh
        name="underseat_right"
        geometry={nodes.underseat_right.geometry}
        material={nodes.underseat_right.material}
        position={[2.533, 0.125, -0.528]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="backrest_center"
        geometry={nodes.backrest_center.geometry}
        material={nodes.backrest_center.material}
        position={[-0.743, 0.384, -0.91]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="pillow_center"
        geometry={nodes.pillow_center.geometry}
        material={nodes.pillow_center.material}
        position={[0.453, 0.601, -0.883]}
        rotation={[1.35, -0.019, 0.015]}
      />
      <mesh
        name="pillow_center02"
        geometry={nodes.pillow_center02.geometry}
        material={nodes.pillow_center02.material}
        position={[-0.136, 0.601, -0.883]}
        rotation={[1.35, -0.019, 0.015]}
      />
      <mesh
        name="seat_center"
        geometry={nodes.seat_center.geometry}
        material={nodes.seat_center.material}
        position={[0.819, 0.309, -0.514]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="smallPillow_center"
        geometry={nodes.smallPillow_center.geometry}
        material={nodes.smallPillow_center.material}
        position={[0.462, 0.509, -0.709]}
        rotation={[1.254, -0.011, 0.01]}
      />
      <mesh
        name="smallPillow_center02"
        geometry={nodes.smallPillow_center02.geometry}
        material={nodes.smallPillow_center02.material}
        position={[-0.127, 0.509, -0.709]}
        rotation={[1.254, -0.011, 0.01]}
      />
      <mesh
        name="underseat_center"
        geometry={nodes.underseat_center.geometry}
        material={nodes.underseat_center.material}
        position={[0.84, 0.125, -0.516]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="seat_left"
        geometry={nodes.seat_left.geometry}
        material={nodes.seat_left.material}
        position={[-1.121, 0.309, -0.701]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="underseat_left"
        geometry={nodes.underseat_left.geometry}
        material={nodes.underseat_left.material}
        position={[-1.138, 0.125, -0.721]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/K012.glb");
