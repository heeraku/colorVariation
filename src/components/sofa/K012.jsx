/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 K012.glb
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Model(props) {
  const { nodes } = useGLTF("/models/K012.glb");
  const bakedTexture_leg = useTexture("/textures/sofa/legs75.jpg");
  const bakedTexture_bk = useTexture(
    "/textures/sofa/backrestunderseat_bk_75.jpg"
  );
  const bakedTexture_bk2 = useTexture("/textures/sofa/seatpillow_bk_75.jpg");
  const bakedTexture_wh = useTexture(
    "/textures/sofa/backrestunderseat_wh_75.jpg"
  );
  const bakedTexture_wh2 = useTexture("/textures/sofa/seatpillow_wh_75.jpg");
  const bakedTexture_gy = useTexture("/textures/sofa/seatpillow_gy_65.jpg");
  const bakedTexture_greige_gy = useTexture(
    "/textures/sofa/seatpillow_greige_gy_60.jpg"
  );

  bakedTexture_leg.flipY = false;
  bakedTexture_bk.flipY = false;
  bakedTexture_bk2.flipY = false;
  bakedTexture_wh.flipY = false;
  bakedTexture_wh2.flipY = false;
  bakedTexture_gy.flipY = false;
  bakedTexture_greige_gy.flipY = false;

  bakedTexture_leg.encoding = THREE.sRGBEncoding;
  bakedTexture_bk.encoding = THREE.sRGBEncoding;
  bakedTexture_bk2.encoding = THREE.sRGBEncoding;
  bakedTexture_wh.encoding = THREE.sRGBEncoding;
  bakedTexture_wh2.encoding = THREE.sRGBEncoding;
  bakedTexture_gy.encoding = THREE.sRGBEncoding;
  bakedTexture_greige_gy.encoding = THREE.sRGBEncoding;

  const greigeColor = "#a5958b";
  const greigeFabricColor = "#eae3de";

  return (
    <group {...props} dispose={null}>
      <group name="01_right" position={[1.219, 0.42, -0.238]}>
        <mesh
          name="backrest_right"
          geometry={nodes.backrest_right.geometry}
          material={nodes.backrest_right.material}
          position={[-0.551, -0.036, -0.672]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="backrest_right02"
          geometry={nodes.backrest_right02.geometry}
          material={nodes.backrest_right02.material}
          position={[-2.735, -0.036, 1.384]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="leg01"
          geometry={nodes.leg01.geometry}
          material={nodes.leg01.material}
          position={[0.337, -0.42, 0.711]}
          rotation={[0, Math.PI / 6, 0]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="leg02"
          geometry={nodes.leg02.geometry}
          material={nodes.leg02.material}
          position={[-0.336, -0.42, 0.711]}
          rotation={[0, -Math.PI / 6, 0]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="leg03"
          geometry={nodes.leg03.geometry}
          material={nodes.leg03.material}
          position={[-0.467, -0.42, 0.074]}
          rotation={[0, 0.611, 0]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="leg04"
          geometry={nodes.leg04.geometry}
          material={nodes.leg04.material}
          position={[-1.713, -0.42, 0.078]}
          rotation={[0, -0.698, 0]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="leg05"
          geometry={nodes.leg05.geometry}
          material={nodes.leg05.material}
          position={[-2.005, -0.42, 0.518]}
          rotation={[-Math.PI, Math.PI / 3, -Math.PI]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="leg06"
          geometry={nodes.leg06.geometry}
          material={nodes.leg06.material}
          position={[-2.005, -0.42, 1.164]}
          rotation={[0, Math.PI / 3, 0]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="pillow_right"
          geometry={nodes.pillow_right.geometry}
          material={nodes.pillow_right.material}
          position={[0.041, 0.184, -0.643]}
          rotation={[1.35, -0.018, 0.014]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="pillow_right2"
          geometry={nodes.pillow_right2.geometry}
          material={nodes.pillow_right2.material}
          position={[-2.721, 0.186, 0.789]}
          rotation={[1.551, 0.221, -1.551]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="rubber_leg01"
          geometry={nodes.rubber_leg01.geometry}
          material={nodes.rubber_leg01.material}
          position={[0.349, -0.42, -0.66]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="rubber_leg02"
          geometry={nodes.rubber_leg02.geometry}
          material={nodes.rubber_leg02.material}
          position={[-0.328, -0.42, -0.66]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="rubber_leg03"
          geometry={nodes.rubber_leg03.geometry}
          material={nodes.rubber_leg03.material}
          position={[-0.484, -0.42, -0.66]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="rubber_leg04"
          geometry={nodes.rubber_leg04.geometry}
          material={nodes.rubber_leg04.material}
          position={[-1.675, -0.42, -0.66]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="rubber_leg05"
          geometry={nodes.rubber_leg05.geometry}
          material={nodes.rubber_leg05.material}
          position={[-2.758, -0.42, 0.516]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="rubber_leg06"
          geometry={nodes.rubber_leg06.geometry}
          material={nodes.rubber_leg06.material}
          position={[-2.758, -0.42, 1.149]}
        >
          <meshBasicMaterial map={bakedTexture_leg} />
        </mesh>
        <mesh
          name="seat_right"
          geometry={nodes.seat_right.geometry}
          material={nodes.seat_right.material}
          position={[1.274, -0.111, -0.276]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="smallPillow_right"
          geometry={nodes.smallPillow_right.geometry}
          material={nodes.smallPillow_right.material}
          position={[0.053, 0.089, -0.472]}
          rotation={[1.254, -0.01, 0.009]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="smallPillow_right02"
          geometry={nodes.smallPillow_right02.geometry}
          material={nodes.smallPillow_right02.material}
          position={[-2.536, 0.088, 0.783]}
          rotation={[1.56, 0.317, -1.558]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="underseat_right"
          geometry={nodes.underseat_right.geometry}
          material={nodes.underseat_right.material}
          position={[1.314, -0.295, -0.29]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
      </group>
      <group name="02_center" position={[0.121, 0.423, -0.567]}>
        <mesh
          name="backrest_center"
          geometry={nodes.backrest_center.geometry}
          material={nodes.backrest_center.material}
          position={[-0.864, -0.039, -0.343]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="pillow_center"
          geometry={nodes.pillow_center.geometry}
          material={nodes.pillow_center.material}
          position={[0.332, 0.178, -0.316]}
          rotation={[1.35, -0.019, 0.015]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="pillow_center02"
          geometry={nodes.pillow_center02.geometry}
          material={nodes.pillow_center02.material}
          position={[-0.257, 0.178, -0.316]}
          rotation={[1.35, -0.019, 0.015]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="seat_center"
          geometry={nodes.seat_center.geometry}
          material={nodes.seat_center.material}
          position={[0.698, -0.114, 0.053]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="smallPillow_center"
          geometry={nodes.smallPillow_center.geometry}
          material={nodes.smallPillow_center.material}
          position={[0.341, 0.086, -0.142]}
          rotation={[1.254, -0.011, 0.01]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="smallPillow_center02"
          geometry={nodes.smallPillow_center02.geometry}
          material={nodes.smallPillow_center02.material}
          position={[-0.248, 0.086, -0.142]}
          rotation={[1.254, -0.011, 0.01]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="underseat_center"
          geometry={nodes.underseat_center.geometry}
          material={nodes.underseat_center.material}
          position={[0.719, -0.298, 0.051]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
      </group>
      <group name="03_left" position={[-1.177, 0.43, 0.594]}>
        <mesh
          name="seat_left"
          geometry={nodes.seat_left.geometry}
          material={nodes.seat_left.material}
          position={[0.056, -0.121, -1.295]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "01" || props.normalColor === "03"
                ? bakedTexture_gy
                : props.normalColor === "02"
                ? bakedTexture_greige_gy
                : props.normalColor === "04"
                ? bakedTexture_bk2
                : props.normalColor === "06" || props.normalColor === "05"
                ? bakedTexture_wh2
                : bakedTexture_bk2
            }
            color={
              props.normalColor === "02"
                ? greigeFabricColor
                : props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
        <mesh
          name="underseat_left"
          geometry={nodes.underseat_left.geometry}
          material={nodes.underseat_left.material}
          position={[0.039, -0.305, -1.315]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshBasicMaterial
            map={
              props.normalColor === "04"
                ? bakedTexture_bk
                : props.normalColor === "02" ||
                  props.normalColor === "03" ||
                  props.normalColor === "05" ||
                  props.normalColor === "06"
                ? bakedTexture_wh
                : bakedTexture_bk
            }
            color={
              props.normalColor === "02" || props.normalColor === "05"
                ? greigeColor
                : "#fff"
            }
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/K012.glb");