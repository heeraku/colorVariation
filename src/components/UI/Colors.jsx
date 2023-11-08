import { useState } from "react";
import ColorTabs from "./ColorTabs";
import styles from "./Colors.module.scss";
import ColorItems from "./ColorItems";
import texturesData from "../../data/textures.json";

export default function Colors({
  baseColor,
  setBaseColor,
  cushionColor,
  setCushionColor,
  sofaNo,
}) {
  const [selectedType, setSelectedType] = useState("base");

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  return (
    <div id="colors">
      <ColorTabs onSelectType={handleSelectType} selectedType={selectedType}>
        <section className={styles.colorSection}>
          {selectedType === "base" ? (
            <>
              <h3 className={styles.selectedItem}>
                選択中のカラー：
                {texturesData.map((data) => {
                  if (data.id === baseColor) {
                    return data.label;
                  }
                })}
              </h3>
              <ColorItems baseColor={baseColor} setBaseColor={setBaseColor} />
            </>
          ) : sofaNo !== "03" ? (
            <>
              <h3 className={styles.selectedItem}>
                選択中のカラー：
                {texturesData.map((data) => {
                  if (data.id === cushionColor) {
                    return data.label;
                  }
                })}
              </h3>
              <ColorItems
                baseColor={cushionColor}
                setBaseColor={setCushionColor}
              />
            </>
          ) : (
            <p className={styles.alert}>
              本商品はクッションカラーがありません。
            </p>
          )}
        </section>
      </ColorTabs>
    </div>
  );
}
