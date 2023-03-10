import { useContext } from "react";
import Col from "react-bootstrap/Col";
import "../pages/CountryInfo.css";
import { ThemeContext } from "../ThemeContext";

export default function Country({
  name,
  svg,
  alt,
  borders,
  region,
  subregion,
  population,
  capital,
  currency,
  nName,
  topLevelDomin,
  lang,
}) {
  const ctx = useContext(ThemeContext)
  return (
    <>
      <Col className="my-4 ">
        <img src={svg} alt={alt} className="col-12" />
      </Col>

      <Col className="p-5 col-md-6 col-12">
        <h2 className="titr">{name}</h2>
        <section className="d-flex justify-content-between flex-md-row flex-column">
          <ul className="my-4 text-capitalize p-0">
            <li>Native Name: {nName}</li>
            <li>population: {population}</li>
            <li>Region: {region}</li>
            <li>Sub Region: {subregion}</li>
            <li>Capital: {capital}</li>
          </ul>
          <ul className="my-4 text-capitalize p-0">
            <li>Top Level Domin: {topLevelDomin}</li>
            <li>currencies: {currency}</li>
            <li>Languegs: {lang}</li>
          </ul>
        </section>
        <section className="d-flex justify-content-start flex-wrap align-items-center">
          <span className="border-Coutries me-3">Border Coutries:</span>
          {borders?.map((item, index) => {
            return (
              <button className={`bordersBtn ${ctx.theme ? " element-dark-mode" : ""}`} key={index}>
                {item}
              </button>
            );
          })}
          {!borders && " Border Coutries Is Not Exist..."}
        </section>
      </Col>
    </>
  );
}
