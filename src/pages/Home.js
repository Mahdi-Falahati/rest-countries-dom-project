import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Api from "../Api";
import CardCountry from "../components/CardCountry";
import "./Home.css";

export default function Home() {
  const [countary, setCountary] = useState([]);
  useEffect(() => {
    Api("https://restcountries.com/v3.1/all").then((data) => {
      setCountary(data);
    });
  }, []);

  const result = countary?.map((item, index) => {
    return (
      <CardCountry
        key={index}
        imgSrc={item.flags.png}
        title={item.name.common}
        population={item.population}
        region={item.region}
        capital={item.capital}
      />
    );
  });

  return (
    <>
      <section className="d-flex justify-content-between mt-4 flex-wrap">
        <form className="searchForm">
          <button type="submit" className="border-0">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="magnify" />
          </button>
          <input
            type="search"
            className="border-0"
            placeholder="search for a country..."
          />
        </form>
        <select className="border-0 filter">
          <option>Filter by Region</option>
        </select>
      </section>
      <section className="d-flex justify-content-between mt-4 flex-wrap">
        {result}
      </section>
    </>
  );
}
