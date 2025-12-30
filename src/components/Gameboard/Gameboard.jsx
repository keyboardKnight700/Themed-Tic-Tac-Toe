import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useRef } from "react";
import { useMousePupilsAnimation } from "../UI_Functions/UI_Hooks";
import { useMouseBlinkAnimation } from "../UI_Functions/UI_Hooks";
import { useMouseTextAnimation } from "../UI_Functions/UI_Hooks";

export default function Gameboard() {
  const gameboardSvg = useRef(null);

  useMousePupilsAnimation(gameboardSvg); // animates pupils of the mouse
  useMouseBlinkAnimation(gameboardSvg); // animates eyelids of the mouse
  useMouseTextAnimation(gameboardSvg); // animates speech bubble of the mouse

  return (
    <div className="gamebaordContainer" ref={gameboardSvg}>
      <GameboardSVG className="gameboard" />
    </div>
  );
}
