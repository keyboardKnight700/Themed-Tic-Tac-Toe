import image from "../Header/Header-bg.svg";

export default function Header() {
  console.log(image);

  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <img src={image} alt="doodle lines" />
    </header>
  );
}
