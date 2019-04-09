import React from "react";
import { navigateToUrl } from "single-spa";

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" onClick={navigateToUrl} className="brand-logo">
        single-spa
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="/home/app1" onClick={navigateToUrl}>
            Home
          </a>
        </li>
        <li>
          <a href="/home/app2" onClick={navigateToUrl}>
            Test
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
