import { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";

import "./CardCountry.css";

export default function CardCountry({
  imgSrc,
  title,
  population,
  region,
  capital,
}) {
  const ctx = useContext(ThemeContext)
  return (
    <Link to={"/" + title} style={{ textDecoration: "none"}} className="cardsCountry">
      <Card
        style={{ width: "15rem", border: "none" }}
        className={`my-5 mx-1 cardCountry ${ctx.theme ? " element-dark-mode" : ""}`}
      >
        <Card.Img variant="top" src={imgSrc} alt={title} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "800" }} className="my-4">
            {title}
          </Card.Title>
          <Card.Text>
            <span className="d-block my-1">
              Population : <span>{population}</span>
            </span>
            <span className="d-block my-1">
              Region : <span>{region}</span>
            </span>
            <span className="d-block my-1">
              Capital : <span>{capital}</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
