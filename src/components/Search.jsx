/** @format */

import { useContext, useEffect } from "react";
import { CountriesContext } from "./AppContent";

function Search() {
  const {
    allCountries,
    setCurCountries,
    searchInput,
    setSearchInput,
    filterRegion,
  } = useContext(CountriesContext);

  useEffect(() => {
    // Logic for Filter & search work together
    const filteredCountries = allCountries.filter((country) => {
      const searchByRegion =
        filterRegion !== "Filter by Region"
          ? country.region === filterRegion
          : true;
      return (
        country.name.common.toLowerCase().includes(searchInput.toLowerCase()) &&
        searchByRegion
      );
    });

    setCurCountries(filteredCountries);
  }, [searchInput, setCurCountries, allCountries, filterRegion]);

  return (
    <div className="search-box">
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          className="svg-icon-search"
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
        />
      </svg>
      <input
        placeholder="Search for a country..."
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
