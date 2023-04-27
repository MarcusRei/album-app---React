import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Startsida</Link>
        </li>
        <li>
          <Link to="/albums">Album</Link>
        </li>
      </ul>
    </nav>
  );
};
