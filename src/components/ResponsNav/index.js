import React, { useState } from "react";
import "./style.css";

// const menuToggle = document.querySelector(".menu-toggle input");
// const nav = document.querySelector("nav ul");

// menuToggle.addEventListener("click", () => {

// });

const ResponsNav = () => {
  const [click, setClick] = useState(false);
  const classAdd = () => {
    setClick((current) => !current);
    // nav.classList.toggle("slide");
  };
  return (
    <React.Fragment>
      <nav>
        <div className="Logo"></div>
        <ul className={click ? "slide" : ""}>
          <li>
            <a href="#ourservice">Our Service</a>
          </li>
          <li>
            <a href="#whyus">Why Us</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#FAQ">FAQ</a>
          </li>
        </ul>

        <div className="menu-toggle" onClick={classAdd}>
          <input type="checkbox"></input>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default ResponsNav;
