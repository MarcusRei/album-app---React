import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <h2>Välkommen till Musikhålan!</h2>

      <Link to="/albums">Klicka här för att se alla våra album!</Link>
    </>
  );
};
