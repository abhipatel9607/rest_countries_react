/** @format */

import { useEffect, useContext } from "react";
import { CountriesContext } from "./AppContent";

function Filter() {
  const {
    filterRegion,
    setFilterRegion,
    searchInput,
    allCountries,
    setCurCountries,
  } = useContext(CountriesContext);

  const regions = allCountries.reduce((acc, country) => {
    acc.includes(country.region) ? null : acc.push(country.region);
    return acc;
  }, []);
  regions.unshift("Filter by Region");

  useEffect(() => {
    // Logic for Filter & search work together
    let filteredCountries;
    if (filterRegion === "Filter by Region" && !searchInput) {
      filteredCountries = allCountries;
    } else if (filterRegion === "Filter by Region" && searchInput) {
      filteredCountries = allCountries.filter((country) =>
        country.name.common.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      filteredCountries = allCountries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(searchInput.toLowerCase()) &&
          country.region === filterRegion
      );
    }
    setCurCountries(filteredCountries);
  }, [filterRegion, allCountries, setCurCountries, searchInput]);
  return (
    <div>
      <select
        className="filter"
        onChange={(e) => setFilterRegion(e.target.value)}
        value={filterRegion}
      >
        {regions.map((region, i) => (
          <option key={i + 1} value={`${region}`}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
