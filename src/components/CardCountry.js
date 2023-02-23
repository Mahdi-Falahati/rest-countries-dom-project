import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./CardCountry.css";

export default function CardCountry({
  imgSrc,
  title,
  population,
  region,
  capital,
}) {
  return (
    <Link to={"/" + title} style={{ textDecoration: "none"}}>
      <Card
        style={{ width: "15rem", border: "none" }}
        className="my-5 mx-1 cardCountry"
      >
        <Card.Img variant="top" src={imgSrc} alt={title} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "800" }} className="my-4">
            {title}
          </Card.Title>
          <Card.Text>
            <span className="d-block my-1">
              Population : <span className="text-secondary">{population}</span>
            </span>
            <span className="d-block my-1">
              Region : <span className="text-secondary">{region}</span>
            </span>
            <span className="d-block my-1">
              Capital : <span className="text-secondary">{capital}</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}
