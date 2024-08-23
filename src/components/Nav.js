import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
