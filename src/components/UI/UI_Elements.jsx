import SettingsMainBtn from "../../assets/Settings_Btn.svg?react";
import SettingsThemeBtn from "../../assets/SettingsBtnTheme.svg?react";
import SettingsTypeBtn from "../../assets/SettingsBtnType.svg?react";
import SettingsPieceBtn from "../../assets/SettingsBtnPiece.svg?react";
import SettingsAiOrFriendBtn from "../../assets/SettingsBtnAiOrFriend.svg?react";
import overlayCloseBtnBg from "../../assets/overlayCloseBtnBg.svg";

import { useState, useEffect } from "react";

import ClassicGameboardIcon from "../../assets/Classic_Gameboard_Icon.svg?react";
import GoGameboardIcon from "../../assets/Go_Gameboard_Icon.svg?react";
import christmasBall from "../../assets/christmasBall.svg";
import gingerbread from "../../assets/gingerbread.svg";
import dog from "../../assets/dog.svg";
import star from "../../assets/star.svg";
import spider from "../../assets/spider.svg";
import spiderWeb from "../../assets/spiderWeb.svg";

export function SettingsBtns() {
  const [overlay, setOverlay] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState("");
  const [content, setContent] = useState("type");

  const Settings_Buttons = [
    {
      id: "type",
      classes: "settingBtn settingsTypeBtn",
      Button: SettingsTypeBtn,
    },
    {
      id: "theme",
      classes: "settingBtn settingsThemeBtn",
      Button: SettingsThemeBtn,
    },
    {
      id: "piece",
      classes: "settingBtn settingsPieceBtn",
      Button: SettingsPieceBtn,
    },
    {
      id: "ai",
      classes: "settingBtn settingsAiOrFriendBtn",
      Button: SettingsAiOrFriendBtn,
    },
  ];

  useEffect(() => {
    if (overlay && content === "type") {
      setHoveredBtn("type");
    }
  }, [overlay, content]);

  return (
    <>
      <SettingsMainBtn
        className="settingsMainBtn"
        onClick={() => {
          setOverlay(true);
          setContent("type");
        }}
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

          <div className="settingsContent">
            {content === "type" && (
              <>
                <div className="iconFrame square">
                  <ClassicGameboardIcon className="ClassicGameboardIcon" />
                  <span>Classic</span>
                </div>

                <div className="iconFrame square">
                  <GoGameboardIcon className="GoGameboardIcon" />
                  <span>Go</span>
                </div>
              </>
            )}

            {content === "theme" && (
              <>
                <div className="iconFrame rectangle classic">
                  <img src={star} className="star" alt="" />
                  <span>Classic</span>
                  <img src={dog} className="dog" alt="" />
                </div>

                <div className="iconFrame rectangle christmas">
                  <img src={christmasBall} className="christmasBall" alt="" />
                  <div>
                    <span>Christmas</span>
                    <img src={gingerbread} alt="" />
                  </div>
                  <img src={gingerbread} className="gingerbreadBig" alt="" />
                </div>

                <div className="iconFrame rectangle halloween">
                  <img src={spider} alt="" />
                  <span>Halloween</span>
                  <img src={spiderWeb} alt="" />
                </div>
              </>
            )}
          </div>

          <div className="settingsBtnsContainer">
            {Settings_Buttons.map(({ id, classes, Button }) => {
              return (
                <Button
                  key={id}
                  className={`${classes} ${hoveredBtn === id ? "hovered" : ""}`}
                  onMouseEnter={() => setHoveredBtn(id)}
                  onClick={() => setContent(id)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
