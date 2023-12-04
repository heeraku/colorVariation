import {
  Backdrop,
  MeshPortalMaterial,
  MeshReflectorMaterial,
  SpotLight,
  useTexture,
} from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";
import K012 from "./sofa/K012";
import K029 from "./sofa/K029";
import { K087 } from "./sofa/K087";

export default function Scene(props) {
  const scene01wall = useTexture("./scenes/wall00.jpg");
  scene01wall.wrapS = scene01wall.wrapT = THREE.RepeatWrapping;
  scene01wall.repeat.set(5, 5);

  const scene02wall = useTexture("./scenes/wall02.jpg");
  scene02wall.wrapS = scene02wall.wrapT = THREE.RepeatWrapping;
  scene02wall.repeat.set(3, 2);

  // const scene03wall = useTexture("./scenes/wall03.jpg");
  // scene03wall.wrapS = scene03wall.wrapT = THREE.RepeatWrapping;
  // scene03wall.repeat.set(1, 1);

  const scene01floor = useTexture("./scenes/floor01.jpg");
  scene01floor.wrapS = scene01floor.wrapT = THREE.RepeatWrapping;
  scene01floor.repeat.set(7, 7);
  scene01floor.encoding = THREE.sRGBEncoding;

  const scene02floor = useTexture("./scenes/floor02.jpg");
  scene02floor.wrapS = scene02floor.wrapT = THREE.RepeatWrapping;
  scene02floor.repeat.set(4, 4);
  scene02floor.encoding = THREE.sRGBEncoding;

  // const scene03floor = useTexture("./scenes/floor02.jpg");
  // scene03floor.wrapS = scene03floor.wrapT = THREE.RepeatWrapping;
  // scene03floor.repeat.set(8, 8);

  const [wallColor, setWallColor] = useState("#fff");
  const wallColors = ["#8E8B82", "#1B3C59", "#3A4D39", "#A25B5B", "#fff"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClick = () => {
    setCurrentColorIndex((prev) => (prev + 1) % wallColors.length);
    const nextColor = wallColors[currentColorIndex];
    setWallColor(nextColor);
  };

  return (
    <>
      {props.scene === 1 && (
        <>
          <pointLight
            position={[0, 3, 2]}
            intensity={1}
            distance={10}
            target={[0, 0, 0]}
            castShadow
          />
          <directionalLight position={[-7, 3, 7]} intensity={1.5} castShadow />
          <directionalLight position={[3, 2, 2]} intensity={0.5} />
          {/* <SpotLight
            position={[-5, 4, 0]}
            angle={Math.PI / 4}
            penumbra={0.1}
            intensity={0.8}
            distance={20}
            decay={2}
            color="#F5EEC8"
            castShadow
          /> */}
          <directionalLight
            position={[-20, 1, 10]}
            intensity={3}
            castShadow
            color={"FFE300"}
          />
          <mesh position={[-15, 10, 2]} rotation={[0, Math.PI, 0]} castShadow>
            <planeGeometry args={[2, 30]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
          <mesh position={[-15, 10, 5]} rotation={[0, Math.PI, 0]} castShadow>
            <planeGeometry args={[0.5, 30]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
          <mesh position={[-15, 10, 7]} rotation={[0, Math.PI, 0]} castShadow>
            <planeGeometry args={[2, 30]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        </>
      )}
      {props.scene === 2 && (
        <>
          <ambientLight intensity={0.15} />
          <pointLight
            position={[0, 2, 2]}
            intensity={1}
            distance={10}
            target={[0, 0, 0]}
            castShadow
          />
          <pointLight
            position={[5, 1, 1]}
            intensity={1}
            distance={8}
            target={[0, 0, 0]}
            color={"#F99417"}
          />
          <pointLight
            position={[-5, 1, 1]}
            intensity={1}
            distance={8}
            target={[0, 0, 0]}
            color={"#F99417"}
          />
          <SpotLight
            position={[-4, 5.5, 2]}
            angle={Math.PI / 5}
            penumbra={0.6}
            intensity={1}
            distance={10}
            decay={0.5}
            color="#F5EEC8"
            castShadow
          />
          <directionalLight position={[-2, 3, -0.5]} intensity={1} castShadow />
        </>
      )}
      {props.scene === 3 && (
        <>
          <ambientLight intensity={0.1} />
          <directionalLight position={[-2, 0, 0]} intensity={0.8} />
          <directionalLight position={[2, 0, 0]} intensity={0.8} />
          <directionalLight position={[0, 0, -2]} intensity={0.8} />
          <directionalLight position={[0, 0, 2]} intensity={0.8} />
          <directionalLight position={[0, 5, 0]} intensity={1} castShadow />
        </>
      )}
      {props.scene !== 5 && props.scene !== 3 && (
        <>
          <mesh
            receiveShadow
            rotation={[0, 0, 0]}
            position={[0, 4, -4]}
            onClick={handleClick}
          >
            <planeGeometry args={[50, 10]} />
            {props.scene === 1 && (
              <meshStandardMaterial color={wallColor} roughness={1} />
            )}
            {props.scene === 2 && (
              <meshStandardMaterial color={"#a39184"} roughness={1} />
            )}
            {/* {props.scene === 3 && <meshStandardMaterial map={scene02wall} />} */}
            {/* {props.scene === 2 && <meshStandardMaterial map={scene03wall} />} */}
          </mesh>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 1]}
          >
            <planeGeometry args={[50, 20]} />
            {props.scene === 1 && (
              <meshStandardMaterial
                map={scene01floor}
                roughness={0.5}
                color={"#F3EEEA"}
              />
            )}
            {props.scene === 2 && <meshStandardMaterial map={scene02floor} />}
            {/* {props.scene === 3 && <meshStandardMaterial map={scene03floor} />} */}
          </mesh>
        </>
      )}
      {props.scene === 3 && (
        <Backdrop
          receiveShadow
          scale={[100, 15, 15]}
          floor={1.5}
          position={[0, -1, -7]}
        >
          <meshPhysicalMaterial roughness={1} color="#efefef" />
        </Backdrop>
      )}
      {props.scene === 5 && (
        <>
          <mesh position={[0, 0, 5]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#EEB0B0"]} />

              <K012
                position={[0, -1, -3]}
                scale={2.5}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
          <mesh rotation={[0, Math.PI / 2, 0]} position={[5, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#F0DBAF"]} />
              {/* <K012
                position={[0, -1, -3]}
                scale={2.5}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              /> */}
              <K029
                position={[0, -1, -3]}
                scale={2.85}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
          <mesh rotation={[0, -Math.PI / 2, 0]} position={[-5, 0, 0]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#8EACCD"]} />
              {/* <K012
                position={[0, -1, -3]}
                scale={2.5}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              /> */}
              <K087
                position={[0, -1, -4]}
                scale={2.5}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
          <mesh rotation={[0, -Math.PI, 0]} position={[0, 0, -5]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#618264"]} />
              <K012
                position={[0, -1, -3]}
                scale={2.5}
                rotation={[0, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 5, 0]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#EF9595"]} />
              <K012
                position={[0, -1, -6]}
                scale={2.5}
                rotation={[Math.PI / 2, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -5, 0]}>
            <planeGeometry args={[10, 10]} />
            <MeshPortalMaterial>
              <ambientLight intensity={0.2} />
              <directionalLight position={[0, 3, 0]} intensity={1} castShadow />
              <color attach="background" args={["#F1C27B"]} />
              <K012
                position={[0, -1, -3]}
                scale={2.5}
                rotation={[-Math.PI / 2, 0, 0]}
                baseColor={props.baseColor}
                cushionColor={props.cushionColor}
              />
            </MeshPortalMaterial>
          </mesh>
        </>
      )}
    </>
  );
}
