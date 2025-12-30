import { useEffect, useRef } from "react";

export function useMousePupilsAnimation(gameboardSvg) {
  useEffect(() => {
    if (!gameboardSvg.current) return;

    const rightPupil = gameboardSvg.current.querySelector("#Mouse_Right_Pupil");
    const leftPupil = gameboardSvg.current.querySelector("#Mouse_Left_Pupil");

    if (!leftPupil || !rightPupil) return;

    function handleMouseMove(e) {
      const positionX = (e.clientX / window.innerWidth - 0.5) * 30;
      const positionY = (e.clientY / window.innerHeight - 0.5) * 30;

      leftPupil.style.transform = `translate(${positionX}px, ${positionY}px)`;
      rightPupil.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [gameboardSvg]);
}

export function useMouseBlinkAnimation(gameboardSvg) {
  useEffect(() => {
    if (!gameboardSvg.current) return;
    const svg = gameboardSvg.current;

    const MouseLeftEyelid = svg.querySelector("#Mouse_Left_Eyelid");
    const MouseRightEyelid = svg.querySelector("#Mouse_Right_Eyelid");

    if (!MouseLeftEyelid || !MouseRightEyelid) return;

    let blinkTimeout, loopTimeout;
    function blink() {
      MouseRightEyelid.classList.add("blink");
      MouseLeftEyelid.classList.add("blink");

      blinkTimeout = setTimeout(() => {
        MouseLeftEyelid.classList.remove("blink");
        MouseRightEyelid.classList.remove("blink");
      }, 400);

      loopTimeout = setTimeout(blink, Math.random() * 3000 + 2000);
    }

    blink();

    return () => {
      clearTimeout(blinkTimeout);
      clearTimeout(loopTimeout);
    };
  }, [gameboardSvg]);
}

export function useMouseTextAnimation(gameboardSvg) {
  useEffect(() => {
    if (!gameboardSvg.current) return;
    const svg = gameboardSvg.current;
    let componentStillActive = true;
    let timerId;

    const MouseSpeechBubble = svg.querySelector("#Mouse_Speech_Bubble");
    const MouseTextArea = svg.querySelector("#Mouse_Text_Area");
    const mouseTextContainer = svg.querySelector("#Mouse_Text_Container"); // foreignObject
    const mouseText = svg.querySelector("#Mouse_Text");

    if (
      !MouseTextArea ||
      !mouseTextContainer ||
      !mouseText ||
      !mouseTextContainer
    )
      return;

    async function generateText() {
      const textArray = [
        "You want a piece of my cheese?",
        "Let's make a cheese cake!",
        "Cheese prices are gone high :(",
      ];

      MouseSpeechBubble.style.fill = "black";

      await new Promise((resolve) => setTimeout(resolve, 500));
      if (!componentStillActive) return;

      mouseText.textContent =
        textArray[Math.floor(Math.random() * textArray.length)];

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!componentStillActive) return;

      MouseSpeechBubble.style.fill = "transparent";
      mouseText.textContent = "";
    }

    function loop() {
      const delay = Math.random() * (6000 - 3000) + 3000;

      timerId = setTimeout(async () => {
        if (!componentStillActive) return;
        await generateText();

        if (componentStillActive) loop();
      }, delay);
    }

    loop();

    const textBox = MouseTextArea.getBBox();
    mouseTextContainer.setAttribute("x", textBox.x);
    mouseTextContainer.setAttribute("y", textBox.y);
    mouseTextContainer.setAttribute("width", textBox.width);
    mouseTextContainer.setAttribute("height", textBox.height);

    return () => {
      componentStillActive = false;
      clearTimeout(timerId);
    };
  }, [gameboardSvg]);
}
