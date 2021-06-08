import "../styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className="nav-item active">
            <Link to="/" style={{ width: "100" }}>
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/users">Users</Link>
          </li>
          <li className="nav-item active">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active">
            <Link to="/signin">Log in</Link>
          </li>
          <li className="nav-item active">
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
