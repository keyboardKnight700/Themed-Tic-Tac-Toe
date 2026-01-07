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

export function useMouseAndCatTextAnimation(id, gameboardSvg) {
  useEffect(() => {
    if (!gameboardSvg) return;
    let config;
    const svg = gameboardSvg.current;
    let componentStillActive = true;
    let timerId;

    if (id === "mouse") {
      config = {
        speechBubble: "#Mouse_Speech_Bubble",
        textArea: "#Mouse_Text_Area",
        textContainer: "#Mouse_Text_Container",
        text: "#Mouse_Text",
        textArray: [
          "You want a piece of my cheese?",
          "Let's make a cheese cake!",
          "Cheese prices are gone high :(",
        ],
      };
    } else {
      config = {
        textArea: "#Cat_Text_Area",
        textContainer: "#Cat_Text_Container",
        text: "#Cat_Text",
        textArray: ["Hi", "I ❤️ U!"],
      };
    }

    const speechBubble = svg.querySelector(config.speechBubble);
    const textArea = svg.querySelector(config.textArea);
    const textContainer = svg.querySelector(config.textContainer); // foreignObject
    const text = svg.querySelector(config.text);

    if (
      !textArea ||
      !textContainer ||
      !text ||
      (id === "mouse" && !speechBubble)
    )
      return;

    async function generateText() {
      if (speechBubble) speechBubble.style.fill = "black";

      await new Promise((resolve) => setTimeout(resolve, 500));
      if (!componentStillActive) return;

      text.textContent =
        config.textArray[Math.floor(Math.random() * config.textArray.length)];

      await new Promise((resolve) => setTimeout(resolve, 1000));
      if (!componentStillActive) return;

      if (speechBubble) speechBubble.style.fill = "transparent";
      text.textContent = "";
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

    const textBox = textArea.getBBox();
    textContainer.setAttribute("x", textBox.x);
    textContainer.setAttribute("y", textBox.y);
    textContainer.setAttribute("width", textBox.width);
    textContainer.setAttribute("height", textBox.height);

    return () => {
      componentStillActive = false;
      clearTimeout(timerId);
    };
  }, [id, gameboardSvg]);
}
