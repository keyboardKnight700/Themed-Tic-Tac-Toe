import { useSettingsPanel } from "../hooks/useSettingsPanel";
import { SETTINGS_TABS } from "../../config/gameData";
import SettingsContentsRenderer from "./SettingsContentsRenderer";
import SettingsTabsRenderer from "./SettingsTabsRenderer";
import SettingsPanelLauncher from "./SettingsPanelLauncher";
import CloseSettingsPanel from "./CloseSettingsPanel";

import { useEffect } from "react";

export default function GameSettings() {
  const {
    overlay,
    content,
    hoveredTab,
    handleOpenSettingsPanel,
    handleCloseSettingsPanel,
    handleHoveredTab,
    handleContent,
  } = useSettingsPanel();

  useEffect(() => {
    if (overlay && content === "type") {
      handleHoveredTab("type");
    }
  }, [overlay, content]);

  return (
    <>
      <SettingsPanelLauncher
        handleOpenSettingsPanel={handleOpenSettingsPanel}
        handleContent={handleContent}
      />

      {overlay && (
        <div className="settingsOverlay">
          <CloseSettingsPanel
            handleCloseSettingsPanel={handleCloseSettingsPanel}
          />

          <SettingsContentsRenderer content={content} />

          <SettingsTabsRenderer
            SETTINGS_TABS={SETTINGS_TABS}
            hoveredTab={hoveredTab}
            handleHoveredTab={handleHoveredTab}
            handleContent={handleContent}
          />
        </div>
      )}
    </>
  );
}
