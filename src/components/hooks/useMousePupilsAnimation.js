import { useEffect } from "react";

export default function useMousePupilsAnimation(gameboardSvg) {
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
