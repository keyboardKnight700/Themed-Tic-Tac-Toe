import TypeBtn from "../../assets/Type_Btn.svg?react";
import ThemeBtn from "../../assets/Theme_Btn.svg?react";
import PieceBtn from "../../assets/Piece_Btn.svg?react";
import VsFriendBtn from "../../assets/Vs_Friend_Btn.svg?react";

export default function GameSettings() {
  return (
    <div className="gameSettingsContainer">
      <TypeBtn className="gameSettingsBtn" />
      <ThemeBtn className="gameSettingsBtn" />
      <PieceBtn className="gameSettingsBtn" />
      <VsFriendBtn className="gameSettingsBtn" />
    </div>
  );
}
