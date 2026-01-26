import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useRef, useEffect } from "react";
import useMousePupilsAnimation from "../hooks/useMousePupilsAnimation";
import useMouseBlinkAnimation from "../hooks/useMouseBlinkAnimation";
import useMouseAndCatTextAnimation from "../hooks/useMouseAndCatTextAnimation";

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
