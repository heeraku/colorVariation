import styles from "./ColorTabs.module.scss";

function Tab({ isSelected, onSelect, children }) {
  return (
    <li>
      <button
        className={isSelected ? "selected" : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
      {isSelected && <div className={styles.active_tab_indicator} />}
    </li>
  );
}

export default function ColorTabs({ selectedType, onSelectType, children }) {
  return (
    <>
      <menu id="tabs" className={styles.menu}>
        <Tab
          isSelected={selectedType === "base"}
          onSelect={() => onSelectType("base")}
        >
          ベースカラー
        </Tab>
        <Tab
          isSelected={selectedType === "cushion"}
          onSelect={() => onSelectType("cushion")}
        >
          クッションカラー
        </Tab>
      </menu>
      <div>{children}</div>
    </>
  );
}
