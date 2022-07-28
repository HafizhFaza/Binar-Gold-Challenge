import "./style.css";
import { AppBar } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      <div className="nav-row">
        <div className="nav-logo"></div>
        <div className="nav-list">
          <a href="#ourservice">Our Services</a>
          <a href="#whyus">Why Us</a>
          <a href="testimonial">Testimonial</a>
          <a href="FAQ">FAQ</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
