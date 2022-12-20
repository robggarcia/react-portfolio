import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-div">
        <img id="rg-icon" alt="rg icon" src="/apple-touch-icon.png"></img>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
