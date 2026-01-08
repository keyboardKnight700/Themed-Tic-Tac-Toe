import SettingsMainBtn from "../../assets/Settings_Btn.svg?react";
import SettingsThemeBtn from "../../assets/SettingsBtnTheme.svg?react";
import SettingsTypeBtn from "../../assets/SettingsBtnType.svg?react";
import SettingsPieceBtn from "../../assets/SettingsBtnPiece.svg?react";
import SettingsAiOrFriendBtn from "../../assets/SettingsBtnAiOrFriend.svg?react";
import overlayCloseBtnBg from "../../assets/overlayCloseBtnBg.svg";

import { useState, useEffect } from "react";

export function SettingsBtns() {
  const [overlay, setOverlay] = useState(false);
  const [activeBtn, setActiveBtn] = useState("");
  const Settings_Buttons = [
    {
      id: "type",
      classes: "settingBtn settingsTypeBtn",
      Component: SettingsTypeBtn,
    },
    {
      id: "theme",
      classes: "settingBtn settingsThemeBtn",
      Component: SettingsThemeBtn,
    },
    {
      id: "piece",
      classes: "settingBtn settingsPieceBtn",
      Component: SettingsPieceBtn,
    },
    {
      id: "ai",
      classes: "settingBtn settingsAiOrFriendBtn",
      Component: SettingsAiOrFriendBtn,
    },
  ];

  useEffect(() => {
    if (overlay) {
      setActiveBtn("type");
    }
  }, [overlay]);

  return (
    <>
      <SettingsMainBtn
        className="settingsMainBtn"
        onClick={() => setOverlay(true)}
      />

      {overlay && (
        <div className="settingsOverlay">
          <button className="overlayCloseBtn" onClick={() => setOverlay(false)}>
            <img
              className="overlayCloseBtnBg"
              src={overlayCloseBtnBg}
              alt="x icon to close the window"
            />
          </button>

          <div className="settingsContent"></div>

          <div className="settingsBtnsContainer">
            {Settings_Buttons.map(({ id, classes, Component }) => {
              return (
                <Component
                  key={id}
                  className={`${classes} ${activeBtn === id ? "active" : ""}`}
                  onMouseEnter={() => setActiveBtn(id)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
