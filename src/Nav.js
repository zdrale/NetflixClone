import "./Nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionToNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionToNavBar);
    return () => window.removeEventListener("scroll", transitionToNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
          alt=""
          className="nav_logo"
        ></img>
        <img
          className="nav_avatar"
          src="https://ionicframework.com/docs/img/demos/avatar.svg"
          alt="avatar"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
