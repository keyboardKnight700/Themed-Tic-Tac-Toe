import { SETTINGS_TABS } from "../../config/gameData";

export default function SettingsTabsRenderer({
  SETTINGS_TABS,
  hoveredTab,
  handleHoveredTab,
  handleContent,
}) {
  return (
    <div className="settingsTabsContainer">
      {SETTINGS_TABS.map(({ id, classes, Button }) => {
        return (
          <Button
            key={id}
            className={`${classes} ${hoveredTab === id ? "hovered" : ""}`}
            onMouseEnter={() => handleHoveredTab(id)}
            onClick={() => handleContent(id)}
          />
        );
      })}
    </div>
  );
}
