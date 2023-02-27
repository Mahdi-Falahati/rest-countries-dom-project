import { Outlet, NavLink } from "react-router-dom";

import "./RootLayout.css";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

export default function RootLayout() {
  const ctx = useContext(ThemeContext);
  const darkModeHandler = () => {
    ctx.themeSetterToggle();
  };
  return (
    <>
      <header
        className={`header py-2 ${ctx.theme ? " element-dark-mode" : ""}`}
      >
        <Container>
          <Row>
            <Col>
              <nav className="navbar">
                <NavLink
                  to="/"
                  className={ctx.theme ? " element-dark-mode" : ""}
                >
                  Where in the world ?{" "}
                </NavLink>
                <button className={`darkMode ${ctx.theme?" element-dark-mode":""} `} onClick={darkModeHandler}>
                  <FontAwesomeIcon icon={faMoon} className="moonIcon" /> Dark
                  Mode
                </button>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>

      <main className={`main ${ctx.theme?" bg-dark-mode":""}`}>
        <Container>
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
