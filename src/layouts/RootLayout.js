import { Outlet, NavLink } from "react-router-dom";

import "./RootLayout.css";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RootLayout() {
  return (
    <>
      <header className="header py-2">
        <Container>
          <Row>
            <Col>
              <nav className="navbar">
                <NavLink to="/">Where in the world ? </NavLink>
                <button className="darkMode">
                  <FontAwesomeIcon icon={faMoon} className="moonIcon" /> Dark
                  Mode
                </button>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>

      <main className="main">
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
