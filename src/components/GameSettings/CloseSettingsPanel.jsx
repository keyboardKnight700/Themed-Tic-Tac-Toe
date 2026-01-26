import settingsPanelCloseIcon from "../../assets/settingsPanelCloseIcon.svg";

export default function CloseSettingsPanel({ handleCloseSettingsPanel }) {
  return (
    <button
      className="settingsPanelCloseBtn"
      onClick={() => handleCloseSettingsPanel()}
    >
      <img
        className="settingsPanelCloseIcon"
        src={settingsPanelCloseIcon}
        alt="close settings panel"
      />
    </button>
  );
}
