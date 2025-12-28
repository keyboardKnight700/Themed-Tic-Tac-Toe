import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useEffect } from "react";

// document.addEventListener("DOMContentLoaded", mouseEyeballsAnimation);

export default function Gameboard() {
  useEffect(function mouseEyeballsAnimation() {
    const MouseLeftPupil = document.getElementById("Mouse_Left_Pupil");
    const MouseRightPupil = document.getElementById("Mouse_Right_Pupil");

    console.log(MouseLeftPupil);

    if (!MouseLeftPupil || !MouseRightPupil) return;

    window.addEventListener("mousemove", (e) => {
      const positionX = (e.clientX / window.innerWidth - 0.5) * 30;
      const positionY = (e.clientY / window.innerHeight - 0.5) * 30;

      MouseLeftPupil.style.transform = `translate(${positionX}px, ${positionY}px)`;
      MouseRightPupil.style.transform = `translate(${positionX}px, ${positionY}px)`;
    });
  }, []);

  useEffect(function mouseBlinkAnimation() {
    const MouseLeftEyelid = document.getElementById("Mouse_Left_Eyelid");
    const MouseRightEyelid = document.getElementById("Mouse_Right_Eyelid");

    if (!MouseLeftEyelid || !MouseRightEyelid) return;

    function blink() {
      MouseRightEyelid.classList.add("blink");
      MouseLeftEyelid.classList.add("blink");

      setTimeout(() => {
        MouseLeftEyelid.classList.remove("blink");
        MouseRightEyelid.classList.remove("blink");
      }, 1500);

      setTimeout(blink, Math.random() * 3000 + 2000);
    }

    blink();
  }, []);

  return (
    <div className="gamebaordContainer">
      <GameboardSVG className="gameboard" />
    </div>
  );
}
