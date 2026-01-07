import SettingsBtn from "../../assets/Settings_Btn.svg?react";
import overlayCloseBtnBg from "../../assets/overlayCloseBtnBg.svg";
import { useState } from "react";

export default function GameSettings() {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="gameSettingsContainer">
      <SettingsBtn
        className="settingsMainBtn"
        onClick={() => setOverlay(true)}
      />

      {overlay ? (
        <div className="settingsOverlay">
          <button className="overlayCloseBtn" onClick={() => setOverlay(false)}>
            <img
              className="overlayCloseBtnBg"
              src={overlayCloseBtnBg}
              alt="x icon to close the window"
            />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
