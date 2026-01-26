import { useState } from "react";

export function useSettingsPanel() {
  const [overlay, setOverlay] = useState(false);
  const [hoveredTab, setHoveredTab] = useState("");
  const [content, setContent] = useState("type");

  const handleOpenSettingsPanel = () => setOverlay(true);
  const handleCloseSettingsPanel = () => setOverlay(false);

  const handleHoveredTab = (id) => setHoveredTab(id);

  const handleContent = (id) => setContent(id);

  return {
    overlay,
    hoveredTab,
    content,
    handleOpenSettingsPanel,
    handleCloseSettingsPanel,
    handleHoveredTab,
    handleContent,
  };
}
