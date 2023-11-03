import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import K012 from "./components/sofa/K012";
import K029 from "./components/sofa/K029";
import texturesData from "./data/textures.json";
import styles from "./Experience.module.scss";
import K012w from "./components/sofa/K012w";

export default function Experience(props) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>カラーシミュレーション</h1>
      <div className={styles.main}>
        <div className={styles.leftBody}>
          <div className={styles.canvasWrapper}>
            <Canvas
              gl={{ preserveDrawingBuffer: true }}
              shadows
              dpr={[1, 2]}
              camera={{
                position: [0, 4, 10],
                fov: 45,
                near: 0.1,
                far: 20,
              }}
            >
              {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
              {/* background */}
              <color attach="background" args={["#fff"]} />
              {/* light */}
              <pointLight position={[4, 3, 2]} intensity={0.5} />
              <directionalLight position={[-2, 5, 0]} intensity={0.5} />
              <directionalLight position={[0, 0, -3]} intensity={2} />
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
            </Canvas>
          </div>
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
                <p className={styles.image}>image</p>
                <p className={styles.modelNo}>K012</p>
              </li>
              <li
                id={props.sofaNo === "02" ? "selectedModel" : ""}
                onClick={() => {
                  props.setSofaNo("02");
                }}
                className={styles.modelList}
              >
                <p className={styles.image}>image</p>
                <p className={styles.modelNo}>K029</p>
              </li>
              <li
                id={props.sofaNo === "03" ? "selectedModel" : ""}
                onClick={() => {
                  props.setSofaNo("03");
                }}
                className={styles.modelList}
              >
                <p className={styles.image}>image</p>
                <p className={styles.modelNo}>K087</p>
              </li>
            </div>
          </div>
          <div className={styles.colorSection}>
            <h2>カラーを選択</h2>
            <h3 className={styles.subTitle}>ベースカラー</h3>
            <span className={styles.selection}>
              選択中のカラー：
              {texturesData.map((data) => {
                if (data.id === props.baseColor) {
                  return data.label;
                }
              })}
            </span>
            <div className={styles.colorVariation}>
              {texturesData.map((li) => (
                <li
                  className={styles.colorList}
                  key={li.id}
                  id={props.baseColor === li.id ? "selected" : ""}
                  onClick={() => {
                    props.setBaseColor(li.id);
                  }}
                  style={{
                    backgroundColor: `${li.thumbnail}`,
                  }}
                ></li>
              ))}
            </div>
            <h3 className={styles.subTitle}>クッションカラー</h3>
            <span className={styles.selection}>
              選択中のカラー：
              {texturesData.map((data) => {
                if (data.id === props.cushionColor) {
                  return data.label;
                }
              })}
            </span>
            <div className={styles.colorVariation2}>
              {texturesData.map((li) => (
                <li
                  className={styles.colorList2}
                  key={li.id}
                  id={props.cushionColor === li.id ? "selected" : ""}
                  onClick={() => {
                    props.setCushionColor(li.id);
                  }}
                  style={{ backgroundColor: li.thumbnail }}
                ></li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
