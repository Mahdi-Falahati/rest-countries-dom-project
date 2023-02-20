import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowCards(props) {
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
        <select className="border-0 filter" onChange={props.onChange}>
          <option value="All">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>
      <section className="d-flex justify-content-center justify-content-sm-between mt-4 flex-wrap">
        {props.cards}
      </section>
    </>
  );
}
