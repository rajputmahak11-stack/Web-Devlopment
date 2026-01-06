import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">Login</Link>
          <Link className="btn btn-outline-light" to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
