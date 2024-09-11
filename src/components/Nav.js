import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive("/")}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about")}>
            A propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
