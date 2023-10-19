import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./Experience";
import { useState, useEffect } from "react";
import Spinner from "./components/ui/Spinner";
import Controls from "./components/ui/Controls";
import { Leva } from "leva";
import { Vector3 } from "three";

export default function App() {
  //sofa pattern
  const [sofaPattern, setSofaPattern] = useState("01");

  //sofa color
  const [normalColor, setNormalColor] = useState("01");

  //floor texture
  const [floorTexture, setFloorTexture] = useState("02");

  //wall texture
  const [wallTexture, setWallTexture] = useState("01");

  //sofa and room scene
  const [scenes, setScenes] = useState("room");

  //loading
  const [loading, setLoading] = useState(true);

  //screeShot
  const [isShot, setIsShot] = useState(false);

  //human
  const [human, setHuman] = useState(false);

  useEffect(() => {
    if (!loading) {
      setLoading(false);
    }
  }, [loading]);

  //set scene camera moving
  const [to, setTo] = useState({ x: 0, y: 0, z: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0, z: 0 });
  const [lerping, setLerping] = useState(false);
  const [axis, setAxis] = useState(null);

  function SceneCamera({ lerping, to, setTo, target, setTarget }) {
    const { camera } = useThree();
    if (lerping) {
      if (scenes === "sofa") {
        setTo(new Vector3(-18, 10, 18));
        setTarget(new Vector3(0, 0, 0));
        setAxis(new Vector3(3, 0, 1));
      }
      if (scenes === "room") {
        setTo(new Vector3(18, 12, 18));
        setTarget(new Vector3(0, 0, 0));
        setAxis(new Vector3(0, 0, 0));
      }
      camera.position.copy(to);
      camera.lookAt(target);
    }
  }

  const lerpingHandler = () => {
    if (lerping) {
      setLerping(false);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        dpr={[1, 2]}
        camera={{
          // fov: 35,
          near: 0.1,
          far: 200,
          position: [18, 12, 18],
        }}
        onPointerDown={lerpingHandler}
        onWheel={lerpingHandler}
      >
        <SceneCamera
          lerping={lerping}
          to={to}
          target={target}
          setTo={setTo}
          setTarget={setTarget}
        />
        <OrbitControls
          makeDefault
          enableZoom
          enablePan
          target={axis}
          maxDistance={20}
          minDistance={0.1}
          minPolarAngle={scenes === "sofa" ? Math.PI / -2 : Math.PI / -2}
          maxPolarAngle={scenes === "sofa" ? Math.PI : Math.PI / 2}
          maxAzimuthAngle={scenes === "sofa" ? "Math.PI * 2" : Math.PI / 1.7}
          minAzimuthAngle={scenes === "sofa" ? "-Math.PI * 2" : -Math.PI / 10}
        />
        <Experience
          setLoading={setLoading}
          normalColor={normalColor}
          scenes={scenes}
          floorTexture={floorTexture}
          wallTexture={wallTexture}
          sofaPattern={sofaPattern}
          isShot={isShot}
          setIsShot={setIsShot}
          human={human}
        />
      </Canvas>
      <Controls
        normalColor={normalColor}
        setNormalColor={setNormalColor}
        floorTexture={floorTexture}
        setFloorTexture={setFloorTexture}
        wallTexture={wallTexture}
        setWallTexture={setWallTexture}
        scenes={scenes}
        setScenes={setScenes}
        sofaPattern={sofaPattern}
        setSofaPattern={setSofaPattern}
        isShot={isShot}
        setIsShot={setIsShot}
        human={human}
        setHuman={setHuman}
        setLerping={setLerping}
      />
      {loading && <Spinner />}
      <Leva collapsed />
    </div>
  );
}
