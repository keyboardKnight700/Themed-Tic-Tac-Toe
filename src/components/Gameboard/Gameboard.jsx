import GameboardSVG from "../../assets/Gameboard.svg?react";
import { useEffect, useRef } from "react";

// document.addEventListener("DOMContentLoaded", mouseEyeballsAnimation);

export default function Gameboard() {
  const timerId = useRef(null);

  useEffect(function mousePupilsAnimation() {
    const MouseLeftPupil = document.getElementById("Mouse_Left_Pupil");
    const MouseRightPupil = document.getElementById("Mouse_Right_Pupil");

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
      }, 400);

      setTimeout(blink, Math.random() * 3000 + 2000);
    }

    blink();
  }, []);

  useEffect(function mouseTextAnimation() {
    const MouseSpeechBubble = document.getElementById("Mouse_Speech_Bubble");
    const MouseTextArea = document.getElementById("Mouse_Text_Area");
    const mouseTextContainer = document.getElementById("Mouse_Text_Container"); // foreignObject
    const mouseText = document.getElementById("Mouse_Text");

    if (!MouseTextArea || !mouseTextContainer || !mouseText) return;

    console.log("test passed");

    async function generateText() {
      const textArray = [
        "You want a piece of my cheese?",
        "Let's make a cheese cake!",
        "Cheese prices are gone high :(",
      ];

      MouseSpeechBubble.style.fill = "black";

      await new Promise((resolve) => setTimeout(resolve, 500));

      mouseText.textContent =
        textArray[Math.floor(Math.random() * textArray.length)];

      await new Promise((resolve) => setTimeout(resolve, 1000));
      MouseSpeechBubble.style.fill = "transparent";
      mouseText.textContent = "";
    }

    function loop() {
      const delay = Math.random() * (6000 - 3000) + 3000;

      if (timerId.current) clearTimeout(timerId.current);

      timerId.current = setTimeout(async () => {
        await generateText();

        loop();
      }, delay);
    }

    loop();

    const textBox = MouseTextArea.getBBox();
    mouseTextContainer.setAttribute("x", textBox.x);
    mouseTextContainer.setAttribute("y", textBox.y);
    mouseTextContainer.setAttribute("width", textBox.width);
    mouseTextContainer.setAttribute("height", textBox.height);
  }, []);

  return (
    <div className="gamebaordContainer">
      <GameboardSVG className="gameboard" />
    </div>
  );
}
