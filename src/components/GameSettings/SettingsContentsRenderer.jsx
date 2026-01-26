import TypeContentsRenderer from "./TypeContentsRenderer.jsx";
import ThemeContentsRenderer from "./ThemeContentsRenderer.jsx";
import PieceContentsRenderer from "./PieceContentsRenderer.jsx";

export default function SettingsContentsRenderer({ content }) {
  const Render = () => {
    if (content === "type") return <TypeContentsRenderer content={content} />;
    if (content === "theme") return <ThemeContentsRenderer content={content} />;
    if (content == "piece") return <PieceContentsRenderer content={content} />;
  };

  return (
    <div className="settingsContent">
      <Render />
    </div>
  );
}
