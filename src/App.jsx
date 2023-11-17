import { useState } from "react";
import Experience from "./Experience";

export default function App() {
  // sofa model
  const [sofaNo, setSofaNo] = useState("01");

  // base color
  const [baseColor, setBaseColor] = useState(0);

  // cushion color
  const [cushionColor, setCushionColor] = useState(0);

  // scene
  const [scene, setScene] = useState(1);

  // loading
  const [loading, setLoading] = useState(false);

  //screeShot
  const [isShot, setIsShot] = useState(false);

  return (
    <>
      <Experience
        sofaNo={sofaNo}
        setSofaNo={setSofaNo}
        baseColor={baseColor}
        setBaseColor={setBaseColor}
        cushionColor={cushionColor}
        setCushionColor={setCushionColor}
        loading={loading}
        setLoading={setLoading}
        scene={scene}
        setScene={setScene}
        isShot={isShot}
        setIsShot={setIsShot}
      />
    </>
  );
}
