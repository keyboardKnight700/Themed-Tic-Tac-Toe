import SketchyFrame from "../SketchyFrame";
import { GAME_PIECES } from "../../config/gameData";

export default function PieceContentsRenderer({ content }) {
  if (content !== "piece") return;

  return (
    <div className="pieceContainer">
      {GAME_PIECES.map((piece) => (
        <SketchyFrame key={piece.name}>
          <img src={piece.url} className="gamePiece" alt={piece.name} />
        </SketchyFrame>
      ))}
    </div>
  );
}
