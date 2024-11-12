import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="navs">
        <h3>
          <Link to="/">Home</Link>
        </h3>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
        <h3>
          <Link to="/gallery">Gallery</Link>
        </h3>
        <h3>
          <Link to="/users">Users</Link>
        </h3>
      </div>
    </div>
  );
}

export default Header;
