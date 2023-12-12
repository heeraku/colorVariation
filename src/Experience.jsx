import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Backdrop,
  Environment,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  SoftShadows,
  SpotLight,
  Text,
} from "@react-three/drei";
import { MeshPortalMaterial } from "@react-three/drei";
import K012 from "./components/sofa/K012";
import K029 from "./components/sofa/K029";
import texturesData from "./data/textures.json";
import styles from "./Experience.module.scss";
import K012w from "./components/sofa/K012w";
import { K087 } from "./components/sofa/K087";
import Colors from "./components/UI/Colors";
import Scene from "./components/Scene";
import html2canvas from "html2canvas";
import { Vector3 } from "three";

// const Screenshot = (props) => {
//   // screenshot
//   const gl = useThree((state) => state.gl);

//   useEffect(() => {
//     if (props.isShot) {
//       const link = document.createElement("a");
//       link.setAttribute("download", "screenshot.png");
//       link.setAttribute(
//         "href",
//         gl.domElement
//           .toDataURL("image/png")
//           .replace("image/png", "image/octet-stream")
//       );
//       link.click();
//       props.setIsShot(false);
//     }
//   }, [props.isShot]);
// };
const Screenshot = (props) => {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    if (props.isShot) {
      // Capture the WebGL canvas
      const canvas = gl.domElement;

      // Capture the entire HTML content
      const target = document.querySelector("#leftBody");
      html2canvas(target).then((htmlCanvas) => {
        // Create a new canvas to merge WebGL and HTML content
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = Math.max(canvas.width, htmlCanvas.width);
        finalCanvas.height = Math.max(canvas.height, htmlCanvas.height);

        // Draw WebGL content
        const ctx = finalCanvas.getContext("2d");
        ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

        // Draw HTML content
        ctx.drawImage(htmlCanvas, 0, 0, htmlCanvas.width, htmlCanvas.height);

        // Create a download link for the final image
        const link = document.createElement("a");
        link.setAttribute("download", "screenshot.png");
        link.setAttribute("href", finalCanvas.toDataURL("image/png"));
        link.click();

        // Reset the screenshot flag
        props.setIsShot(false);
      });
    }
  }, [props.isShot]);
};

