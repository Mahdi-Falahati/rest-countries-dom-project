import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, NavLink } from "react-router-dom";

import "./RootLayout.css";

export default function RootLayout() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <NavLink to="/">Where in the world ? </NavLink>
          <button>
          <FontAwesomeIcon icon={faMoon} /> Dark Mode <FontAwesomeIcon icon="fa-regular fa-moon" />
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
