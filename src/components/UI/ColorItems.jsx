import styles from "./ColorItems.module.scss";
import texturesData from "../../data/textures.json";

export default function ColorItems({ baseColor, setBaseColor }) {
  return (
    <ul className={styles.colorVariation}>
      {texturesData.map((li) => (
        <li
          className={styles.colorList}
          key={li.id}
          id={baseColor === li.id ? "selected" : ""}
          onClick={() => {
            setBaseColor(li.id);
          }}
          style={{
            backgroundColor: `${li.thumbnail}`,
          }}
        ></li>
      ))}
    </ul>
  );
}
