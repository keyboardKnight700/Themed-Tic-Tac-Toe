export default function SketchyFrame({ children, classes = "", onClick }) {
  return (
    <div className={`frame ${classes}`} onClick={onClick}>
      {children}
    </div>
  );
}
