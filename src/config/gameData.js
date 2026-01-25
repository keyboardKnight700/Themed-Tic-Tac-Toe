import SettingsThemeTab from "../assets/SettingsBtnTheme.svg?react";
import SettingsTypeTab from "../assets/SettingsBtnType.svg?react";
import SettingsPieceTab from "../assets/SettingsBtnPiece.svg?react";
import SettingsAiOrFriendTab from "../assets/SettingsBtnAiOrFriend.svg?react";

import { getImageUrl } from "../utils/utils";

export const TYPE_CONTENTS = [
  {
    name: "classic_gameboard",
    text: "Classic",
    imageSource: getImageUrl("Classic_Gameboard_Icon"),
  },

  {
    name: "go_gameboard",
    text: "Go",
    imageSource: getImageUrl("Go_Gameboard_Icon").href,
  },
];

export const THEME_CONTENTS = [
  {
    name: "classic",
    text: "Classic",
    images: [
      {
        alt: "dog",
        class: "dog",
        source: getImageUrl("dog"),
      },
      {
        alt: "star",
        class: "star",
        source: getImageUrl("star"),
      },
    ],
  },
  {
    name: "christmas",
    text: "Christmas",
    images: [
      {
        alt: "christmas ball",
        class: "christmasBall",
        source: getImageUrl("christmasBall"),
      },
      {
        alt: "gingerbread",
        class: "gingerbread",
        source: getImageUrl("gingerbread"),
      },
      {
        alt: "gingerbread",
        class: "gingerbreadBig",
        source: getImageUrl("gingerbread"),
      },
    ],
  },
  {
    name: "halloween",
    text: "Halloween",
    images: [
      {
        alt: "spider",
        class: "spider",
        source: getImageUrl("spider"),
      },
      {
        alt: "spider web",
        class: "spider web",
        source: getImageUrl("spiderWeb"),
      },
    ],
  },
];

export const GAME_PIECES = [
  {
    name: "letterX",
    url: getImageUrl("letterXPiece"),
  },
  {
    name: "cheese",
    url: getImageUrl("cheesePiece"),
  },
  {
    name: "smiley",
    url: getImageUrl("smileyPiece"),
  },
  {
    name: "cupcake",
    url: getImageUrl("cupcakePiece"),
  },
  {
    name: "paw",
    url: getImageUrl("pawPiece"),
  },
  {
    name: "moon",
    url: getImageUrl("moonPiece"),
  },
  {
    name: "cat",
    url: getImageUrl("catPiece"),
  },
  {
    name: "letterO",
    url: getImageUrl("letterOPiece"),
  },
  {
    name: "mouse",
    url: getImageUrl("mousePiece"),
  },
];

export const SETTINGS_TABS = [
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
