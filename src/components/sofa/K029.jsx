import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import texturesData from "../../data/textures.json";

export default function K029(props) {
  const { nodes, materials } = useGLTF("/models/K029.glb");

  const selectedBaseColor = texturesData.find(
    (texture) => texture.id === props.baseColor
  );

  const selectedCushionColor = texturesData.find(
    (texture) => texture.id === props.cushionColor
  );

  const baseColor = useTexture(selectedBaseColor.url);
  const cushionColor = useTexture(selectedCushionColor.url);

  baseColor.wrapS = baseColor.wrapT = THREE.RepeatWrapping;
  baseColor.repeat.set(10, 10);

  cushionColor.wrapS = cushionColor.wrapT = THREE.RepeatWrapping;
  cushionColor.repeat.set(10, 10);

  return (
    <group {...props} dispose={null}>
      <mesh
        name="backrest_center"
        geometry={nodes.backrest_center.geometry}
        material={nodes.backrest_center.material}
        position={[-0.009, 0.638, -0.922]}
        rotation={[-1.833, 0, Math.PI]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="backrest_left"
        geometry={nodes.backrest_left.geometry}
        material={nodes.backrest_left.material}
        position={[-0.801, 0.638, -0.922]}
        rotation={[-1.833, 0, Math.PI]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="backrest_right"
        geometry={nodes.backrest_right.geometry}
        material={nodes.backrest_right.material}
        position={[0.794, 0.638, -0.922]}
        rotation={[-1.833, 0, Math.PI]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="bodyLeft"
        geometry={nodes.bodyLeft.geometry}
        material={nodes.bodyLeft.material}
        position={[-1.308, 0.288, -1.016]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="bodyRight"
        geometry={nodes.bodyRight.geometry}
        material={nodes.bodyRight.material}
        position={[1.305, 0.288, -1.016]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="bodyRight02"
        geometry={nodes.bodyRight02.geometry}
        material={nodes.bodyRight02.material}
        position={[1.301, 0.288, -1.014]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="cushion01"
        geometry={nodes.cushion01.geometry}
        material={nodes.cushion01.material}
        position={[1.068, 0.56, -0.67]}
        rotation={[2.447, 1.345, 0.682]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="cushion01_frame"
        geometry={nodes.cushion01_frame.geometry}
        material={nodes.cushion01_frame.material}
        position={[0, 0.003, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="cushion02"
        geometry={nodes.cushion02.geometry}
        material={nodes.cushion02.material}
        position={[0.577, 0.56, -0.685]}
        rotation={[-0.144, 0, 0]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="cushion03"
        geometry={nodes.cushion03.geometry}
        material={nodes.cushion03.material}
        position={[-0.233, 0.56, -0.685]}
        rotation={[-0.144, 0, 0]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="cushion04"
        geometry={nodes.cushion04.geometry}
        material={nodes.cushion04.material}
        position={[-1.07, 0.56, -0.67]}
        rotation={[-0.695, 1.345, 0.682]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="cushion04_frame"
        geometry={nodes.cushion04_frame.geometry}
        material={nodes.cushion04_frame.material}
        position={[0, 0.003, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="leg01"
        geometry={nodes.leg01.geometry}
        material={nodes.leg01.material}
        position={[1.306, 0.026, 0.957]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg02"
        geometry={nodes.leg02.geometry}
        material={nodes.leg02.material}
        position={[0.526, 0.026, 0.957]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg03"
        geometry={nodes.leg03.geometry}
        material={nodes.leg03.material}
        position={[1.306, 0.026, 0.466]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg04"
        geometry={nodes.leg04.geometry}
        material={nodes.leg04.material}
        position={[0.526, 0.026, 0.466]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg05"
        geometry={nodes.leg05.geometry}
        material={nodes.leg05.material}
        position={[1.306, 0.026, 0.337]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg06"
        geometry={nodes.leg06.geometry}
        material={nodes.leg06.material}
        position={[0.526, 0.026, 0.337]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg07"
        geometry={nodes.leg07.geometry}
        material={nodes.leg07.material}
        position={[1.306, 0.026, -0.154]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg08"
        geometry={nodes.leg08.geometry}
        material={nodes.leg08.material}
        position={[0.526, 0.026, -0.154]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg09"
        geometry={nodes.leg09.geometry}
        material={nodes.leg09.material}
        position={[1.31, 0.026, -0.259]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg10"
        geometry={nodes.leg10.geometry}
        material={nodes.leg10.material}
        position={[0.53, 0.026, -0.259]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg11"
        geometry={nodes.leg11.geometry}
        material={nodes.leg11.material}
        position={[1.31, 0.026, -0.964]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg12"
        geometry={nodes.leg12.geometry}
        material={nodes.leg12.material}
        position={[0.53, 0.026, -0.964]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg13"
        geometry={nodes.leg13.geometry}
        material={nodes.leg13.material}
        position={[0.309, 0.026, -0.259]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg14"
        geometry={nodes.leg14.geometry}
        material={nodes.leg14.material}
        position={[-1.276, 0.026, -0.259]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg15"
        geometry={nodes.leg15.geometry}
        material={nodes.leg15.material}
        position={[0.309, 0.026, -0.964]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="leg16"
        geometry={nodes.leg16.geometry}
        material={nodes.leg16.material}
        position={[-1.276, 0.026, -0.964]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        name="ottomanBottom"
        geometry={nodes.ottomanBottom.geometry}
        material={nodes.ottomanBottom.material}
        position={[1.301, 0.288, -0.394]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={baseColor} />
      </mesh>
      <mesh
        name="ottomanTop"
        geometry={nodes.ottomanTop.geometry}
        material={nodes.ottomanTop.material}
        position={[0.797, 0.236, 0.09]}
        rotation={[Math.PI, 0, 0]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="seatCenter"
        geometry={nodes.seatCenter.geometry}
        material={nodes.seatCenter.material}
        position={[-0.002, 0.236, -0.538]}
        rotation={[Math.PI, 0, 0]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="seatLeft"
        geometry={nodes.seatLeft.geometry}
        material={nodes.seatLeft.material}
        position={[-0.804, 0.236, -0.538]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
      <mesh
        name="seatRight"
        geometry={nodes.seatRight.geometry}
        material={nodes.seatRight.material}
        position={[0.8, 0.236, -0.538]}
        rotation={[Math.PI, 0, 0]}
      >
        <meshStandardMaterial map={cushionColor} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/K029.glb");
