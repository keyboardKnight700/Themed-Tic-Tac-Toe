import { useEffect } from "react";

export default function useMouseBlinkAnimation(gameboardSvg) {
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
