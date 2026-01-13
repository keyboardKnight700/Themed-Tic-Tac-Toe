import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useRef, useEffect } from "react";
import { useMousePupilsAnimation } from "../UI/UI_Hooks";
import { useMouseBlinkAnimation } from "../UI/UI_Hooks";
import { useMouseAndCatTextAnimation } from "../UI/UI_Hooks";

export default function Gameboard() {
  const gameboardSvg = useRef(null);

  useMousePupilsAnimation(gameboardSvg); // animates pupils of the mouse
  useMouseBlinkAnimation(gameboardSvg); // animates eyelids of the mouse
  useMouseAndCatTextAnimation("cat", gameboardSvg);
  useMouseAndCatTextAnimation("mouse", gameboardSvg);

  return (
    <div className="gamebaordContainerClassicTheme" ref={gameboardSvg}>
      <GameboardSVG className="gameboardClassicTheme" />
    </div>
  );
}
