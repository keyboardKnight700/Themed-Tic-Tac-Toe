import SketchyFrame from "../SketchyFrame";
import { TYPE_CONTENTS } from "../../config/gameData";

export default function TypeContentsRenderer({ content, onSelect }) {
  if (content !== "type") return;

  return (
    <>
      {TYPE_CONTENTS.map((content) => (
        <SketchyFrame key={content.name} classes="square typeContents">
          <img
            src={content.imageSource}
            alt={content.name}
            className={content.name}
          />
          <span>{content.text}</span>
        </SketchyFrame>
      ))}
    </>
  );
}
