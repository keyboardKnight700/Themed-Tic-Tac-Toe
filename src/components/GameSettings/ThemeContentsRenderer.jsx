import SketchyFrame from "../SketchyFrame";
import { THEME_CONTENTS } from "../../config/gameData";

export default function ThemeContentsRenderer({ content, onSelect }) {
  if (content !== "theme") return;

  return (
    <>
      {THEME_CONTENTS.map((theme) =>
        theme.name === "christmas" ? (
          <SketchyFrame key={theme.name} classes={`rectangle ${theme.name}`}>
            <img
              src={theme.images[0].source}
              alt={theme.images[0].alt}
              className={theme.images[0].class}
            />
            <div>
              <span className="christ">{theme.text}</span>
              <img
                src={theme.images[1].source}
                alt={theme.images[1].alt}
                className={theme.images[1].class}
              />
            </div>
            <img
              src={theme.images[2].source}
              alt={theme.images[2].alt}
              className={theme.images[2].class}
            />
          </SketchyFrame>
        ) : (
          <SketchyFrame key={theme.name} classes={`rectangle ${theme.name}`}>
            <img
              src={theme.images[0].source}
              alt={theme.images[0].alt}
              className={theme.images[0].class}
            />
            <span>{theme.text}</span>
            <img
              src={theme.images[1].source}
              alt={theme.images[1].alt}
              className={theme.images[1].class}
            />
          </SketchyFrame>
        ),
      )}
    </>
  );
}
