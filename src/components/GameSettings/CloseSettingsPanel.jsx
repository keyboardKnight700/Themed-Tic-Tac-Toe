import overlayCloseIcon from "../../assets/overlayCloseIcon.svg";

export default function CloseSettingsPanel({ handleCloseSettingsPanel }) {
  return (
    <button
      className="overlayCloseBtn"
      onClick={() => handleCloseSettingsPanel()}
    >
      <img
        className="overlayCloseIcon"
        src={overlayCloseIcon}
        alt="x icon to close the window"
      />
    </button>
  );
}
