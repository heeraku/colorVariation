import { Fragment, Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import K012 from "./components/sofa/K012";
import K029 from "./components/sofa/K029";
import texturesData from "./data/textures.json";

export default function Experience(props) {
  const Section = styled.section`
    position: relative;
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: #d0d4ca;
  `;

  const Title = styled.h1`
    margin-bottom: 35px;
    width: 100%;
    background-color: #ffdfdf;
    font-size: 30px;
  `;

  const Main = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #000;
  `;

  const LeftBody = styled.div`
    padding: 20px 20px;
    width: 50%;
    background-color: #daddb1;
  `;

  const RightBody = styled.div`
    width: 50%;
    background-color: #fbecb2;
    border-left: 5px solid #de8f5f;
    padding: 20px;
  `;

  const CanvasWrapper = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 500px;
    border: 1px solid blue;
  `;

  const Information = styled.div`
    width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
  `;

  const Lineup = styled.div`
    margin-bottom: 30px;
  `;

  const SubTitle = styled.div`
    margin-bottom: 20px;
    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
    }
  `;

  const LineupModels = styled.ul`
    background-color: #fff;
    display: flex;
    gap: 20px;
    li {
      list-style: none;
      width: 100px;
      height: 100px;
      background-color: #d0d4ca;
      border: 1px solid #000;
      display: flex;
      flex-direction: column;
      align-items: center;

      p.image {
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p.modelNo {
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &#selected {
        background-color: pink;
        border: 1px solid pink;
        p.image {
          background-color: pink;
        }
      }

      &:hover {
        cursor: pointer;
      }
    }
  `;

  const ColorSelection = styled.div`
    background-color: #fff;
    .title {
      color: #ff9130;
    }

    .selection {
      color: #000;
      font-size: 20px;
    }
  `;

  const ColorVariation = styled.ul`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding-bottom: 20px;
    padding-left: 10px;
    margin-top: 20px;
    margin-bottom: 10px;

    li {
      z-index: 1;
      list-style: none;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      border: 1px solid #000;

      &#selected {
        border: 3px solid #000;
      }

      &:hover {
        cursor: pointer;
      }
    }
  `;

  const ColorVariation2 = styled.ul`
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;

    li {
      border: 1px solid #000;
      z-index: 1;
      list-style: none;
      width: 30px;
      height: 30px;
      background-color: #f4bf96;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;

      &#selected {
        border: 3px solid #000;
      }

      &:hover {
        cursor: pointer;
      }
    }
  `;

  const ColorType = styled.section`
    font-size: 18px;
    color: red;
    background-color: #fff;

    span {
      border-bottom: 1px solid #000;
    }
  `;

  return (
    <Fragment>
      <Section>
        <Title>カラーシミュレーション</Title>
        <Main>
          <LeftBody>
            <CanvasWrapper>
              <Canvas
                gl={{ preserveDrawingBuffer: true }}
                shadows
                dpr={[1, 2]}
                camera={{
                  position: [0, 0, 10],
                  fov: 52,
                  near: 1,
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
                <Suspense fallback={null}>
                  {props.sofaNo === "01" && (
                    <K012
                      position={[0.2, -1, 0]}
                      scale={2.5}
                      rotation={[0, 0, 0]}
                      baseColor={props.baseColor}
                      cushionColor={props.cushionColor}
                    />
                  )}
                  {props.sofaNo === "02" && (
                    <K029
                      position={[-0.7, -1, 0]}
                      scale={2.85}
                      rotation={[0, 0, 0]}
                      baseColor={props.baseColor}
                      cushionColor={props.cushionColor}
                    />
                  )}
                </Suspense>
              </Canvas>
            </CanvasWrapper>
            <Information>
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
            </Information>
          </LeftBody>
          <RightBody>
            <Lineup>
              <SubTitle>
                <h2>ソファタイプを選択</h2>
                <p>
                  ダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキストダミーテキスト
                  ダミーテキスト
                </p>
              </SubTitle>
              <LineupModels>
                <li
                  id={props.sofaNo === "01" ? "selected" : ""}
                  onClick={() => {
                    props.setSofaNo("01");
                  }}
                >
                  <p className="image">image</p>
                  <p className="modelNo">K012</p>
                </li>
                <li
                  id={props.sofaNo === "02" ? "selected" : ""}
                  onClick={() => {
                    props.setSofaNo("02");
                  }}
                >
                  <p className="image">image</p>
                  <p className="modelNo">K029</p>
                </li>
                <li
                  id={props.sofaNo === "03" ? "selected" : ""}
                  onClick={() => {
                    props.setSofaNo("03");
                  }}
                >
                  <p className="image">image</p>
                  <p className="modelNo">K087</p>
                </li>
              </LineupModels>
            </Lineup>
            <ColorSelection>
              <SubTitle>
                <h2>カラーを選択</h2>
                <ColorType>
                  <h3 className="title">ベースカラー</h3>
                  <span className="selection">
                    選択中のカラー：
                    {texturesData.map((data) => {
                      if (data.id === props.baseColor) {
                        return data.label;
                      }
                    })}
                  </span>
                </ColorType>
                <ColorVariation>
                  {texturesData.map((li) => (
                    <li
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
                </ColorVariation>
                <ColorType>
                  <h3 className="title">クッションカラー</h3>
                  <span className="selection">
                    選択中のカラー：
                    {texturesData.map((data) => {
                      if (data.id === props.cushionColor) {
                        return data.label;
                      }
                    })}
                  </span>
                </ColorType>
                <ColorVariation2>
                  {texturesData.map((li) => (
                    <li
                      key={li.id}
                      id={props.cushionColor === li.id ? "selected" : ""}
                      onClick={() => {
                        props.setCushionColor(li.id);
                      }}
                      style={{ backgroundColor: li.thumbnail }}
                    ></li>
                  ))}
                </ColorVariation2>
              </SubTitle>
            </ColorSelection>
          </RightBody>
        </Main>
      </Section>
    </Fragment>
  );
}
