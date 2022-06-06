import React from "react";
import Logo from "./images/logo.svg";
import Menu from "./images/menu.svg";
import ColorMode from "./images/dark-mode.svg";
import "./NavBar.scss";

const NavBar = () => {
  const toggleMode = () => document.body.classList.toggle('darkmode');

  return (
    <div>
      <header>
        <nav>
          <div className="controller">
            <img className="controller-image" src={Menu} alt="Menu" />
            <span>MENU</span>
            <img onClick={ toggleMode } className="controller-image" src={ColorMode} alt="ColorMode" />
          </div>
          <div className="nav-logo-container">
            <img className="nav-logo" src={Logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="/news">news</a>
            </li>
            <li>
              <a href="/opinion">opinion</a>
            </li>
            <li>
              <a href="/life">life</a>
            </li>
            <li>
              <a href="/business">business</a>
            </li>
            <li>
              <a href="/magazine">magazine</a>
            </li>
            <li>
              <a href="/newsletter">newsletter</a>
            </li>
          </ul>
          <hr />
        </nav>
      </header>
    </div>
  )
};

export default NavBar;
