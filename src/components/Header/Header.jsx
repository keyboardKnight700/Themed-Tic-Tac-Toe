import image from "../../assets/Header-bg.svg";

export default function Header() {
  return (
    <header>
      <h1 className="headerTitle">Tic Tac Toe</h1>
      <img src={image} alt="doodle lines" />
    </header>
  );
}
