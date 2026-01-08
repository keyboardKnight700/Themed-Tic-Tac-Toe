import SettingsMainBtn from "../../assets/Settings_Btn.svg?react";
import SettingsThemeBtn from "../../assets/SettingsBtnTheme.svg?react";
import SettingsTypeBtn from "../../assets/SettingsBtnType.svg?react";
import SettingsPieceBtn from "../../assets/SettingsBtnPiece.svg?react";
import SettingsAiOrFriendBtn from "../../assets/SettingsBtnAiOrFriend.svg?react";

import overlayCloseBtnBg from "../../assets/overlayCloseBtnBg.svg";
import { useState, useEffect } from "react";

export default function GameSettings() {
  const [overlay, setOverlay] = useState(false);

  function handleClick() {}

  return (
    <div className="gameSettingsContainer">
      <SettingsMainBtn
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

          <div className="settingsContent"></div>

          <div className="settingsBtns">
            <SettingsThemeBtn className="settingBtn settingsThemeBtn" />
            <SettingsTypeBtn className="settingBtn settingsTypeBtn" />
            <SettingsPieceBtn className="settingBtn settingsPieceBtn" />
            <SettingsAiOrFriendBtn className="settingBtn settingsAiOrFriendBtn" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
