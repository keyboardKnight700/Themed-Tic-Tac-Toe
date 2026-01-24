import SettingsPanelLauncher from "../../assets/SettingsPanelLauncher.svg?react";
import overlayCloseIcon from "../../assets/overlayCloseIcon.svg";

import SettingsThemeTab from "../../assets/SettingsBtnTheme.svg?react";
import SettingsTypeTab from "../../assets/SettingsBtnType.svg?react";
import SettingsPieceTab from "../../assets/SettingsBtnPiece.svg?react";
import SettingsAiOrFriendTab from "../../assets/SettingsBtnAiOrFriend.svg?react";

import { useState, useEffect } from "react";

import ClassicGameboardIcon from "../../assets/Classic_Gameboard_Icon.svg?react";
import GoGameboardIcon from "../../assets/Go_Gameboard_Icon.svg?react";
import christmasBall from "../../assets/christmasBall.svg";
import gingerbread from "../../assets/gingerbread.svg";
import dog from "../../assets/dog.svg";
import star from "../../assets/star.svg";
import spider from "../../assets/spider.svg";
import spiderWeb from "../../assets/spiderWeb.svg";
import { useSettingsPanel } from "./UI_Hooks";

//game pieces
const GAME_PIECES = [
  {
    name: "letterX",
    url: new URL("../../assets/letterXPiece.svg", import.meta.url).href,
  },
  {
    name: "cheese",
    url: new URL("../../assets/cheesePiece.svg", import.meta.url).href,
  },
  {
    name: "smiley",
    url: new URL("../../assets/smileyPiece.svg", import.meta.url).href,
  },
  {
    name: "cupcake",
    url: new URL("../../assets/cupcakePiece.svg", import.meta.url).href,
  },
  {
    name: "paw",
    url: new URL("../../assets/pawPiece.svg", import.meta.url).href,
  },
  {
    name: "moon",
    url: new URL("../../assets/moonPiece.svg", import.meta.url).href,
  },
  {
    name: "cat",
    url: new URL("../../assets/catPiece.svg", import.meta.url).href,
  },
  {
    name: "letterO",
    url: new URL("../../assets/letterOPiece.svg", import.meta.url).href,
  },
  {
    name: "mouse",
    url: new URL("../../assets/mousePiece.svg", import.meta.url).href,
  },
];

function SettingsPanelLauncherDesktop({ handleOpenOverlay, handleContent }) {
  return (
    <SettingsPanelLauncher
      className="SettingsPanelLauncherDesktop"
      onClick={() => {
        handleOpenOverlay();
        handleContent("type");
      }}
    />
  );
}

function CloseSettingsPanel({ handleCloseOverlay }) {
  return (
    <button className="overlayCloseBtn" onClick={() => handleCloseOverlay()}>
      <img
        className="overlayCloseIcon"
        src={overlayCloseIcon}
        alt="x icon to close the window"
      />
    </button>
  );
}

function SettingsContent({ content }) {
  return (
    <div className="settingsContent">
      {content === "type" && (
        <>
          <div className="frame square">
            <ClassicGameboardIcon className="ClassicGameboardIcon" />
            <span>Classic</span>
          </div>

          <div className="frame square">
            <GoGameboardIcon className="GoGameboardIcon" />
            <span>Go</span>
          </div>
        </>
      )}

      {content === "theme" && (
        <>
          <div className="frame rectangle classic">
            <img src={star} className="star" alt="" />
            <span>Classic</span>
            <img src={dog} className="dog" alt="" />
          </div>

          <div className="frame rectangle christmas">
            <img src={christmasBall} className="christmasBall" alt="" />
            <div>
              <span>Christmas</span>
              <img src={gingerbread} alt="" />
            </div>
            <img src={gingerbread} className="gingerbreadBig" alt="" />
          </div>

          <div className="frame rectangle halloween">
            <img src={spider} alt="" />
            <span>Halloween</span>
            <img src={spiderWeb} alt="" />
          </div>
        </>
      )}

      {content === "piece" && (
        <div className="pieceContainer">
          {GAME_PIECES.map((piece) => (
            <div key={piece.name} className="frame">
              <img src={piece.url} className="gamePiece" alt={piece.name} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SettingsTabs({
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

export function SettingsPanel() {
  const {
    overlay,
    content,
    hoveredTab,
    handleOpenOverlay,
    handleCloseOverlay,
    handleHoveredTab,
    handleContent,
  } = useSettingsPanel();

  const SETTINGS_TABS = [
    {
      id: "type",
      classes: "settingTab settingsTypeTab",
      Button: SettingsTypeTab,
    },
    {
      id: "theme",
      classes: "settingTab settingsThemeTab",
      Button: SettingsThemeTab,
    },
    {
      id: "piece",
      classes: "settingTab settingsPieceTab",
      Button: SettingsPieceTab,
    },
    {
      id: "ai",
      classes: "settingTab settingsAiOrFriendTab",
      Button: SettingsAiOrFriendTab,
    },
  ];

  useEffect(() => {
    if (overlay && content === "type") {
      handleHoveredTab("type");
    }
  }, [overlay, content]);

  return (
    <>
      <SettingsPanelLauncherDesktop
        handleOpenOverlay={handleOpenOverlay}
        handleContent={handleContent}
      />

      {overlay && (
        <div className="settingsOverlay">
          <CloseSettingsPanel handleCloseOverlay={handleCloseOverlay} />

          <SettingsContent content={content} />

          <SettingsTabs
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