export default function Experience(props) {
  const [currentWallIndex, setcurrentWallIndex] = useState(0);
  const [currentFloorIndex, setCurrentFloorIndex] = useState(0);
  const [lerping, setLerping] = useState(false);

  const changeWallTextureHandler = () => {
    setcurrentWallIndex((prev) => (prev + 1) % 8);
  };

  const changeFloorTextureHandler = () => {
    setCurrentFloorIndex((prev) => (prev + 1) % 7);
  };

  const CameraController = () => {
    const lerpingHandler = () => {
      console.log("set lerp!");
      setLerping(true);
    };

    const targetPosition = new Vector3(0, 3.5, 11);
    const threshold = 0.2;

    useFrame(({ camera }, delta) => {
      if (lerping) {
        camera.lookAt(0, 0, 0);
        camera.position.lerp(targetPosition, delta * 3);
        console.log("lerping!");

        const distance = camera.position.distanceTo(targetPosition);

        if (distance < threshold) {
          setLerping(false);
          console.log("end");
        }
      }
    });

    return <></>;
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>カラーシミュレーション</h1>
      <div className={styles.main}>
        <div className={styles.leftBody}>
          <div className={styles.canvasWrapper} id="leftBody">
            <Canvas
              gl={{ preserveDrawingBuffer: true }}
              shadows
              dpr={[1, 2]}
              camera={{
                position: [0, 3.5, 11],
                fov: 40,
                near: 0.1,
                far: 100,
              }}
            >
              {/* <fog attach="fog" args={["red", 8, 35]} /> */}
              {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
              {/* background */}
              <color attach="background" args={["#000"]} />
              {/* light */}
              {/* <ambientLight intensity={0.05} /> */}

              {/* <SoftShadows size={5} samples={10} focus={0} /> */}
              <OrbitControls
                makeDefault
                enableZoom={true}
                zoomSpeed={0.8}
                // enablePan
                target={[0, 0, 0]}
                // maxDistance={20}
                // minDistance={0.1}
                // minPolarAngle={Math.PI / 2.5}
                // minPolarAngle={Math.PI / 2.8}
                // maxPolarAngle={Math.PI / 2.8}
                // maxAzimuthAngle={Math.PI / 10}
                // minAzimuthAngle={-Math.PI / 10}
                // autoRotate
                // autoRotateSpeed={0.5}
              />

              {props.scene !== 4 && (
                <Scene
                  scene={props.scene}
                  baseColor={props.baseColor}
                  cushionColor={props.cushionColor}
                  currentWallIndex={currentWallIndex}
                  currentFloorIndex={currentFloorIndex}
                />
              )}

              {props.scene !== 5 && props.scene === 4 && (
                <>
                  <Environment
                    files="/hdr01.hdr"
                    ground={{ height: 15, radius: 30, scale: 10 }}
                    background
                  />
                  <PerspectiveCamera
                    makeDefault
                    position={[0, 5, 8]}
                    fov={60}
                  />
                </>
              )}

              {props.scene !== 5 && (
                <>
                  <Suspense
                    fallback={
                      <K012w
                        position={[0.2, -1, 0]}
                        scale={2.5}
                        rotation={[0, 0, 0]}
                      />
                    }
                  >
                    {props.sofaNo === "01" && (
                      <>
                        <K012
                          position={[0.2, -1, 0]}
                          scale={2.5}
                          rotation={[0, 0, 0]}
                          baseColor={props.baseColor}
                          cushionColor={props.cushionColor}
                        />
                      </>
                    )}
                  </Suspense>
                  <Suspense fallback={null}>
                    {props.sofaNo === "02" && (
                      <K029
                        position={[-0.5, -1, 0]}
                        scale={2.85}
                        rotation={[0, 0, 0]}
                        baseColor={props.baseColor}
                        cushionColor={props.cushionColor}
                      />
                    )}
                  </Suspense>
                  <Suspense fallback={null}>
                    {props.sofaNo === "03" && (
                      <K087
                        position={[0, -1, 0]}
                        scale={2.5}
                        rotation={[0, 0, 0]}
                        baseColor={props.baseColor}
                        cushionColor={props.cushionColor}
                      />
                    )}
                  </Suspense>
                  <Screenshot
                    isShot={props.isShot}
                    setIsShot={props.setIsShot}
                  />
                </>
              )}
              <CameraController />
            </Canvas>
            <div className={styles.information}>
              <p>{props.sofaNo === "01" ? "K012" : "K029"}</p>
              <p>
                ベースカラー：
                {texturesData.map((data) => {
                  if (data.id === props.baseColor) {
                    return data.label;
                  }
                })}
              </p>
              <p>
                クッションカラー：
                {texturesData.map((data) => {
                  if (data.id === props.cushionColor) {
                    return data.label;
                  }
                })}
              </p>
            </div>

            <div className={styles.sceneSelector}>
              <div className={styles.sceneSelectorInner}>
                <div className={styles.sceneSelectorTitle}>シーン：</div>
                <ul className={styles.sceneSelectorList}>
                  <li
                    className={styles.sceneSelectorItem}
                    id={props.scene === 1 ? "selected" : ""}
                    onClick={() => {
                      props.setScene(1);
                    }}
                  ></li>
                  <li
                    className={styles.sceneSelectorItem}
                    id={props.scene === 2 ? "selected" : ""}
                    onClick={() => {
                      props.setScene(2);
                    }}
                  ></li>
                  <li
                    className={styles.sceneSelectorItem}
                    id={props.scene === 3 ? "selected" : ""}
                    onClick={() => {
                      props.setScene(3);
                    }}
                  ></li>
                  <li
                    className={styles.sceneSelectorItem}
                    id={props.scene === 4 ? "selected" : ""}
                    onClick={() => {
                      props.setScene(4);
                    }}
                  ></li>
                  <li
                    className={styles.sceneSelectorItem}
                    id={props.scene === 5 ? "selected" : ""}
                    onClick={() => {
                      props.setScene(5);
                    }}
                  ></li>
                </ul>
              </div>
            </div>
            <div className={styles.envSelector}>
              <ul className={styles.envSelectorInner}>
                <li
                  className={styles.evnSelectorItem}
                  onClick={changeWallTextureHandler}
                ></li>
                <li
                  className={styles.evnSelectorItem}
                  onClick={changeFloorTextureHandler}
                ></li>
              </ul>
            </div>
            <div className={styles.cameraController}>
              <div
                className={styles.cameraController_btn}
                onClick={() => {
                  setLerping(true);
                }}
              ></div>
            </div>
          </div>

          <div className={styles.exportSection}>
            <button
              onClick={() => {
                props.setIsShot(true);
              }}
            >
              イメージをダウンロード
            </button>
          </div>
        </div>
        <div className={styles.rightBody}>
          <div className={styles.lineUp}>
            <div className={styles.subTitle}>
              <h2>ソファタイプを選択</h2>
              <p>
                ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                ダミーテキスト
              </p>
            </div>
            <div className={styles.lineupModels}>
              <li
                id={props.sofaNo === "01" ? "selectedModel" : ""}
                onClick={() => {
                  props.setSofaNo("01");
                }}
                className={styles.modelList}
              >
                <img className={styles.image} src="/images/k012.jpeg" />
                <p className={styles.modelNo}>K012</p>
              </li>
              <li
                id={props.sofaNo === "02" ? "selectedModel" : ""}
                onClick={() => {
                  props.setSofaNo("02");
                }}
                className={styles.modelList}
              >
                <img className={styles.image} src="/images/k029.jpeg" />
                <p className={styles.modelNo}>K029</p>
              </li>
              <li
                id={props.sofaNo === "03" ? "selectedModel" : ""}
                onClick={() => {
                  props.setSofaNo("03");
                }}
                className={styles.modelList}
              >
                <img className={styles.image} src="/images/k087.jpeg" />
                <p className={styles.modelNo}>K087</p>
              </li>
            </div>
          </div>
          <div className={styles.colorSection}>
            <h2>カラーを選択</h2>
            <Colors
              baseColor={props.baseColor}
              setBaseColor={props.setBaseColor}
              cushionColor={props.cushionColor}
              setCushionColor={props.setCushionColor}
              sofaNo={props.sofaNo}
            />
          </div>
        </div>
      </div>
    </section>
    // <Canvas
    //   gl={{ preserveDrawingBuffer: true }}
    //   shadows
    //   dpr={[1, 2]}
    //   camera={{
    //     position: [0, 3, 10],
    //     fov: 45,
    //     near: 0.1,
    //     far: 100,
    //   }}
    // >
    //   {/* <Backdrop
    //     receiveShadow
    //     scale={[20, 5, 5]}
    //     floor={1.5}
    //     position={[0, -1, -3.5]}
    //   >
    //     <meshPhysicalMaterial roughness={1} color="#efefef" />
    //   </Backdrop> */}
    //   {/* <fog attach="fog" args={["red", 8, 35]} /> */}
    //   {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
    //   {/* background */}
    //   <color attach="background" args={["#fff"]} />
    //   {/* light */}
    //   <pointLight position={[2, 2, -0.5]} intensity={0.5} color={"#F0ECE5"} />
    //   {/* <SpotLight
    //     position={[-3, 5, 1]}
    //     angle={Math.PI / 3}
    //     attenuation={10}
    //     anglePower={10}
    //     color={"#FDF7E4"}
    //     castShadow
    //   /> */}
    //   <directionalLight position={[-2, 3.5, -0.5]} intensity={1} castShadow />
    //   <SoftShadows size={12} samples={6} focus={10} />
    //   <OrbitControls
    //     makeDefault
    //     enableZoom={true}
    //     zoomSpeed={0.5}
    //     // enablePan
    //     target={[0, 0, 0]}
    //     // maxDistance={20}
    //     // minDistance={0.1}
    //     // minPolarAngle={Math.PI / 2.5}
    //     // minPolarAngle={Math.PI / 2.8}
    //     // maxPolarAngle={Math.PI / 2.8}
    //     // maxAzimuthAngle={Math.PI / 10}
    //     // minAzimuthAngle={-Math.PI / 10}
    //   />

    //   {props.scene !== 4 && <Scene scene={props.scene} />}

    //   {props.scene === 4 && (
    //     <>
    //       <Environment
    //         files="/brown_photostudio_02_1k.hdr"
    //         ground={{ height: 15, radius: 20, scale: 10 }}
    //         background
    //       />
    //       <PerspectiveCamera makeDefault position={[0, 5, 8]} fov={50} />
    //     </>
    //   )}

    //   <Suspense
    //     fallback={
    //       <K012w position={[0.2, -1, 0]} scale={2.5} rotation={[0, 0, 0]} />
    //     }
    //   >
    //     {props.sofaNo === "01" && (
    //       <>
    //         <K012
    //           position={[0.2, -1, 0]}
    //           scale={2.5}
    //           rotation={[0, 0, 0]}
    //           baseColor={props.baseColor}
    //           cushionColor={props.cushionColor}
    //         />
    //       </>
    //     )}
    //   </Suspense>
    //   <Suspense fallback={null}>
    //     {props.sofaNo === "02" && (
    //       <K029
    //         position={[-0.5, -1, 0]}
    //         scale={2.85}
    //         rotation={[0, 0, 0]}
    //         baseColor={props.baseColor}
    //         cushionColor={props.cushionColor}
    //       />
    //     )}
    //   </Suspense>
    //   <Suspense fallback={null}>
    //     {props.sofaNo === "03" && (
    //       <K087
    //         position={[0, -1, 0]}
    //         scale={2.5}
    //         rotation={[0, 0, 0]}
    //         baseColor={props.baseColor}
    //         cushionColor={props.cushionColor}
    //       />
    //     )}
    //   </Suspense>
    //   <Screenshot isShot={props.isShot} setIsShot={props.setIsShot} />
    // </Canvas>
  );
}
