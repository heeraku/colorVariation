import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Scene(props) {
  const scene01wall = useTexture("./scenes/wall00.jpg");
  scene01wall.wrapS = scene01wall.wrapT = THREE.RepeatWrapping;
  scene01wall.repeat.set(5, 5);
  scene01wall.flipY = false;
  scene01wall.encoding = THREE.sRGBEncoding;

  const scene02wall = useTexture("./scenes/wall02.jpg");
  scene02wall.wrapS = scene02wall.wrapT = THREE.RepeatWrapping;
  scene02wall.repeat.set(3, 2);
  scene02wall.flipY = false;
  scene02wall.encoding = THREE.sRGBEncoding;

  const scene03wall = useTexture("./scenes/wall03.jpg");
  scene03wall.wrapS = scene03wall.wrapT = THREE.RepeatWrapping;
  scene03wall.repeat.set(1, 1);
  scene03wall.flipY = false;
  scene03wall.encoding = THREE.sRGBEncoding;

  const scene01floor = useTexture("./scenes/floor00.jpg");
  scene01floor.wrapS = scene01floor.wrapT = THREE.RepeatWrapping;
  scene01floor.repeat.set(8, 8);
  scene01floor.flipY = false;
  scene01floor.encoding = THREE.sRGBEncoding;

  const scene02floor = useTexture("./scenes/floor01.jpg");
  scene02floor.wrapS = scene02floor.wrapT = THREE.RepeatWrapping;
  scene02floor.repeat.set(8, 8);
  scene02floor.flipY = false;
  scene02floor.encoding = THREE.sRGBEncoding;

  const scene03floor = useTexture("./scenes/floor02.jpg");
  scene03floor.wrapS = scene03floor.wrapT = THREE.RepeatWrapping;
  scene03floor.repeat.set(8, 8);
  scene03floor.flipY = false;
  scene03floor.encoding = THREE.sRGBEncoding;

  return (
    <>
      <mesh receiveShadow rotation={[0, 0, 0]} position={[0, 4, -4]}>
        <planeGeometry args={[20, 10]} />
        {props.scene === 1 && (
          <meshStandardMaterial color={"#a39184"} roughness={1} />
        )}
        {props.scene === 3 && <meshStandardMaterial map={scene02wall} />}
        {props.scene === 2 && <meshStandardMaterial map={scene03wall} />}
      </mesh>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 1]}>
        <planeGeometry args={[20, 10]} />
        {props.scene === 1 && (
          // <MeshReflectorMaterial
          //   blur={[300, 300]}
          //   resolution={2048}
          //   mixBlur={1}
          //   mixStrength={80}
          //   roughness={1}
          //   depthScale={1.2}
          //   minDepthThreshold={0.4}
          //   maxDepthThreshold={1.4}
          //   color="#000"
          //   metalness={0.5}
          // />
          <meshStandardMaterial map={scene01floor} roughness={0.65} />
        )}
        {props.scene === 2 && <meshStandardMaterial map={scene02floor} />}
        {props.scene === 3 && <meshStandardMaterial map={scene03floor} />}
      </mesh>
    </>
  );
}
