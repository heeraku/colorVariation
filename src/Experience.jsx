import { useEffect, useLayoutEffect } from "react";
import { useThree } from "@react-three/fiber";

import { ContactShadows } from "@react-three/drei";
import Tv from "./components/room/Tv";
import Man from "./components/human/Man";
import Woman from "./components/human/Woman";
import gsap from "gsap";
import Room from "./components/room/Room";
import Floors from "./components/room/Floors";
import Walls from "./components/room/Walls";
import Curtain from "./components/room/Curtain";
import WindowBody from "./components/room/WindowBody";
import K012 from "./components/sofa/K012";

export default function Experience(props) {
  let camera = useThree((state) => state.camera);

  useLayoutEffect(() => {
    let fov = camera.fov;

    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();
    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 735px)`,
        isMobile: `(max-width: 735px)`,
      },
      (context) => {
        let { isDesktop, isMobile } = context.conditions;

        if (isMobile) {
          camera.fov = 50;
          camera.updateProjectionMatrix();
        } else {
          camera.fov = 35;
          camera.updateProjectionMatrix();
        }
      }
    );
  }, []);

  useEffect(() => {
    props.setLoading(false);
  });

  // screenshot
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    if (props.isShot) {
      const link = document.createElement("a");
      link.setAttribute("download", "screenshot.png");
      link.setAttribute(
        "href",
        gl.domElement
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream")
      );
      link.click();
      props.setIsShot(false);
    }
  }, [props.isShot]);

  return (
    <>
      {/* background */}
      <color attach="background" args={["#dfdfdf"]} />

      {/* light */}
      <pointLight position={[4, 3, 2]} intensity={0.2} />

      {/* Sofa */}
      <K012
        position={[2.5, -1, 0.9]}
        rotation-y={-Math.PI / 2}
        scale={2.5}
        normalColor={props.normalColor}
      />

      {/* Room */}
      {props.scenes === "room" && (
        <>
          <ContactShadows
            position={[0, -0.98, -0.1]}
            opacity={0.25}
            scale={12}
            blur={2}
            far={10}
          />
          <Room position={[0, -2.14, 0]} scale={0.5} />
          <WindowBody position={[0, -2.14, 0]} scale={0.5} />
          <Curtain position={[0, -2.14, 0]} scale={0.5} />

          <Floors
            position={[0, -2.14, 0]}
            scale={0.5}
            floorTexture={props.floorTexture}
          />

          <Walls
            position={[0, -2.14, 0]}
            scale={0.5}
            wallTexture={props.wallTexture}
          />

          <Tv />
        </>
      )}

      {/* human */}
      {props.human && (
        <>
          <ambientLight intensity={0.3} />
          <Woman
            scale={2.1}
            position={[0.9, -1.1, -1.35]}
            rotation={[-0.2, -0.4, 0]}
          />
          <Man
            scale={2.2}
            position={[3.7, -1, 2]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </>
      )}
    </>
  );
}
