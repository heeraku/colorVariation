import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Text,
} from "@react-three/drei";
import K012 from "./components/sofa/K012";
import K029 from "./components/sofa/K029";
import texturesData from "./data/textures.json";
import styles from "./Experience.module.scss";
import K012w from "./components/sofa/K012w";
import { K087 } from "./components/sofa/K087";
import Colors from "./components/UI/Colors";
import Scene from "./components/Scene";
import html2canvas from "html2canvas";

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
                position: [0, 3, 10],
                fov: 45,
                near: 0.1,
                far: 100,
              }}
            >
              {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
              {/* background */}
              <color attach="background" args={["#fff"]} />
              {/* light */}
              <pointLight position={[4, 3, 2]} intensity={0.5} />
              <directionalLight position={[-2, 5, 0]} intensity={0.5} />
              <directionalLight position={[0, 2, -3]} intensity={0.8} />
              <directionalLight position={[5, 2, 3]} intensity={0.8} />
              <OrbitControls
                makeDefault
                enableZoom={true}
                // enablePan
                target={[0, 0, 0]}
                // maxDistance={20}
                // minDistance={0.1}
                // minPolarAngle={Math.PI / 2.5}
                minPolarAngle={Math.PI / -2}
                maxPolarAngle={Math.PI / 2}
                // maxAzimuthAngle={Math.PI / 1.7}
                // minAzimuthAngle={-Math.PI / 10}
              />
              {/* <Environment
                // files="/old_depot_2k.hdr"
                files="/small_empty_room_3_2k.hdr"
                ground={{ height: 10, radius: 100 }}
                background
              /> */}
              {/* <PerspectiveCamera makeDefault position={[0, 2, 20]} fov={30} /> */}

              <Scene scene={props.scene} />

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
              <Screenshot isShot={props.isShot} setIsShot={props.setIsShot} />
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
                </ul>
              </div>
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
  );
}
