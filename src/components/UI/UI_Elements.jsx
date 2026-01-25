import SettingsPanelLauncher from "../../assets/SettingsPanelLauncher.svg?react";
import overlayCloseIcon from "../../assets/overlayCloseIcon.svg";
import { useSettingsPanel } from "./UI_Hooks";
import SketchyFrame from "../SketchyFrame";

import { useState, useEffect } from "react";
import { TYPE_CONTENTS } from "../../config/gameData";
import { THEME_CONTENTS } from "../../config/gameData";
import { GAME_PIECES } from "../../config/gameData";
import { SETTINGS_TABS } from "../../config/gameData";

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
          {TYPE_CONTENTS.map((content) => (
            <SketchyFrame key={content.name} classes="typeContents">
              <img
                src={content.imageSource}
                alt={content.name}
                className={content.name}
              />
              <span>{content.text}</span>
            </SketchyFrame>
          ))}
        </>
      )}

      {content === "theme" && (
        <>
          {THEME_CONTENTS.map((theme) =>
            theme.name === "christmas" ? (
              <SketchyFrame
                key={theme.name}
                classes={`rectangle ${theme.name}`}
              >
                <img
                  src={theme.images[0].source}
                  alt={theme.images[0].alt}
                  className={theme.images[0].class}
                />
                <div>
                  <span className="christ">{theme.text}</span>
                  <img
                    src={theme.images[1].source}
                    alt={theme.images[1].alt}
                    className={theme.images[1].class}
                  />
                </div>
                <img
                  src={theme.images[2].source}
                  alt={theme.images[2].alt}
                  className={theme.images[2].class}
                />
              </SketchyFrame>
            ) : (
              <SketchyFrame
                key={theme.name}
                classes={`rectangle ${theme.name}`}
              >
                <img
                  src={theme.images[0].source}
                  alt={theme.images[0].alt}
                  className={theme.images[0].class}
                />
                <span>{theme.text}</span>
                <img
                  src={theme.images[1].source}
                  alt={theme.images[1].alt}
                  className={theme.images[1].class}
                />
              </SketchyFrame>
            ),
          )}
        </>
      )}

      {content === "piece" && (
        <div className="pieceContainer">
          {GAME_PIECES.map((piece) => (
            <SketchyFrame key={piece.name}>
              <img src={piece.url} className="gamePiece" alt={piece.name} />
            </SketchyFrame>
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
