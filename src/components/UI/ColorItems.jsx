import styles from "./ColorItems.module.scss";
import texturesData from "../../data/textures.json";
import { motion } from "framer-motion";

export default function ColorItems({ baseColor, setBaseColor }) {
  return (
    <motion.ul
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
      }}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      className={styles.colorVariation}
      transition={{ type: "spring" }}
    >
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
    </motion.ul>
  );
}
