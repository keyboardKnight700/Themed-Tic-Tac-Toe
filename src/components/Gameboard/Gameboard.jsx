import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useMousePupilsAnimation } from "../UI_Functions/UI_Hooks";
import { useMouseBlinkAnimation } from "../UI_Functions/UI_Hooks";
import { useMouseTextAnimation } from "../UI_Functions/UI_Hooks";

export default function Gameboard() {
  useMousePupilsAnimation(); // animates pupils of the mouse
  useMouseBlinkAnimation(); // animates eyelids of the mouse
  useMouseTextAnimation(); // animates speech bubble of the mouse

  return (
    <div className="gamebaordContainer">
      <GameboardSVG className="gameboard" />
    </div>
  );
}
