import { useState } from "react";
import Experience from "./Experience";

export default function App() {
  // sofa model
  const [sofaNo, setSofaNo] = useState("01");

  // base color
  const [baseColor, setBaseColor] = useState(0);

  // cushion color
  const [cushionColor, setCushionColor] = useState(0);
  return (
    <>
      <Experience
        sofaNo={sofaNo}
        setSofaNo={setSofaNo}
        baseColor={baseColor}
        setBaseColor={setBaseColor}
        cushionColor={cushionColor}
        setCushionColor={setCushionColor}
      />
    </>
  );
}
