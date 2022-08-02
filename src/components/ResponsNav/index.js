import React from "react";
import "./style.css";

const menuToggle = document.getElementById(".menu-toggle input");
const nav = document.getElementById("nav ul");

// menuToggle.addEventListener("click", () => {
//   nav.classList.toggle("slide");
// });

const ResponsNav = () => {
  return (
    <React.Fragment>
      <nav>
        <div className="Logo"></div>
        <ul>
          <li>
            <a href="">OurService</a>
          </li>
          <li>
            <a href="">WhyUs</a>
          </li>
          <li>
            <a href="">Testimonial</a>
          </li>
          <li>
            <a href="">Faq</a>
          </li>
        </ul>

        <div className="menu-toggle">
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
