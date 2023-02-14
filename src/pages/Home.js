import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";

export default function Home() {
  return (
    <section className="d-flex justify-content-between mt-4">
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
  );
}
