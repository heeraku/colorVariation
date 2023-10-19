import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Fragment } from "react";
import K012 from "./components/sofa/K012";
import styled from "styled-components";

export default function Experience(props) {
  const Section = styled.section`
    position: relative;
    padding: 100px;
    width: 100vw;
    height: 100vh;
    background-color: #d0d4ca;
  `;

  const Title = styled.h1`
    margin-bottom: 50px;
    width: 100%;
    background-color: yellow;
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
    background-color: #b6fffa;
  `;

  const CanvasWrapper = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 500px;
    background-color: pink;
    border: 1px solid blue;
  `;

  const Information = styled.div`
    width: 100%;
    background-color: #bfb29e;
    text-align: center;
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
                  fov: 50,
                  near: 1,
                  far: 20,
                }}
              >
                {/* <PerspectiveCamera makeDefault position={[0, 0, 0]} /> */}
                {/* background */}
                <color attach="background" args={["#dfdfdf"]} />
                {/* light */}
                <pointLight position={[4, 3, 2]} intensity={0.5} />
                <OrbitControls
                  makeDefault
                  enableZoom={false}
                  // enablePan
                  target={[0, 0, 0]}
                  // maxDistance={20}
                  // minDistance={0.1}
                  // minPolarAngle={Math.PI / 2.5}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2}
                  // maxAzimuthAngle={Math.PI / 1.7}
                  // minAzimuthAngle={-Math.PI / 10}
                />
                <K012
                  position={[0.2, -1, 0]}
                  scale={2.5}
                  rotation={[0, 0, 0]}
                />
              </Canvas>
            </CanvasWrapper>
            <Information>ここにカラー情報</Information>
          </LeftBody>
          <RightBody />
        </Main>
      </Section>
    </Fragment>
  );
}
